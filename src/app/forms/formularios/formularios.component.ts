import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  standalone: true,
  imports: [CommonModule, FormsModule], // Asegúrate de que CommonModule y FormsModule estén importados
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.scss']
})
export class FormulariosComponent implements OnInit {
  // Data for auto-generated fields
  cuitAuto: string = '30-12345678-9';
  
  // States for conditional visibility
  muniPropCond: string = 'propio';
  gasCond: string = 'propio';

  // Repeaters
  vehiculos: any[] = [{ marca: '', modelo: '', patente: '', valor: 0 }];
  productos: any[] = [{ nombre: '', cant: 1, precio: 0 }];

  ngOnInit(): void {
    // Podrías inicializar datos aquí si fuera necesario
  }

  addVehiculo() {
    this.vehiculos.push({ marca: '', modelo: '', patente: '', valor: 0 });
  }

  addProducto() {
    this.productos.push({ nombre: '', cant: 1, precio: 0 });
  }
}