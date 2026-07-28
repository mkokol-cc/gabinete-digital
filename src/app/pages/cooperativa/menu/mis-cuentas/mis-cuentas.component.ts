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
  welcome = { nombre: 'Juan Pérez', socio: 'Socio N° 12.345', fecha: '28 de julio de 2026' };

  resumen = [
    { icon: 'fa-home', label: 'Servicios activos', valor: '3', color: '#003366' },
    { icon: 'fa-calendar-alt', label: 'Próximo vencimiento', valor: '15/08/2026', color: '#e67e22' },
    { icon: 'fa-check-circle', label: 'Último pago', valor: '$ 5.420,00', color: '#99CC00' },
  ];

  servicios = [
    { nombre: 'Energía Eléctrica', icono: 'fa-lightbulb', numero: '12-3456-78', monto: '$ 2.850,00/mes', estado: 'Al día', clase: 'aldia' },
    { nombre: 'Internet 50MB', icono: 'fa-wifi', numero: '08-9876-54', monto: '$ 1.570,00/mes', estado: 'Al día', clase: 'aldia' },
    { nombre: 'TV Cable HD', icono: 'fa-tv', numero: '15-4567-89', monto: '$ 1.000,00/mes', estado: 'Al día', clase: 'aldia' },
  ];

  movimientos = [
    { fecha: '15/07/2026', concepto: 'Pago Energía Eléctrica Jul/2026', monto: '$ 2.850,00', estado: 'Pagado' },
    { fecha: '10/07/2026', concepto: 'Pago Internet Jul/2026', monto: '$ 1.570,00', estado: 'Pagado' },
    { fecha: '05/07/2026', concepto: 'Pago TV Cable Jul/2026', monto: '$ 1.000,00', estado: 'Pagado' },
    { fecha: '15/06/2026', concepto: 'Pago Energía Eléctrica Jun/2026', monto: '$ 2.850,00', estado: 'Pagado' },
  ];
}
