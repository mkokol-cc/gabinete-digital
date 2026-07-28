import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contrato-alquiler',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contrato-alquiler.component.html',
  styleUrls: ['./contrato-alquiler.component.scss']
})
export class ContratoAlquilerComponent {
  form = new FormGroup({
    nombreAlumno: new FormControl(''),
    curso: new FormControl(''),
    division: new FormControl(''),
    nombreLocador: new FormControl(''),
    nombreEmpresa: new FormControl(''),
    actividadPrincipal: new FormControl(''),
    cuit: new FormControl('30-12345678-9'),
    email: new FormControl(''),
    direccionInmueble: new FormControl(''),
    tipoInmueble: new FormControl(''),
    fechaInicio: new FormControl(''),
    duracionContrato: new FormControl(''),
    destinoInmueble: new FormControl(''),
    precioMensual: new FormControl(''),
    garantia: new FormControl(''),
    formaPago: new FormControl(''),
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
