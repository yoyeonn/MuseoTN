import { Routes } from '@angular/router';

import { Home } from './front/home/home';
import { FrontList } from './front/front-list/front-list';
import { MuseeDetail } from './front/musee-detail/musee-detail';
import { Search } from './front/search/search';
import { About } from './front/about/about';

import { Login } from './back/login/login';
import { Admin } from './back/admin/admin';
import { Dashboard } from './back/dashboard/dashboard';
import { List } from './back/list/list';
import { Add } from './back/add/add';
import { Edit } from './back/edit/edit';
import { ChangePassword } from './back/change-password/change-password';
import { authGuard } from './services/auth-guard';

export const routes: Routes = [

  { path: '', component: Home },
  { path: 'musee', component: FrontList },
  { path: 'musee/:id', component: MuseeDetail },
  { path: 'search', component: Search },
  { path: 'about', component: About },

  { path: 'login', component: Login },

  {
    path: 'admin',
    component: Admin,
    canActivate: [authGuard],
    children: [
      { path: '', component: Dashboard },
      { path: 'list', component: List },
      { path: 'add', component: Add },
      { path: 'edit/:id', component: Edit },
      { path: 'password', component: ChangePassword }
    ],
  },

  { path: '**', redirectTo: '' }
];
