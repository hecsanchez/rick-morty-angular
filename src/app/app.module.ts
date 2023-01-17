import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ActionReducer, MetaReducer, State, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {charactersReducer} from "~shared/reducers/characters.reducers";
import {CharactersEffects} from "~shared/effects/characters.effects";
import {SharedModule} from "~shared/shared.module";

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', state);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [logger];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot({
      characters: charactersReducer
    }, {metaReducers}),
    EffectsModule.forRoot([CharactersEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
