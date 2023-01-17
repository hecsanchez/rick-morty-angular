import { Component } from '@angular/core';
import {CharactersApi} from "~shared/actions/characters.actions";
import {Store} from "@ngrx/store";
import {CharactersService} from "~shared/services/characters.service";
import {ActivatedRoute} from "@angular/router";
import {Observable, of} from "rxjs";
import {Character} from "~shared/models/character.model";

@Component({
  selector: 'app-characters',
  templateUrl: './character-detail-page.component.html',
  styleUrls: ['./character-detail-page.component.scss']
})
export class CharacterDetailPageComponent {

  constructor(
    private store: Store<any>,
    private route: ActivatedRoute

  ) {}
  character: Character | null = null;
  character$: Observable<any> = this.store.select(state => state.characters.detail);
  categorySubscription = this.character$.subscribe(character=>{
    this.character = character
  });

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(CharactersApi.loadCharacter({id}));
  }
}
