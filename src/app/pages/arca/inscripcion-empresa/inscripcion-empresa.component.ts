import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-inscripcion-empresa',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inscripcion-empresa.component.html',
  styleUrls: ['./inscripcion-empresa.component.scss']
})
export class InscripcionEmpresaComponent {
  form = new FormGroup({
    nombreAlumno: new FormControl(''),
    curso: new FormControl(''),
    division: new FormControl(''),
    usuario: new FormControl(''),
    clave: new FormControl(''),
    repetirClave: new FormControl(''),
    nombreEmpresa: new FormControl(''),
    actividadPrincipal: new FormControl(''),
    domicilio: new FormControl(''),
    cuit: new FormControl('30-12345678-9'),
    impuestos: new FormGroup({
      iva: new FormControl(false),
      monotributo: new FormControl(false),
      autonomos: new FormControl(false),
      ganancias: new FormControl(false),
    }),
    aceptaTerminos: new FormControl(false),
    firma: new FormControl(''),
    fecha: new FormControl(''),
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
