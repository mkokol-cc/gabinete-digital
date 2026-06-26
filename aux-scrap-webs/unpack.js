const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");
const mime = require("mime-types");

if (process.argv.length < 3) {
    console.log("Uso: node unpack.js archivo.html");
    process.exit(1);
}

const inputFile = process.argv[2];
const outputDir = path.join(path.dirname(inputFile), "assets");

if (!fs.existsSync(outputDir))
    fs.mkdirSync(outputDir);

let html = fs.readFileSync(inputFile, "utf8");
const $ = cheerio.load(html);

let count = 1;

function saveDataUri(dataUri) {
    const match = dataUri.match(/^data:([^;]+);base64,(.*)$/s);

    if (!match) return null;

    const mimeType = match[1];
    const base64 = match[2];

    const ext = mime.extension(mimeType) || "bin";

    const filename = `asset_${String(count++).padStart(4, "0")}.${ext}`;

    fs.writeFileSync(
        path.join(outputDir, filename),
        Buffer.from(base64, "base64")
    );

    return "assets/" + filename;
}

// img src
$("img").each((i, el) => {
    const src = $(el).attr("src");
    if (src && src.startsWith("data:")) {
        const newSrc = saveDataUri(src);
        if (newSrc)
            $(el).attr("src", newSrc);
    }
});

// CSS inline
$("[style]").each((i, el) => {
    let style = $(el).attr("style");

    style = style.replace(
        /url\((data:[^)]+)\)/g,
        (_, data) => {
            const newSrc = saveDataUri(data);
            return `url(${newSrc})`;
        }
    );

    $(el).attr("style", style);
});

// style tags
$("style").each((i, el) => {

    let css = $(el).html();

    css = css.replace(
        /url\((data:[^)]+)\)/g,
        (_, data) => {
            const newSrc = saveDataUri(data);
            return `url("${newSrc}")`;
        }
    );

    $(el).text(css);

});

fs.writeFileSync(inputFile.replace(".html", ".clean.html"), $.html());

console.log("✔ Listo");
