import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {CharactersApi} from '~shared/actions/characters.actions';

@Component({
  templateUrl: './characters-list-page.component.html',
  styleUrls: ['./characters-list-page.component.scss']
})
export class CharactersListPageComponent implements OnInit {
  constructor(private store: Store<any>) {}

  characters: Observable<any> = this.store.select(state => state.characters.list);
  loading: Observable<any> = this.store.select(state => state.characters.loading);

  page = 1;

  ngOnInit() {
    this.store.dispatch(CharactersApi.loadCharacters({page: this.page}));
  }

  onScroll(e: any) {
    console.log('loading', this.loading)
    if (!this.loading) {
      const newPage = this.page + 1;
      this.store.dispatch(CharactersApi.loadCharacters({page: newPage}));
      this.page = newPage;
    }
  }
}
