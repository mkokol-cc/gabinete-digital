import { Component } from '@angular/core';
import { TipoComprobanteComponent } from './tipo-comprobante/tipo-comprobante.component';

@Component({
  selector: 'app-comprobantes',
  standalone: true,
  imports: [
    TipoComprobanteComponent
  ],
  templateUrl: './comprobantes.component.html',
  styleUrl: './comprobantes.component.scss'
})
export class ComprobantesComponent {
  tipoComprobante:string = '';
}
