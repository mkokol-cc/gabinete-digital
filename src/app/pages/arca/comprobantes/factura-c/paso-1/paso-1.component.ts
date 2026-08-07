import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-paso-1',
  standalone: true,
  imports: [],
  templateUrl: './paso-1.component.html',
  styleUrl: './paso-1.component.scss'
})
export class Paso1Component {

  @Output() isNext = new EventEmitter<boolean>();
  prev() {
    this.isNext.emit(false);
  }
  next() {
    this.isNext.emit(true);
  }

}
