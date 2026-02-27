import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dragonball-page',
  imports: [FormsModule],
  templateUrl: './dragonball-page.html',
})
export class DragonballPage {
  name = signal('Goku');
  power = signal(9000);

  heroInfo = computed(() => {
    return `${this.name()} tiene un poder de ${this.power()}`;
  });

  addHero() {
    console.log(this.heroInfo());
  }
}
