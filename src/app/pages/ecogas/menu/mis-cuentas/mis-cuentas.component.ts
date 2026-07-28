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
    cliente: 'Cliente N° GAS-45821',
    direccion: 'Suministro: Sarmiento 89, Las Varillas'
  };

  resumen = [
    { label: 'Consumo Actual', valor: '185 m³', icon: 'bi bi-fire', color: '#0049af' },
    { label: 'Próximo Vencimiento', valor: '$ 12.450', icon: 'bi bi-calendar-event', color: '#e67e22' },
    { label: 'Último Pago', valor: '$ 11.200', icon: 'bi bi-check-circle', color: '#10b981' },
    { label: 'Estado del Servicio', valor: 'Activo', icon: 'bi bi-toggle-on', color: '#0049af' },
  ];

  servicios = [
    { nombre: 'Gas Natural', icono: 'bi bi-fire', numero: 'GAS-0045821-01', monto: '$ 12.450', estado: 'Pendiente', clase: 'pendiente' },
    { nombre: 'Gas Envasado', icono: 'bi bi-droplet-half', numero: 'GAS-0045821-02', monto: '$ 4.800', estado: 'Al día', clase: 'al-dia' },
    { nombre: 'Mantenimiento', icono: 'bi bi-tools', numero: 'SER-00897-01', monto: '$ 2.100', estado: 'Al día', clase: 'al-dia' },
  ];

  movimientos = [
    { fecha: '18/07/2026', concepto: 'Factura gas natural — Julio', monto: '$ 12.450', estado: 'Pendiente' },
    { fecha: '15/06/2026', concepto: 'Factura gas natural — Junio', monto: '$ 11.200', estado: 'Pagado' },
    { fecha: '12/05/2026', concepto: 'Factura gas natural — Mayo', monto: '$ 10.800', estado: 'Pagado' },
    { fecha: '10/04/2026', concepto: 'Factura gas envasado — Abril', monto: '$ 4.500', estado: 'Pagado' },
    { fecha: '08/03/2026', concepto: 'Factura gas natural — Marzo', monto: '$ 9.800', estado: 'Pagado' },
  ];
}
