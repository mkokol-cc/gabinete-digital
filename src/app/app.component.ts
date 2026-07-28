import { Component, inject, DestroyRef } from '@angular/core';
import { RouterOutlet, Router, NavigationCancel, NavigationError } from '@angular/router';
import { filter } from 'rxjs';
import { FloatingHomeComponent } from './shared/floating-home/floating-home.component';
import { LoadingScreenComponent } from './shared/loading-screen/loading-screen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FloatingHomeComponent, LoadingScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);

  showLoading = false;
  fadeOut = false;
  private loadingStart = 0;
  private hideTimer?: ReturnType<typeof setTimeout>;
  private fadeOutTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    this.router.events.pipe(
      filter(e => e instanceof NavigationCancel || e instanceof NavigationError)
    ).subscribe(() => this.hideLoading());

    this.destroyRef.onDestroy(() => {
      clearTimeout(this.hideTimer);
      clearTimeout(this.fadeOutTimer);
    });
  }

  onDeactivate() {
    clearTimeout(this.hideTimer);
    clearTimeout(this.fadeOutTimer);
    this.fadeOut = false;
    this.loadingStart = Date.now();
    this.showLoading = true;
  }

  onActivate() {
    const elapsed = Date.now() - this.loadingStart;
    const remaining = Math.max(0, 2000 - elapsed);
    this.hideTimer = setTimeout(() => this.startFadeOut(), remaining);
  }

  private startFadeOut() {
    this.fadeOut = true;
    this.fadeOutTimer = setTimeout(() => {
      this.showLoading = false;
      this.fadeOut = false;
    }, 300);
  }

  private hideLoading() {
    clearTimeout(this.hideTimer);
    clearTimeout(this.fadeOutTimer);
    this.showLoading = false;
    this.fadeOut = false;
  }
}
