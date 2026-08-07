import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-paso-2',
  standalone: true,
  imports: [],
  templateUrl: './paso-2.component.html',
  styleUrl: './paso-2.component.scss'
})
export class Paso2Component {

  @Output() isNext = new EventEmitter<boolean>();
  prev() {
    this.isNext.emit(false);
  }
  next() {
    this.isNext.emit(true);
  }

}
