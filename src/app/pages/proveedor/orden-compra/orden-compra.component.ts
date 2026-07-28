import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-orden-compra',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './orden-compra.component.html',
  styleUrls: ['./orden-compra.component.scss']
})
export class OrdenCompraComponent {
  form = new FormGroup({
    nroPedido: new FormControl('OC-2024-001'),
    fecha: new FormControl(''),
    productos: new FormArray([this.crearProducto()]),
  });

  get productos(): FormArray {
    return this.form.get('productos') as FormArray;
  }

  crearProducto(): FormGroup {
    return new FormGroup({
      nombre: new FormControl(''),
      cantidad: new FormControl(1),
      precioUnitario: new FormControl(0),
    });
  }

  agregarProducto() {
    this.productos.push(this.crearProducto());
  }

  eliminarProducto(index: number) {
    this.productos.removeAt(index);
  }

  calcularSubtotal(cantidad: number, precio: number): number {
    return (cantidad || 0) * (precio || 0);
  }

  calcularTotal(): number {
    return this.productos.controls.reduce((total, p) => {
      const cant = p.get('cantidad')?.value || 0;
      const precio = p.get('precioUnitario')?.value || 0;
      return total + cant * precio;
    }, 0);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
