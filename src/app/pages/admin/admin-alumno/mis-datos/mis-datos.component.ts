import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mis-datos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mis-datos.component.html',
  styleUrl: './mis-datos.component.scss'
})
export class MisDatosComponent {
  usuario = {
    nombre: 'Juan Carlos',
    apellido: 'Pérez',
    username: 'jcperez',
    email: 'juan.perez@email.com',
    telefono: '+54 9 351 555-1234',
    fechaNacimiento: new Date('1990-05-15'),
    domicilio: 'Av. General Paz 1234, Córdoba, Argentina',
    rol: {
      nombre: 'Alumno'
    },
    entidad: {
      nombre: 'Universidad Nacional de Córdoba',
      cuit: '30-71234567-9',
      logo: '',
      tipo: 'ORGANISMO' as const
    },
    legajo: 'ALU-2024-0891',
    carrera: 'Ingeniería en Sistemas',
    anioIngreso: 2024
  };

  get iniciales(): string {
    return this.usuario.nombre.charAt(0) + this.usuario.apellido.charAt(0);
  }
}
