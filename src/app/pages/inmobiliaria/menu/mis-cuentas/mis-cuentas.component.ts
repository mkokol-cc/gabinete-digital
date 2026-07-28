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
    { icon: 'fa-building', label: 'Propiedades activas', valor: '2', color: '#533767' },
    { icon: 'fa-calendar', label: 'Próximo vencimiento', valor: '10/08/2026', color: '#e67e22' },
    { icon: 'fa-check-circle', label: 'Último pago', valor: '$ 85.000,00', color: '#27ae60' },
  ];

  propiedades = [
    {
      img: 'assets/inmobiliaria/asset_0002.jpg',
      tipo: 'Departamento en Venta',
      ubicacion: 'Centro, Villa Carlos Paz',
      direccion: 'San Martin al 100',
      valor: 'USD 108.000',
      estado: 'Activa',
      codref: 'CAP6931948',
    },
    {
      img: 'assets/inmobiliaria/asset_0008.jpg',
      tipo: 'Casa en Venta',
      ubicacion: 'Las Varillas, San Justo',
      direccion: 'Concejal Raúl Sosa al 1600',
      valor: 'USD 73.000',
      estado: 'Activa',
      codref: 'CHO5068622',
    },
  ];

  movimientos = [
    { fecha: '15/07/2026', concepto: 'Pago comisión Julio 2026', monto: '$ 45.000,00', estado: 'Pagado' },
    { fecha: '01/07/2026', concepto: 'Cobro alquiler Julio 2026', monto: '$ 85.000,00', estado: 'Cobrado' },
    { fecha: '20/06/2026', concepto: 'Pago comisión Junio 2026', monto: '$ 45.000,00', estado: 'Pagado' },
    { fecha: '10/06/2026', concepto: 'Honorarios venta Prop. CAP6931948', monto: '$ 32.400,00', estado: 'Cobrado' },
  ];
}
