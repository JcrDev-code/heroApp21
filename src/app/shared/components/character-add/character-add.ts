import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Character {
  id: number;
  name: string;
  power: number;
}
@Component({
  selector: 'character-add',
  imports: [FormsModule],
  templateUrl: './character-add.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterAdd {
  name = signal('Goku');
  power = signal(9000);

  characters = signal<Character[]>([]);

  heroInfo = computed(() => {
    return `${this.name()} tiene un poder de ${this.power()}`;
  });

  addCharacter() {
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update((chars) => [...chars, newCharacter]);
    this.resetFields();
  }

  isDisable = computed(() => !this.name() || this.power() <= 0);
  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
