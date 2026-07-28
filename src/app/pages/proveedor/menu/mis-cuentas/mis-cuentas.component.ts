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
    empresa: 'Tech Solutions SRL — CUIT 30-12345678-9',
    desde: 'Cliente desde 2022'
  };

  resumen = [
    { label: 'Órdenes Activas', valor: '4', icon: 'bi bi-box-seam', color: '#1e3a8a' },
    { label: 'Productos Disponibles', valor: '+12.500', icon: 'bi bi-grid', color: '#3b82f6' },
    { label: 'Último Pedido', valor: '$ 450.200', icon: 'bi bi-cart-check', color: '#10b981' },
    { label: 'Saldo Cuenta', valor: '$ 85.000', icon: 'bi bi-wallet2', color: '#f59e0b' },
  ];

  servicios = [
    { nombre: 'Limpieza Industrial', icono: 'bi bi-droplet', desc: 'Kit desinfectante, detergentes, hipoclorito' },
    { nombre: 'Papelería y Oficina', icono: 'bi bi-file-earmark-text', desc: 'Resmas A4, sobres, carpetas, bolígrafos' },
    { nombre: 'Alimentos y Bebidas', icono: 'bi bi-cup-straw', desc: 'Aceite, harina, café, bebidas sin alcohol' },
    { nombre: 'Equipamiento', icono: 'bi bi-tools', desc: 'Carros, estanterías, herramientas' },
  ];

  movimientos = [
    { fecha: '22/07/2026', concepto: 'OC-2024-001 — Kit Desinfectante x 24', monto: '$ 45.200', estado: 'Enviado' },
    { fecha: '18/07/2026', concepto: 'OC-2024-002 — Resma A4 x 50 paq', monto: '$ 112.500', estado: 'Entregado' },
    { fecha: '10/07/2026', concepto: 'OC-2024-003 — Aceite 5L x 12', monto: '$ 89.000', estado: 'Entregado' },
    { fecha: '05/07/2026', concepto: 'OC-2024-004 — Carro Transporte', monto: '$ 203.500', estado: 'Entregado' },
    { fecha: '28/06/2026', concepto: 'OC-2024-005 — Café x 20 kg', monto: '$ 67.800', estado: 'Entregado' },
  ];
}
