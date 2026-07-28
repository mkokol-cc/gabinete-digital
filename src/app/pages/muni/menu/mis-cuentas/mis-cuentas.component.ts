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
    contribuyente: 'Contribuyente N° MUN-77221-X',
    cuit: 'CUIT 30-12345678-9'
  };

  resumen = [
    { label: 'Tasas Activas', valor: '3', icon: 'bi bi-receipt', color: '#0b2a5c' },
    { label: 'Inmuebles Registrados', valor: '2', icon: 'bi bi-building', color: '#1f6fe0' },
    { label: 'Patentes', valor: '1', icon: 'bi bi-truck-front', color: '#10b981' },
    { label: 'Último Pago', valor: '$ 28.500', icon: 'bi bi-credit-card', color: '#f59e0b' },
  ];

  servicios = [
    { nombre: 'Tasa General de Inmuebles', icono: 'bi bi-building', desc: 'Inmueble comercial — Av. Rivadavia 4567', monto: '$ 12.500' },
    { nombre: 'Patente Municipal', icono: 'bi bi-truck-front', desc: 'Ford Ranger 2020 — Dominio AA123BB', monto: '$ 8.200' },
    { nombre: 'Comercio e Industria', icono: 'bi bi-shop', desc: 'Tech Solutions SRL — Act. principal: Servicios TI', monto: '$ 7.800' },
  ];

  movimientos = [
    { fecha: '15/07/2026', concepto: 'TGI — Julio 2026', monto: '$ 12.500', estado: 'Pagado' },
    { fecha: '10/07/2026', concepto: 'Patente — 2° cuota', monto: '$ 8.200', estado: 'Pagado' },
    { fecha: '28/06/2026', concepto: 'Comercio/Industria — Junio', monto: '$ 7.800', estado: 'Pagado' },
    { fecha: '15/06/2026', concepto: 'TGI — Junio 2026', monto: '$ 12.500', estado: 'Pagado' },
    { fecha: '01/06/2026', concepto: 'Tasa de Seguridad e Higiene', monto: '$ 5.200', estado: 'Pendiente' },
  ];
}
