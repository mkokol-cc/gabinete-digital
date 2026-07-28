import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mis-tramites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mis-tramites.component.html',
  styleUrl: './mis-tramites.component.scss'
})
export class MisTramitesComponent {
  tramites = [
    {
      id: 'TR-001',
      titulo: 'Solicitud de transferencia bancaria',
      entidadOrigen: 'Cooperativa del Sur',
      entidadDestino: 'Banco Nación',
      fecha: new Date('2026-07-15'),
      tipo: 'PAGO',
      estado: 'Aprobado',
      version: 2,
      monto: 15000
    },
    {
      id: 'TR-002',
      titulo: 'Trámite de matrícula universitaria',
      entidadOrigen: 'Universidad Nacional',
      entidadDestino: 'Ministerio de Educación',
      fecha: new Date('2026-07-10'),
      tipo: 'TRAMITE',
      estado: 'Pendiente',
      version: 1,
      monto: undefined
    },
    {
      id: 'TR-003',
      titulo: 'Pago de cuota mensual alquiler',
      entidadOrigen: 'Inmobiliaria López',
      entidadDestino: 'Banco Galicia',
      fecha: new Date('2026-07-08'),
      tipo: 'CUOTA',
      estado: 'En revisión',
      version: 1,
      monto: 45000
    },
    {
      id: 'TR-004',
      titulo: 'Comprobante de pago impuestos municipales',
      entidadOrigen: 'Municipalidad de Córdoba',
      entidadDestino: 'ARCA',
      fecha: new Date('2026-07-05'),
      tipo: 'PAGO',
      estado: 'Aprobado',
      version: 3,
      monto: 8200
    },
    {
      id: 'TR-005',
      titulo: 'Renovación de seguro vehicular',
      entidadOrigen: 'Seguros La Primera',
      entidadDestino: 'Cliente',
      fecha: new Date('2026-07-01'),
      tipo: 'TRAMITE',
      estado: 'Rechazado',
      version: 1,
      monto: 12000
    },
    {
      id: 'TR-006',
      titulo: 'Solicitud de presupuesto proveedor',
      entidadOrigen: 'Proveedor Tech',
      entidadDestino: 'Empresa ABC',
      fecha: new Date('2026-06-28'),
      tipo: 'TRAMITE',
      estado: 'Pendiente',
      version: 1,
      monto: undefined
    }
  ];

  getTipoClass(tipo: string): string {
    switch (tipo) {
      case 'PAGO': return 'badge-pago';
      case 'TRAMITE': return 'badge-tramite';
      case 'CUOTA': return 'badge-cuota';
      default: return '';
    }
  }

  getEstadoClass(estado: string): string {
    switch (estado) {
      case 'Aprobado': return 'estado-aprobado';
      case 'Pendiente': return 'estado-pendiente';
      case 'En revisión': return 'estado-revision';
      case 'Rechazado': return 'estado-rechazado';
      default: return '';
    }
  }
}
