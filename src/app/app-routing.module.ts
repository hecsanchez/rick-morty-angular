import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterConfig } from "~app/config/router.config";

console.log('routerConfig', RouterConfig)
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/root/root.module').then(m => m.RootModule),
  },
  {
    path: RouterConfig.routeNames.characters.list,
    loadChildren: () => import('./modules/characters/characters.module').then(m => m.CharactersModule),
  },
  {
    path: RouterConfig.routeNames.locations.list,
    loadChildren: () => import('./modules/locations/locations.module').then(m => m.LocationsModule),
  },
  { path: '**', redirectTo: RouterConfig.routes.error },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
