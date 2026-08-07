import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-alta-automotor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './alta-automotor.component.html',
  styleUrls: ['./alta-automotor.component.scss']
})
export class AltaAutomotorComponent {
  form = new FormGroup({
    nombreContribuyente: new FormControl(''),
    cuit: new FormControl('30-12345678-9'),
    marca: new FormControl(''),
    modelo: new FormControl(''),
    anio: new FormControl(''),
    dominio: new FormControl(''),
    nroRegistroAutomotor: new FormControl('AUT-99221'),
    declaracion: new FormControl(''),
    fecha: new FormControl(''),
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
