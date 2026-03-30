import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'character-title',
  imports: [],
  templateUrl: './character-title.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterTitle {
  //va recibir el título de la página a través de un input desde su componente padre
  //esta propiedad es opcional, por lo que se le asigna un valor por defecto en caso
  //  de que no se le pase ningún valor desde el componente padre
  pageTitle = input<string>('Gestión de personages de DragonBall');
}
