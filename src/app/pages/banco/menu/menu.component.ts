import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  activeSection: string = 'resumen'; // Controla la vista actual: 'resumen', 'transferencia', 'echeck'
  
  setSection(section: string) {
    this.activeSection = section;
  }
}
