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
    nombre: 'Juan Pérez',
    cliente: 'CL-45821',
    email: 'juan.perez@email.com',
    telefono: '(03533) 429-611',
    dni: '28.456.321',
    direccion: 'Dr. Diego Montoya 488, Las Varillas, Córdoba',
    categoria: 'Residencial',
    fechaAlta: '15/03/2018'
  };
}
