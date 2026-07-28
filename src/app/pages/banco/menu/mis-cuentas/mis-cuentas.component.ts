import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mis-cuentas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mis-cuentas.component.html',
  styleUrl: './mis-cuentas.component.scss'
})
export class MisCuentasBancoComponent {
  accounts = [
    { type: 'Caja de Ahorro $', number: '001-442211/0', balance: 150320.45, cbu: '0110542130054200123456', color: '#0066cc' },
    { type: 'Cuenta Corriente $', number: '001-442212/3', balance: 89450.00, cbu: '0110542130054200987654', color: '#004a99' },
    { type: 'Caja de Ahorro US$', number: '001-442213/6', balance: 5200.00, cbu: '0110542130054200555777', color: '#007894' },
  ];

  movements = [
    { date: '25/06/2026', description: 'Transferencia recibida de Distribuidora Universal S.A.', amount: 45000, type: 'credit' },
    { date: '24/06/2026', description: 'Pago de factura de servicios', amount: -12500.50, type: 'debit' },
    { date: '23/06/2026', description: 'Depósito en efectivo', amount: 30000, type: 'credit' },
    { date: '22/06/2026', description: 'Compra en comercio', amount: -8450.30, type: 'debit' },
    { date: '21/06/2026', description: 'Acreditación de haberes', amount: 180000, type: 'credit' },
  ];

  formatCurrency(value: number): string {
    return '$ ' + value.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
}
