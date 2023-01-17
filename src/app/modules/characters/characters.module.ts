import { NgModule } from '@angular/core';
import { CharactersRoutingModule } from './characters-routing.module';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import {CharactersListPageComponent} from "~modules/characters/pages/characters-list-page/characters-list-page.component";
import {
  CharacterDetailPageComponent
} from "~modules/characters/pages/character-detail-page/character-detail-page.component";
import {SharedModule} from "~shared/shared.module";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CharactersRoutingModule,
    NgOptimizedImage,
    SharedModule
  ],
  declarations: [
    CharacterDetailPageComponent,
    CharactersListPageComponent,
  ],
  exports: [
    CharacterDetailPageComponent,
    CharactersListPageComponent
  ],
  bootstrap: [
    CharacterDetailPageComponent,
    CharactersListPageComponent
  ]
})
export class CharactersModule {}

platformBrowserDynamic().bootstrapModule(CharactersModule);
