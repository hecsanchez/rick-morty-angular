import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {Character} from "~shared/models/character.model";
import {Observable} from "rxjs";
import {CharactersApi} from "~shared/actions/characters.actions";
import {Location} from "~shared/models/location.model";
import {LocationsApi} from "~shared/actions/locations.actions";

@Component({
  selector: 'app-characters',
  templateUrl: './location-detail-page.component.html',
  styleUrls: ['./location-detail-page.component.scss']
})
export class LocationDetailPageComponent {
  constructor(
    private store: Store<any>,
    private route: ActivatedRoute

  ) {}
  location: Location | null = null;
  characters: Character[] = []
  location$: Observable<any> = this.store.select(state => state.locations.detail);
  characters$: Observable<any> = this.store.select(state => state.locations.characters);

  locationSubscription = this.location$.subscribe(location=>{
    this.location = location
  });

  residentsSubscription = this.characters$.subscribe(characters=>{
    console.log('characters', characters)
    this.characters = characters
  });


  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(LocationsApi.loadLocation({id}));
  }
}
