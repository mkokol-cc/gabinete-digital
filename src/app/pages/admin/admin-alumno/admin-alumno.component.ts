import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-admin-alumno',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './admin-alumno.component.html',
  styleUrl: './admin-alumno.component.scss'
})
export class AdminAlumnoComponent {

}
