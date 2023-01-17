import { NgModule } from '@angular/core';
import { CharactersRoutingModule } from './characters-routing.module';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { BrowserModule } from "@angular/platform-browser";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import {CharactersListPageComponent} from "~modules/characters/pages/characters-list-page/characters-list-page.component";
import {
  CharacterDetailPageComponent
} from "~modules/characters/pages/character-detail-page/character-detail-page.component";
import { SpinnerComponent } from '~app/shared/components/spinner/spinner.component';
import {SharedModule} from "~shared/shared.module";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CharactersRoutingModule,
    NgOptimizedImage,
    SharedModule,
    InfiniteScrollModule
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
