import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-alta-seguro-vehiculos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './alta-seguro-vehiculos.component.html',
  styleUrls: ['./alta-seguro-vehiculos.component.scss']
})
export class AltaSeguroVehiculosComponent {
  form = new FormGroup({
    nombreAlumno: new FormControl(''),
    curso: new FormControl(''),
    division: new FormControl(''),
    calleNumero: new FormControl(''),
    barrio: new FormControl(''),
    localidad: new FormControl(''),
    nombreEmpresa: new FormControl(''),
    cuit: new FormControl('30-12345678-9'),
    vehiculos: new FormArray([this.crearVehiculo()]),
    cobertura: new FormControl(''),
    aceptaTerminos: new FormControl(false),
  });

  get vehiculos(): FormArray {
    return this.form.get('vehiculos') as FormArray;
  }

  crearVehiculo(): FormGroup {
    return new FormGroup({
      marca: new FormControl(''),
      modelo: new FormControl(''),
      patente: new FormControl(''),
      valor: new FormControl(''),
    });
  }

  agregarVehiculo() {
    this.vehiculos.push(this.crearVehiculo());
  }

  eliminarVehiculo(index: number) {
    this.vehiculos.removeAt(index);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
