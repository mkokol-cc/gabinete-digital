import { Component } from '@angular/core';

@Component({
  selector: 'app-mis-datos',
  standalone: true,
  imports: [],
  templateUrl: './mis-datos.component.html',
  styleUrl: './mis-datos.component.scss'
})
export class MisDatosComponent {
  usuario = {
    nombre: 'Juan Pérez',
    socio: '12.345',
    email: 'juan.perez@email.com',
    telefono: '(03533) 42-1234',
    dni: '28.123.456',
    direccion: 'Avellaneda 275, Las Varillas, Córdoba',
    fechaNacimiento: '15/03/1990',
    categoria: 'Servicio General',
  };
}
