import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-paso-4',
  standalone: true,
  imports: [],
  templateUrl: './paso-4.component.html',
  styleUrl: './paso-4.component.scss'
})
export class Paso4Component {
  @Output() isNext = new EventEmitter<boolean>();
  prev() {
    this.isNext.emit(false);
  }
  next() {
    this.isNext.emit(true);
  }
}
