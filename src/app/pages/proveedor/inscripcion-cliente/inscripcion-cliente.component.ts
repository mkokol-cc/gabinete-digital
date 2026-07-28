import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-inscripcion-cliente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inscripcion-cliente.component.html',
  styleUrls: ['./inscripcion-cliente.component.scss']
})
export class InscripcionClienteComponent {
  form = new FormGroup({
    nombreAlumno: new FormControl(''),
    curso: new FormControl(''),
    division: new FormControl(''),
    nombreEmpresa: new FormControl(''),
    cuit: new FormControl('30-12345678-9'),
    domicilio: new FormControl(''),
    actividad: new FormControl(''),
    condicionFiscal: new FormControl(''),
    cuentaCorriente: new FormControl({ value: true, disabled: true }),
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
