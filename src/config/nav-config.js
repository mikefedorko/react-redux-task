import routes from './routes';

import Home from '../pages/home';
import News from '../pages/news';
import Profile from '../pages/profile';
import Login from '../pages/login';

export const NavConfig = [
  {
    name: 'home',
    path: routes.HOME,
    component: Home,
  },
  {
    name: 'news',
    path: routes.NEWS,
    component: News,
  },
  {
    name: 'profile',
    path: routes.PROFILE,
    component: Profile,
  },
  {
    name: 'login',
    path: routes.LOGIN,
    component: Login,
  },
];
