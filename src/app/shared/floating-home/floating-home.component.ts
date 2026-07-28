import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-floating-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <button
      *ngIf="visible"
      class="fab-home"
      routerLink="/"
      title="Ir al inicio"
      aria-label="Ir al inicio">
      <i class="bi bi-house-door-fill"></i>
    </button>
  `,
  styles: [`
    :host { display: contents; }

    .fab-home {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 10000;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: #1a1a2e;
      color: #fff;
      border: none;
      box-shadow: 0 4px 16px rgba(26, 26, 46, 0.35);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      transition: transform 0.2s, box-shadow 0.2s;
      outline: none;
    }

    .fab-home:hover {
      transform: scale(1.08);
      box-shadow: 0 6px 24px rgba(26, 26, 46, 0.45);
    }

    .fab-home:active {
      transform: scale(0.95);
    }

    @media (max-width: 767px) {
      .fab-home {
        bottom: 80px;
        right: 16px;
        width: 48px;
        height: 48px;
        font-size: 20px;
      }
    }
  `]
})
export class FloatingHomeComponent implements OnInit, OnDestroy {
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
