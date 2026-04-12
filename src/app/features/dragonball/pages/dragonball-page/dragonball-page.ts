import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CharacterTitle } from '../../../../shared/components/character-title/character-title';
import { CharacterAdd } from '../../../../shared/components/character-add/character-add';
import { CharacterList } from '../../../../shared/components/character-list/character-list';
import { CharacterService } from '../../../../shared/servicios/characterService';
import { dragonball } from '../../servicios/dragonball';

@Component({
  selector: 'app-dragonball-page',
  imports: [FormsModule, CharacterTitle, CharacterAdd, CharacterList],
  templateUrl: './dragonball-page.html',
})
export class DragonballPage {
  pageTitle = signal('Gestión de personages de DragonBall');
  dragonballService = inject(dragonball);
}
