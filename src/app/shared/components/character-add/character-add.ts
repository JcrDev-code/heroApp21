import { ChangeDetectionStrategy, Component, computed, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'character-add',
  imports: [FormsModule],
  templateUrl: './character-add.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterAdd {
  name = signal('');
  power = signal(0);

  //characters va ser usada en otro componente, por eso se define como output,
  // para que pueda ser accedida desde el componente padre
  characters = output<Character>();

  addCharacter() {
    const newCharacter: Character = {
      //  id: Math.floor(Math.random() * 10000), // Genera un ID aleatorio
      id: crypto.randomUUID(), // Genera un ID único utilizando la API de Crypto
      name: this.name(),
      power: this.power(),
    };

    // this.characters.update((chars) => [...chars, newCharacter]);
    this.characters.emit(newCharacter);

    this.resetFields();
  }

  isDisable = computed(() => !this.name() || this.power() <= 0);
  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
