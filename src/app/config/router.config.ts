import { InjectionToken } from '@angular/core';

export const ROUTER_CONFIG = new InjectionToken('router.config');

const routeNames = {
  error: 'error',
  characters: {
    list: 'characters',
    detail: ':id'
  },
  locations: {
    list: 'locations',
    detail: ':id'
  },
  home: '',
}

export const RouterConfig: any = {
  routeNames,
  routes: {
    home: '',
    error: `/${routeNames.error}`,
    character: {
      list: `${routeNames.characters.list}`,
      detail: (id: string) => `/${routeNames.characters}/${id}`,
    },
    location: {
      list: `/${routeNames.locations}/`,
      detail: (id: string) => `/${routeNames.locations}/${id}`,
    },
  },
};
