import { InjectionToken } from '@angular/core';

export const ROUTER_CONFIG = new InjectionToken('router.config');

const routeNames = {
  error: '404',
  characters: 'characters',
  locations: 'locations'
}

export const RouterConfig: any = {
  routeNames,
  routes: {
    home: '/',
    error: `/${routeNames.error}`,
    character: {
      list: `/${routeNames.characters}/`,
      detail: (id: string) => `/${routeNames.characters}//${id}`,
    },
    location: {
      list: `/${routeNames.locations}/`,
      detail: (id: string) => `/${routeNames.locations}//${id}`,
    },
  },
};
