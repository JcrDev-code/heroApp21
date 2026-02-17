import { Routes } from '@angular/router';

import { HeroDescription } from './features/hero/pages/hero-description/hero-description';
import { CounterPage } from './features/counter/pages/counter-page/counter-page';

export const routes: Routes = [
  {
    path: '',
    component: CounterPage,
  },
  {
    path: 'hero',
    component: HeroDescription,
  },
];
