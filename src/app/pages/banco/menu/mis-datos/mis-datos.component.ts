import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mis-datos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mis-datos.component.html',
  styleUrl: './mis-datos.component.scss'
})
export class MisDatosBancoComponent {
  user = {
    nombre: 'Juan Carlos Pérez',
    dni: '28.123.456',
    email: 'jperez@correo.com',
    telefono: '(03533) 15-678901',
    direccion: 'Av. San Martín 850, Las Varillas, Córdoba',
    cbu: '0110542130054200123456',
    cuit: '20-28123456-7',
  };
}
