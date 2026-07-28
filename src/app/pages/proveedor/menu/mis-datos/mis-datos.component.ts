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
    razonSocial: 'Tech Solutions SRL',
    cliente: 'PROV-0045821',
    cuit: '30-12345678-9',
    email: 'juan.perez@techsolutions.com.ar',
    telefono: '(011) 4856-7890',
    direccion: 'Av. Rivadavia 4567, CABA, Buenos Aires',
    condicionFiscal: 'Responsable Inscripto',
    actividad: 'Servicios de TI'
  };
}
