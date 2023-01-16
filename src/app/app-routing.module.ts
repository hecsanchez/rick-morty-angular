import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterConfig } from "~app/config/router.config";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/root/root.module').then(m => m.RootModule),
  },
  {
    path: RouterConfig.routeNames.characters,
    loadChildren: () => import('./modules/characters/characters.module').then(m => m.CharactersModule),
  },
  { path: '**', redirectTo: RouterConfig.routes.error },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
