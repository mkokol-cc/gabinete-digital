import { Entidad } from "./entidad";
import { Rol } from "./rol";

export interface Usuario {
    username: string;
    password: string;
    email: string;
    nombre: string;
    apellido: string;
    rol:Rol;
    entidad: Entidad;
}
