import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-alta-ingresos-brutos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './alta-ingresos-brutos.component.html',
  styleUrls: ['./alta-ingresos-brutos.component.scss']
})
export class AltaIngresosBrutosComponent {
  form = new FormGroup({
    nombreContribuyente: new FormControl(''),
    cuit: new FormControl('30-12345678-9'),
    nombreEmpresa: new FormControl(''),
    actividadPrincipal: new FormControl(''),
    direccion: new FormControl(''),
    localidad: new FormControl(''),
    departamento: new FormControl(''),
    tipoActividad: new FormControl(''),
    nombreResponsable: new FormControl(''),
    dni: new FormControl(''),
    declaracion: new FormControl(''),
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
