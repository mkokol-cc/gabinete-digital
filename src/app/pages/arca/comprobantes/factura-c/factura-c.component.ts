import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-factura-c',
  standalone: true,
  imports: [],
  templateUrl: './factura-c.component.html',
  styleUrl: './factura-c.component.scss'
})
export class FacturaCComponent {
  
  step:number = 1;

  @Output() volverTipoComprobante = new EventEmitter<void>();
  toSelectTipoComprobante(){
    this.step=1
    this.volverTipoComprobante.emit();
  }


}
