import { CambioEstadoDocumento } from "./estado-documento";

export interface VersionDocumento {
    numeroVersion: number;
    estado: CambioEstadoDocumento;
    cuerpoJson: string;
}
