import { Routes } from '@angular/router';
import { CounterPage } from './counter-page/counter-page';
import { HeroDescription } from './page/hero-description/hero-description';

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
