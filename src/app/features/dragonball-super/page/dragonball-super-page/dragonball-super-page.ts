import { Component, signal } from '@angular/core';
import { CharacterTitle } from '../../../../shared/components/character-title/character-title';
import { CharacterAdd } from '../../../../shared/components/character-add/character-add';
import { CharacterList } from '../../../../shared/components/character-list/character-list';

@Component({
  selector: 'app-dragonball-super-page',
  imports: [CharacterTitle, CharacterAdd, CharacterList],
  templateUrl: './dragonball-super-page.html',
})
export class DragonballSuperPage {
  pageTitle = signal('Gestión de personages de DragonBall Super');

  characters = signal<Character[]>([]);
}
