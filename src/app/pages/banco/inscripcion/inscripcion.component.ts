import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-inscripcion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.scss']
})
export class InscripcionComponent {
  form = new FormGroup({
    nombreAlumno: new FormControl(''),
    curso: new FormControl(''),
    division: new FormControl(''),
    nombreEmpresa: new FormControl(''),
    razonSocial: new FormControl(''),
    cuit: new FormControl('30-12345678-9'),
    actividadPrincipal: new FormControl(''),
    calleNumero: new FormControl(''),
    localidad: new FormControl(''),
    provincia: new FormControl(''),
    nombreResponsable: new FormControl(''),
    cargo: new FormControl(''),
    tipoCuenta: new FormGroup({
      corriente: new FormControl(false),
      ahorro: new FormControl(false),
    }),
    usoCuenta: new FormGroup({
      pagos: new FormControl(false),
      cobros: new FormControl(false),
      transferencias: new FormControl(false),
      efectivo: new FormControl(false),
    }),
    serviciosAsociados: new FormGroup({
      eCheq: new FormControl(false),
      debitoAutomatico: new FormControl(false),
      deposito: new FormControl(false),
      transferencias: new FormControl(false),
    }),
    nombreAutorizado: new FormControl(''),
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
