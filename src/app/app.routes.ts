import { Routes } from '@angular/router';

import { HeroDescription } from './features/hero/pages/hero-description/hero-description';
import { CounterPage } from './features/counter/pages/counter-page/counter-page';
import { DragonballPage } from './features/dragonball/pages/dragonball-page/dragonball-page';
import { DragonballSuperPage } from './features/dragonball-super/page/dragonball-super-page/dragonball-super-page';

export const routes: Routes = [
  {
    path: 'counter',
    component: CounterPage,
  },
  {
    path: 'hero',
    component: HeroDescription,
  },
  {
    path: 'dragonball',
    component: DragonballPage,
  },
  {
    path: 'dragonball-super',
    component: DragonballSuperPage,
  },
  {
    path: '**',
    redirectTo: 'counter',
  },
];
