import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Character} from "~shared/models/character.model";
import {Store} from "@ngrx/store";
import {CharactersApi} from '~shared/actions/characters.actions';

@Component({
  selector: 'app-characters',
  templateUrl: './characters-list-page.component.html',
  styleUrls: ['./characters-list-page.component.scss']
})
export class CharactersListPageComponent implements OnInit {
  constructor(private store: Store<any>) {}

  characters: Observable<any> = this.store.select(state => state.characters);

  ngOnInit() {
    this.store.dispatch(CharactersApi.loadCharacters());
  }
}
