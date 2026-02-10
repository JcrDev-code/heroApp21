import { Component, signal } from '@angular/core';
import { CounterSignal } from './counter-signal/counter-signal';

@Component({
  selector: 'app-counter-page',
  imports: [CounterSignal],
  templateUrl: './counter-page.html',
  styleUrl: './counter-page.css',
})
export class CounterPage {
  //propiedades tradicionales( no son reactivos)
  title = 'contador sin señales';
  counter = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  reset() {
    this.counter = 0;
  }

  isDisabled() {
    if (this.counter === 0) {
      return true;
    }

    return false;
  }
}
