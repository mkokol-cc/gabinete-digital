import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-correo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './correo.component.html',
  styleUrl: './correo.component.scss'
})
export class CorreoComponent {
  mensajes = [
    {
      id: 1,
      remitente: 'Banco Nación',
      asunto: 'Comprobante de transferencia aprobada',
      preview: 'Se ha aprobado la transferencia solicitada por $15.000. El monto será acreditado en las próximas 48hs hábiles...',
      fecha: new Date('2026-07-15T14:30:00'),
      tipo: 'PAGO',
      leido: true
    },
    {
      id: 2,
      remitente: 'Ministerio de Educación',
      asunto: 'Estado de trámite de matrícula - Pendiente de documentación',
      preview: 'Su solicitud de matrícula se encuentra pendiente. Se requiere adjuntar certificado de analítico...',
      fecha: new Date('2026-07-14T09:15:00'),
      tipo: 'TRAMITE',
      leido: false
    },
    {
      id: 3,
      remitente: 'Inmobiliaria López',
      asunto: 'Recordatorio: vencimiento cuota julio',
      preview: 'Le recordamos que la cuota mensual del alquiler vence el día 10/07. Monto: $45.000...',
      fecha: new Date('2026-07-12T11:00:00'),
      tipo: 'CUOTA',
      leido: false
    },
    {
      id: 4,
      remitente: 'Municipalidad de Córdoba',
      asunto: 'Pago de impuestos municipales confirmado',
      preview: 'El pago correspondiente al período julio 2026 ha sido procesado exitosamente. Comprobante N° 8842...',
      fecha: new Date('2026-07-10T16:45:00'),
      tipo: 'PAGO',
      leido: true
    },
    {
      id: 5,
      remitente: 'Seguros La Primera',
      asunto: 'Solicitud de renovación - Rechazada',
      preview: 'Informamos que su solicitud de renovación del seguro vehicular no pudo ser procesada. Motivo: documentación incompleta...',
      fecha: new Date('2026-07-08T10:20:00'),
      tipo: 'TRAMITE',
      leido: true
    },
    {
      id: 6,
      remitente: 'Proveedor Tech',
      asunto: 'Respuesta a solicitud de presupuesto',
      preview: 'Adjuntamos el presupuesto solicitado para los equipamientos solicitados. Total estimado: $320.000...',
      fecha: new Date('2026-07-05T08:00:00'),
      tipo: 'TRAMITE',
      leido: false
    },
    {
      id: 7,
      remitente: 'Cooperativa del Sur',
      asunto: 'Resumen de cuenta - Julio 2026',
      preview: 'Su resumen de cuenta del mes de julio está disponible. Movimientos: 12 transacciones...',
      fecha: new Date('2026-07-01T12:00:00'),
      tipo: 'PAGO',
      leido: true
    }
  ];

  getTipoClass(tipo: string): string {
    switch (tipo) {
      case 'PAGO': return 'tipo-pago';
      case 'TRAMITE': return 'tipo-tramite';
      case 'CUOTA': return 'tipo-cuota';
      default: return '';
    }
  }

  getFecha(date: Date): string {
    const now = new Date();
    const d = new Date(date);
    const diffMs = now.getTime() - d.getTime();
    const diffDias = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDias === 0) return d.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });
    if (diffDias === 1) return 'Ayer';
    if (diffDias < 7) return d.toLocaleDateString('es-AR', { weekday: 'long' });
    return d.toLocaleDateString('es-AR', { day: '2-digit', month: 'short' });
  }

  toggleLeido(mensaje: any): void {
    mensaje.leido = !mensaje.leido;
  }
}
