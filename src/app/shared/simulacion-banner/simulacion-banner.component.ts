import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-simulacion-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      *ngIf="visible"
      class="simulacion-banner"
      aria-label="Simulacion Con Fines Educativos">
      Simulación Con Fines Educativos
    </div>
  `,
  styles: [`
    :host { display: contents; }

    .simulacion-banner {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 20px;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #1a1a2e;
      color: #fff;
      font-size: 10px;
      letter-spacing: 0.4px;
      text-transform: uppercase;
      pointer-events: none;
    }
  `]
})
export class SimulacionBannerComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private sub?: Subscription;
  visible = false;

  private readonly adminRoutes = new Set([
    '/', '/plataformas', '/correo', '/mis-tramites', '/mis-datos'
  ]);

  ngOnInit() {
    this.sub = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(() => this.checkRoute());

    this.checkRoute();
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  private checkRoute() {
    const url = this.router.url.split('?')[0];
    this.visible = !this.adminRoutes.has(url);
  }
}
