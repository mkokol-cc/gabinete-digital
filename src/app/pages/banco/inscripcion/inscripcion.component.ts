import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inscripcion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inscripcion.component.html',
  styleUrl: './inscripcion.component.scss'
})
export class InscripcionComponent {
  cuitAuto: string = '30-12345678-9';

  onSubmit() {
    console.log('Formulario enviado');
    alert('Solicitud enviada con éxito. Procesando alta de cuenta...');
  }
}
