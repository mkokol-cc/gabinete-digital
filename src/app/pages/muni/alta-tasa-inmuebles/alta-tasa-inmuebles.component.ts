import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-alta-tasa-inmuebles',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './alta-tasa-inmuebles.component.html',
  styleUrls: ['./alta-tasa-inmuebles.component.scss']
})
export class AltaTasaInmueblesComponent {
  form = new FormGroup({
    nombreAlumno: new FormControl(''),
    curso: new FormControl(''),
    division: new FormControl(''),
    nombreEmpresa: new FormControl(''),
    cuit: new FormControl('30-12345678-9'),
    direccion: new FormControl(''),
    barrio: new FormControl(''),
    localidad: new FormControl(''),
    identificacionInmueble: new FormControl(''),
    nombrePropietario: new FormControl(''),
    nroCuentaMunicipal: new FormControl('MUN-77221-X'),
    tipoInmueble: new FormControl(''),
    usoInmueble: new FormControl(''),
    condicion: new FormControl('propio'),
    nombrePropietarioAlquilado: new FormControl(''),
    declaracion: new FormControl(''),
    declaracionJurada: new FormControl(false),
    firma: new FormControl(''),
    fecha: new FormControl(''),
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
