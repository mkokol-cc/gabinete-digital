import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-banking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home-banking.component.html',
  styleUrl: './home-banking.component.scss'
})
export class HomeBankingComponent {
  activeSection: string = 'resumen'; // Controla la vista actual: 'resumen', 'transferencia', 'echeck'
  
  setSection(section: string) {
    this.activeSection = section;
  }
}
