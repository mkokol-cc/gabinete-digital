import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-alta-inmobiliario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './alta-inmobiliario.component.html',
  styleUrls: ['./alta-inmobiliario.component.scss']
})
export class AltaInmobiliarioComponent {
  form = new FormGroup({
    nombreContribuyente: new FormControl(''),
    cuit: new FormControl('30-12345678-9'),
    direccion: new FormControl(''),
    barrio: new FormControl(''),
    localidad: new FormControl(''),
    partidaInmobiliaria: new FormControl(''),
    nombrePropietario: new FormControl(''),
    nroCuentaInmobiliaria: new FormControl('IB-77221-X'),
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
