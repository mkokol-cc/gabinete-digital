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
    cuim: 'MUN-77221-X',
    cuit: '30-12345678-9',
    email: 'juan.perez@email.com',
    telefono: '(03533) 422-150',
    direccion: 'Sarmiento 89, Las Varillas, Córdoba',
    condicionFiscal: 'Responsable Inscripto',
    tipoContribuyente: 'Comercial',
    actividad: 'Servicios de TI'
  };
}
