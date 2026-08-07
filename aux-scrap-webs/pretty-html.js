const fs = require("fs");

const file = process.argv[2];
let src = fs.readFileSync(file, "utf8");

const VOID = new Set(["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"]);
const INLINE = new Set(["a","abbr","b","bdi","bdo","br","cite","code","data","dfn","em","i","img","kbd","mark","q","rp","rt","ruby","s","samp","small","span","strong","sub","sup","time","u","var","wbr"]);

const tokens = [];
const re = /<!--[\s\S]*?-->|<[^>]*>|[^<]+/g;
let m;
while ((m = re.exec(src))) tokens.push(m[0]);

function parse(tokens) {
  let i = 0;
  function node() {
    const t = tokens[i++];
    if (t === undefined) return null;
    if (t.startsWith("<!--")) return { type: "comment", raw: t };
    if (!t.startsWith("<")) {
      return { type: "text", raw: t };
    }
    const mtag = /^<\s*(\/?)([a-zA-Z][a-zA-Z0-9-]*)([^>]*)>?$/.exec(t);
    if (!mtag) return { type: "text", raw: t }; // malformed, keep as text
    const [, slash, name, restRaw] = mtag;
    if (slash) return { type: "close", name };
    const selfClosing = /\/\s*>$/.test(restRaw);
    const attrs = restRaw.replace(/\/\s*$/, "");
    if (VOID.has(name) || selfClosing) {
      return { type: "void", name, raw: t };
    }
    const children = [];
    while (true) {
      if (i >= tokens.length) break;
      const peek = tokens[i];
      if (/^<\/\s*/.test(peek) && new RegExp("^<\\s*/\\s*" + name + "\\s*>$").test(peek)) { i++; break; }
      const c = node();
      if (c === null) break;
      children.push(c);
    }
    return { type: "elem", name, attrs, children };
  }
  const root = [];
  while (i < tokens.length) { const n = node(); if (n) root.push(n); }
  return root;
}

const tree = parse(tokens);

function isInline(n) { return n.type === "void" && INLINE.has(n.name) || n.type === "text" && n.raw.trim() !== "" || n.type === "elem" && INLINE.has(n.name); }

function tokenizeAttrs(s) {
  const out = [];
  const re = /[^\s=]+(?:="[^"]*"|='[^']*')?/g;
  let m;
  while ((m = re.exec(s))) out.push(m[0]);
  return out;
}

function buildTag(n, pad) {
  const name = n.name;
  const attrs = n.attrs || "";
  const single = "<" + name + attrs + ">";
  if (attrs && pad.length + single.length > 100) {
    const tokens = tokenizeAttrs(attrs);
    if (tokens.length >= 2) {
      const lines = ["<" + name];
      for (const a of tokens) lines.push(pad + "  " + a);
      lines[lines.length - 1] += ">";
      return lines.join("\n");
    }
  }
  return single;
}

function render(n, indent) {
  const pad = "  ".repeat(indent);
  if (n.type === "comment") return pad + n.raw;
  if (n.type === "text") {
    const trimmed = n.raw.trim();
    return trimmed ? pad + trimmed : null;
  }
  if (n.type === "void") return pad + n.raw;
  // elem
  const tag = buildTag(n, pad);
  const childLines = [];
  for (const c of n.children) {
    const r = render(c, indent + 1);
    if (r !== null) childLines.push(r);
  }
  if (childLines.length === 0) return pad + tag + "</" + n.name + ">";
  const allInline = childLines.length && n.children.every(isInline);
  if (allInline) {
    const inner = n.children.map(c => {
      if (c.type === "text") return c.raw;
      if (c.type === "void") return c.raw;
      const r = render(c, 0);
      return r ? r.trim() : "";
    }).join("");
    if (pad.length + tag.length + inner.length + ("</" + n.name + ">").length <= 120) {
      return pad + tag + inner + "</" + n.name + ">";
    }
  }
  const lines = [pad + tag];
  for (const c of n.children) {
    const r = render(c, indent + 1);
    if (r !== null) lines.push(r);
  }
  lines.push(pad + "</" + n.name + ">");
  return lines.join("\n");
}

const out = tree.map(n => render(n, 0)).filter(Boolean).join("\n") + "\n";
fs.writeFileSync(file, out);
console.log("formatted:", file, "->", out.length, "bytes,", out.split("\n").length, "lines");
