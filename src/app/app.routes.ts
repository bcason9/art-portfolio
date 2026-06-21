import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Galleries } from './pages/galleries/galleries';
export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'galleries',
    component: Galleries
  },
    {
    path: 'about',
    component: About
  },
  {
    path: 'contact',
    component: Contact
  }
];