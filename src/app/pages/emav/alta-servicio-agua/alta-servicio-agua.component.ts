import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-alta-servicio-agua',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './alta-servicio-agua.component.html',
  styleUrls: ['./alta-servicio-agua.component.scss']
})
export class AltaServicioAguaComponent {
  form = new FormGroup({
    nombreAlumno: new FormControl(''),
    curso: new FormControl(''),
    division: new FormControl(''),
    nombreEmpresa: new FormControl(''),
    calleNumero: new FormControl(''),
    barrio: new FormControl(''),
    localidad: new FormControl(''),
    tipoSuministro: new FormControl(''),
    condicionInmueble: new FormControl('propio'),
    nombrePropietario: new FormControl(''),
    contratoAlquiler: new FormControl(''),
    aceptaTerminos: new FormControl(false),
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
