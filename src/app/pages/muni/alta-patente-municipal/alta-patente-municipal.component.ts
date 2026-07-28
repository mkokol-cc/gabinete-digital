import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-alta-patente-municipal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './alta-patente-municipal.component.html',
  styleUrls: ['./alta-patente-municipal.component.scss']
})
export class AltaPatenteMunicipalComponent {
  form = new FormGroup({
    nombreAlumno: new FormControl(''),
    curso: new FormControl(''),
    division: new FormControl(''),
    nombreEmpresa: new FormControl(''),
    cuit: new FormControl('30-12345678-9'),
    marca: new FormControl(''),
    modelo: new FormControl(''),
    anio: new FormControl(''),
    dominio: new FormControl(''),
    nroRegistroMunicipal: new FormControl('REG-99221'),
    declaracion: new FormControl(''),
    fecha: new FormControl(''),
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
