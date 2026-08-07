import { Component, EventEmitter, Output } from '@angular/core';
import { Paso1Component } from '../factura-c/paso-1/paso-1.component';
import { Paso2Component } from '../factura-c/paso-2/paso-2.component';
import { Paso3Component } from '../factura-c/paso-3/paso-3.component';
import { Paso4Component } from '../factura-c/paso-4/paso-4.component';

@Component({
  selector: 'app-factura-c-2',
  standalone: true,
  imports: [
    Paso1Component,
    Paso2Component,
    Paso3Component,
    Paso4Component
  ],
  templateUrl: './factura-c-2.component.html',
  styleUrl: './factura-c-2.component.scss'
})
export class FacturaC2Component {
  step:number = 1;

  @Output() volverTipoComprobante = new EventEmitter<void>();
  toSelectTipoComprobante(){
    this.step=1
    this.volverTipoComprobante.emit();
  }

  nextStep(event: boolean){
    if(event){
      if(this.step === 4){
        alert('Se ha completado el proceso de carga de la factura C');
      }else{
        this.step++;
      }
    }else{
      if(this.step === 1){
        this.toSelectTipoComprobante();
      }else{
        this.step--;
      }
    }
  }

}
