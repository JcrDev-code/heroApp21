import { Injectable, signal } from '@angular/core';

@Injectable()
export class CharacterService {
  characters = signal<Character[]>([]);

  addCharacter(newCharacter: Character) {
    this.characters.update((chars) => [...chars, newCharacter]);
  }
}
