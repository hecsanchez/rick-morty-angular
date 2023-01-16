import { NgModule } from '@angular/core';
import { CharactersRoutingModule } from './characters-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {CharactersListPageComponent} from "~modules/characters/pages/character-page/characters-list-page.component";
import {
  CharacterDetailPageComponent
} from "~modules/characters/pages/characters-list-page/character-detail-page.component";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, CharactersRoutingModule],
  declarations: [
    CharacterDetailPageComponent,
    CharactersListPageComponent
  ],
  exports: [
    CharacterDetailPageComponent,
    CharactersListPageComponent
  ],
})
export class CharactersModule {}
