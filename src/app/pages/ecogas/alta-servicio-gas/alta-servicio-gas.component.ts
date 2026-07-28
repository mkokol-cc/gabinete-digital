import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-alta-servicio-gas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './alta-servicio-gas.component.html',
  styleUrls: ['./alta-servicio-gas.component.scss']
})
export class AltaServicioGasComponent {
  form = new FormGroup({
    nombreAlumno: new FormControl(''),
    curso: new FormControl(''),
    division: new FormControl(''),
    nombreEmpresa: new FormControl(''),
    actividadPrincipal: new FormControl(''),
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
