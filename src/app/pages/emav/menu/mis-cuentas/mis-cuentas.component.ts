import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mis-cuentas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mis-cuentas.component.html',
  styleUrl: './mis-cuentas.component.scss'
})
export class MisCuentasComponent {
  welcome = {
    nombre: 'Juan Pérez',
    cliente: 'Cliente N° 45821',
    fecha: 'Última factura: Julio 2026'
  };

  resumen = [
    { label: 'Consumo Actual', valor: '32 m³', icon: 'fa-tint', color: '#0071BC' },
    { label: 'Próximo Vencimiento', valor: '$ 8.450', icon: 'fa-calendar', color: '#e67e22' },
    { label: 'Último Pago', valor: '$ 7.920', icon: 'fa-check-circle', color: '#27ae60' },
    { label: 'Estado', valor: 'Al día', icon: 'fa-thumbs-up', color: '#0071BC' },
  ];

  servicios = [
    { nombre: 'Agua Potable', icono: 'fa-tint', numero: 'CTA-0045821', monto: '$ 8.450', estado: 'Pendiente', clase: 'pendiente' },
    { nombre: 'Saneamiento', icono: 'fa-recycle', numero: 'SER-00312', monto: '$ 1.200', estado: 'Al día', clase: 'al-dia' },
    { nombre: 'Conexión Cloacal', icono: 'fa-pipe', numero: 'CLO-00897', monto: '$ 650', estado: 'Al día', clase: 'al-dia' },
  ];

  movimientos = [
    { fecha: '15/07/2026', concepto: 'Factura agua - Julio', monto: '$ 8.450', estado: 'Pendiente' },
    { fecha: '12/06/2026', concepto: 'Factura agua - Junio', monto: '$ 7.920', estado: 'Pagado' },
    { fecha: '10/05/2026', concepto: 'Factura agua - Mayo', monto: '$ 7.800', estado: 'Pagado' },
    { fecha: '08/04/2026', concepto: 'Factura agua - Abril', monto: '$ 7.500', estado: 'Pagado' },
    { fecha: '05/03/2026', concepto: 'Factura agua - Marzo', monto: '$ 7.200', estado: 'Pagado' },
  ];
}
