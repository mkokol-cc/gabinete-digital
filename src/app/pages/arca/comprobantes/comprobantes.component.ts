import { Component } from '@angular/core';
import { TipoComprobanteComponent } from './tipo-comprobante/tipo-comprobante.component';
import { FacturaCComponent } from './factura-c/factura-c.component';

@Component({
  selector: 'app-comprobantes',
  standalone: true,
  imports: [
    TipoComprobanteComponent,
    FacturaCComponent
  ],
  templateUrl: './comprobantes.component.html',
  styleUrl: './comprobantes.component.scss'
})
export class ComprobantesComponent {
  tipoComprobante:string = '';
}
