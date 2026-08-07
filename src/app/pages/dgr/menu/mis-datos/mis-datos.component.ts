import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dgr-mis-datos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mis-datos.component.html',
  styleUrl: './mis-datos.component.scss'
})
export class MisDatosComponent {
  usuario = {
    nombre: 'Juan Pérez',
    cuim: '30-12345678-9',
    cuit: '30-12345678-9',
    email: 'juan.perez@correo.com',
    telefono: '+54 9 353 456-7890',
    direccion: 'Av. Colón 1250, Córdoba Capital',
    condicionFiscal: 'Responsable Inscripto',
    tipoContribuyente: 'Local',
    actividad: 'Servicios informáticos',
  };
}
