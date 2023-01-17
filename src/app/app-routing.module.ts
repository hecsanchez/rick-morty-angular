import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterConfig } from "~app/config/router.config";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/characters',
    pathMatch: 'full'
  },
  {
    path: RouterConfig.routeNames.characters.list,
    loadChildren: () => import('./modules/characters/characters.module').then(m => m.CharactersModule),
  },
  {
    path: RouterConfig.routeNames.locations.list,
    loadChildren: () => import('./modules/locations/locations.module').then(m => m.LocationsModule),
  },
  {
    path: RouterConfig.routeNames.episodes.list,
    loadChildren: () => import('./modules/episodes/episodes.module').then(m => m.EpisodesModule),
  },
  { path: '**', redirectTo: RouterConfig.routes.error },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
