import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterConfig } from '~app/config/router.config';
import {
  CharacterDetailPageComponent
} from "~modules/characters/pages/characters-list-page/character-detail-page.component";
import {CharactersListPageComponent} from "~modules/characters/pages/character-page/characters-list-page.component";

const routesNames = RouterConfig.routeNames;

const charactersRoutes: Routes = [
  { path: routesNames.character?.list, component: CharactersListPageComponent },
  { path: routesNames.character?.detail, component: CharacterDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(charactersRoutes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
