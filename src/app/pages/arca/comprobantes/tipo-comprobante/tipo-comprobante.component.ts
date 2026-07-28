import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tipo-comprobante',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './tipo-comprobante.component.html',
  styleUrl: './tipo-comprobante.component.scss'
})
export class TipoComprobanteComponent {

  step:number = 0;
  selectedTipoComprobante:string = '';
  
  @Output() seleccionTipoComprobante = new EventEmitter<string>();
  toSelectTipoComprobante(){
    //this.step=0;
    this.seleccionTipoComprobante.emit(this.selectedTipoComprobante);
  }
  
}
