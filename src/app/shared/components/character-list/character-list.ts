import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';

@Component({
  selector: 'character-list',
  imports: [],
  templateUrl: './character-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterList {
  listTitle = input.required<string>();
  characters = input.required<Character[]>();
}
