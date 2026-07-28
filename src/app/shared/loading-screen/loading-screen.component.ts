import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  template: `
    <div class="loading-overlay" [class.fade-out]="fadeOut">
      <div class="spinner-container">
        <div class="spinner-ring"></div>
        <i class="bi bi-building spinner-icon"></i>
      </div>
    </div>
  `,
  styles: [`
    :host { display: contents; }

    .loading-overlay {
      position: fixed;
      inset: 0;
      z-index: 99999;
      background: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 1;
      transition: opacity 0.3s ease-out;
    }

    .loading-overlay.fade-out {
      opacity: 0;
    }

    .spinner-container {
      position: relative;
      width: 80px;
      height: 80px;
    }

    .spinner-ring {
      position: absolute;
      inset: 0;
      border: 4px solid #e0e0e0;
      border-top-color: #003087;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    .spinner-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 28px;
      color: #003087;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `]
})
export class LoadingScreenComponent {
  @Input({ required: true }) fadeOut = false;
}
