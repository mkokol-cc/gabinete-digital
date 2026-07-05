import { Usuario } from "./usuario";

export interface EstadoDocumento {
    nombre: string;
}

export interface CambioEstadoDocumento {
    estadoNuevo: EstadoDocumento;
    fecha: Date;
    usuario: Usuario;
}