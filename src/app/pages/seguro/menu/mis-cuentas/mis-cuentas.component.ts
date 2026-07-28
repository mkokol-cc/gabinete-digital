import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mis-cuentas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './mis-cuentas.component.html',
  styleUrl: './mis-cuentas.component.scss'
})
export class MisCuentasComponent {
  welcome = { nombre: 'Juan Pérez', fecha: '28 de julio de 2026' };

  resumen = [
    { icon: 'fa-shield', label: 'Pólizas activas', valor: '3', color: '#e20039' },
    { icon: 'fa-calendar', label: 'Próximo vencimiento', valor: '15/08/2026', color: '#e67e22' },
    { icon: 'fa-check-circle', label: 'Último pago', valor: '$ 8.450,00', color: '#27ae60' },
  ];

  polizas = [
    { nombre: 'Auto Todo Riesgo', icono: 'fa-car', vigencia: '10/01/2027', monto: '$ 52.800/año', estado: 'Activa', clase: 'activa' },
    { nombre: 'Hogar Integral', icono: 'fa-home', vigencia: '22/03/2027', monto: '$ 18.200/año', estado: 'Activa', clase: 'activa' },
    { nombre: 'Vida', icono: 'fa-heart', vigencia: '05/06/2027', monto: '$ 9.600/año', estado: 'Activa', clase: 'activa' },
  ];

  movimientos = [
    { fecha: '15/07/2026', concepto: 'Pago Auto Jul/2026', monto: '$ 4.400,00', estado: 'Pagado' },
    { fecha: '01/07/2026', concepto: 'Pago Hogar Jul/2026', monto: '$ 1.516,67', estado: 'Pagado' },
    { fecha: '20/06/2026', concepto: 'Pago Vida Jun/2026', monto: '$ 800,00', estado: 'Pagado' },
    { fecha: '15/06/2026', concepto: 'Pago Auto Jun/2026', monto: '$ 4.400,00', estado: 'Pagado' },
  ];
}
