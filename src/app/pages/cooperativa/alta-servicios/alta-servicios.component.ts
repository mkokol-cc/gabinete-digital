import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-alta-servicios',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './alta-servicios.component.html',
  styleUrls: ['./alta-servicios.component.scss']
})
export class AltaServiciosComponent {
  form = new FormGroup({
    nombreAlumno: new FormControl(''),
    curso: new FormControl(''),
    division: new FormControl(''),
    nombreEmpresa: new FormControl(''),
    actividadPrincipal: new FormControl(''),
    cuit: new FormControl('30-12345678-9'),
    servicios: new FormGroup({
      energia: new FormControl(false),
      telefoniaFija: new FormControl(false),
      telefoniaMovil: new FormControl(false),
      internet: new FormControl(false),
    }),
    detalleEnergia: new FormControl(''),
    lineasFijas: new FormControl(''),
    lineasMoviles: new FormControl(''),
    planInternet: new FormControl(''),
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
