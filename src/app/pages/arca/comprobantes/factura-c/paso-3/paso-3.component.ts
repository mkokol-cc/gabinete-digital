import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-paso-3',
  standalone: true,
  imports: [],
  templateUrl: './paso-3.component.html',
  styleUrl: './paso-3.component.scss'
})
export class Paso3Component {

  @Output() isNext = new EventEmitter<boolean>();
  prev() {
    this.isNext.emit(false);
  }
  next() {
    this.isNext.emit(true);
  }

}
