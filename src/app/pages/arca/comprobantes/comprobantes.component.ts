import { Component } from '@angular/core';
import { TipoComprobanteComponent } from './tipo-comprobante/tipo-comprobante.component';
import { FacturaCComponent } from './factura-c/factura-c.component';
import { FacturaC2Component } from './factura-c-2/factura-c-2.component';

@Component({
  selector: 'app-comprobantes',
  standalone: true,
  imports: [
    TipoComprobanteComponent,
    FacturaCComponent,
    FacturaC2Component
  ],
  templateUrl: './comprobantes.component.html',
  styleUrl: './comprobantes.component.scss'
})
export class ComprobantesComponent {
  tipoComprobante:string = '';
}
