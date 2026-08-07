import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dgr-mis-cuentas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mis-cuentas.component.html',
  styleUrl: './mis-cuentas.component.scss'
})
export class MisCuentasComponent {
  welcome = {
    nombre: 'Juan Pérez',
    contribuyente: 'Contribuyente N° 30-12345678-9',
    cuit: 'CUIT 30-12345678-9'
  };

  resumen = [
    { label: 'Impuestos Activos', valor: '3', icon: 'bi bi-receipt', color: '#002443' },
    { label: 'Inmuebles Registrados', valor: '2', icon: 'bi bi-building', color: '#004582' },
    { label: 'Vehículos', valor: '1', icon: 'bi bi-truck-front', color: '#10b981' },
    { label: 'Último Pago', valor: '$ 45.000', icon: 'bi bi-credit-card', color: '#f59e0b' },
  ];

  servicios = [
    { nombre: 'Ingresos Brutos', icono: 'bi bi-shop', desc: 'Tech Solutions SRL — Act. principal: Servicios TI', monto: '$ 45.000' },
    { nombre: 'Impuesto Inmobiliario', icono: 'bi bi-building', desc: 'Inmueble — Av. Rivadavia 4567', monto: '$ 12.500' },
    { nombre: 'Impuesto Automotor', icono: 'bi bi-truck-front', desc: 'Ford Ranger 2020 — Dominio AA123BB', monto: '$ 8.200' },
  ];

  movimientos = [
    { fecha: '15/07/2026', concepto: 'Ingresos Brutos — Julio 2026', monto: '$ 45.000', estado: 'Pagado' },
    { fecha: '10/07/2026', concepto: 'Inmobiliario — 2° cuota', monto: '$ 12.500', estado: 'Pagado' },
    { fecha: '28/06/2026', concepto: 'Automotor — 1° cuota', monto: '$ 8.200', estado: 'Pagado' },
    { fecha: '15/06/2026', concepto: 'Ingresos Brutos — Junio 2026', monto: '$ 45.000', estado: 'Pagado' },
    { fecha: '01/06/2026', concepto: 'Convenio de Pago', monto: '$ 15.300', estado: 'Pendiente' },
  ];
}
