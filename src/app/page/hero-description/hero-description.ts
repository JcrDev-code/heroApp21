import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-description',
  imports: [],
  templateUrl: './hero-description.html',
})
export class HeroDescription {
  nameHero = signal('Superman');
  AgeHero = signal(40);
  isVisible = signal(false);

  changeName() {
    this.nameHero.set('Batman');
  }

  changeAge() {
    this.AgeHero.set(45);
  }

  changeVisible() {
    this.isVisible.set(true);
  }
  ShowDescription() {
    console.log('😢 no computed');

    if (this.isVisible()) {
      const description = `${this.nameHero()}  tiene ${this.AgeHero()} Años`;
      return description;
    } else {
      return 'descripción Oculta ';
    }
  }

  showDescriptionHero = computed(() => {
    console.log('🚀 computed');
    if (this.isVisible()) {
      const description = `${this.nameHero()}  tiene ${this.AgeHero()} Años`;
      return description;
    } else {
      return 'descripción Oculta ';
    }
  });

  reset() {
    this.nameHero.set('Superman');
    this.AgeHero.set(40);
    this.isVisible.set(false);
  }
}
