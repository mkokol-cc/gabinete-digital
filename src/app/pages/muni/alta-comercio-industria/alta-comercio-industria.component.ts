import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-alta-comercio-industria',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './alta-comercio-industria.component.html',
  styleUrls: ['./alta-comercio-industria.component.scss']
})
export class AltaComercioIndustriaComponent {
  form = new FormGroup({
    nombreAlumno: new FormControl(''),
    curso: new FormControl(''),
    division: new FormControl(''),
    nombreEmpresa: new FormControl(''),
    cuit: new FormControl('30-12345678-9'),
    actividadPrincipal: new FormControl(''),
    direccion: new FormControl(''),
    localidad: new FormControl(''),
    tipoActividad: new FormControl(''),
    nombreResponsable: new FormControl(''),
    dni: new FormControl(''),
    declaracion: new FormControl(''),
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
