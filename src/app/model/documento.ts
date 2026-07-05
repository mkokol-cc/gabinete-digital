import { Entidad } from "./entidad";
import { VersionDocumento } from "./version-documento";

export interface Documento {
    id?: string;
    titulo:string;
    entidadOrigen: Entidad;
    entidadDestino: Entidad;
    fecha: Date;
    version: VersionDocumento;
    tipo: "PAGO" | "TRAMITE" | "CUOTA";
    monto?: number;//por si es una transferencia de dinero
    concepto?: string;//por si es una transferencia de dinero, si es un pago a un organismo aca va el id del tramite de tipo "CUOTA" a pagar
}
