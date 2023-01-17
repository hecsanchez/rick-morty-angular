import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Store} from "@ngrx/store";
import {Characters, CharactersApi} from '~shared/actions/characters.actions';
import {debounceTime, distinctUntilChanged, map, switchMap} from "rxjs/operators";
import {CharactersService} from "~shared/services/characters.service";

@Component({
  templateUrl: './characters-list-page.component.html',
  styleUrls: ['./characters-list-page.component.scss']
})
export class CharactersListPageComponent implements OnInit {
  constructor(
    private store: Store<any>,
    private charactersService: CharactersService

  ) {}

  characters: Observable<any> = this.store.select(state => state.characters.list);
  page = 1;
  searchText = '';
  results: Observable<any> | undefined
  subject = new Subject()

  ngOnInit() {
    this.store.dispatch(Characters.clearCharacter());
    this.store.dispatch(CharactersApi.loadCharacters({page: this.page}));

    this.subject.pipe(
      debounceTime(500),
      // @ts-ignore
      distinctUntilChanged(),
      switchMap((searchText: string) => {
        return this.charactersService.getCharacters({page: 1, name: searchText}).pipe(
          map((response: any) => {
            return this.store.dispatch(CharactersApi.loadCharactersResults({ characters: response.results }))
          }))
      })).subscribe();
  }

  loadMore() {
    const newPage = this.page + 1;
    this.store.dispatch(CharactersApi.loadCharacters({page: newPage, name: this.searchText}));
    this.page = newPage;
  }

  search(value: string): void {
    const searchText = value
    this.searchText = searchText;
    this.subject.next(searchText)
  }
}
