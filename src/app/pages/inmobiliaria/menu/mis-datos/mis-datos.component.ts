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
    email: 'juan.perez@email.com',
    telefono: '(011) 15-1234-5678',
    dni: '28.123.456',
    direccion: 'Av. Corrientes 1234, CABA',
    fechaNacimiento: '15/03/1990',
    ocupacion: 'Martillero Público',
    matricula: 'MP-12345',
  };
}
