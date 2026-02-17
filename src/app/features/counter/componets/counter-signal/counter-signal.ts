import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'counter-signal',
  imports: [],
  templateUrl: './counter-signal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterSignal {
  //señales son reactivos
  titleSignal = signal('contador con señales');
  counterSignal = signal(0);

  //metodos con signal

  decrementSignal() {
    this.counterSignal.update((current) => current - 1);
  }
  resetSignal() {
    this.counterSignal.set(0);
  }
  incrementSignal() {
    this.counterSignal.update((current) => current + 1);
  }
  isDisabledSignal() {
    return this.counterSignal() === 0;
  }
}
