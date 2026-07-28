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
    cliente: 'GAS-45821',
    cuit: '30-12345678-9',
    email: 'juan.perez@email.com',
    telefono: '(03533) 429-611',
    direccion: 'Sarmiento 89, Las Varillas, Córdoba',
    categoria: 'Residencial',
    fechaAlta: '12/02/2019'
  };
}
