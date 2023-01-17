import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { of, switchMap} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {LocationsService} from "~shared/services/locations.service";
import {LocationsApi} from "~shared/actions/locations.actions";
import {Location} from "~shared/models/location.model";
import {CharactersService} from "~shared/services/characters.service";

@Injectable()
export class LocationsEffects {
  constructor(
    private actions: Actions,
    private locationsService: LocationsService,
    private charactersService: CharactersService

  ) {}
  getLocations = createEffect(() =>
    this.actions.pipe(
      ofType(LocationsApi.loadLocations),
      switchMap((action) => {
        return this.locationsService.getLocations({ page: Number(action.page), name: action.name }).pipe(
          map((response: any) => {
            return LocationsApi.loadLocationsSuccess({ locations: response.results })
          }),
          catchError((error) =>
            of(LocationsApi.loadLocationsError({error}))
          )
        )
      })
    )
  );

  getLocationById = createEffect( () =>
    this.actions.pipe(
      ofType(LocationsApi.loadLocation),
      switchMap((action) => {
         return this.locationsService.getLocationById({ id: Number(action.id) }).pipe(
          map((response: any) => {
            return LocationsApi.loadLocationSuccess({ location: response })
          }),
          catchError((error) =>
            of(LocationsApi.loadLocationError({error}))
          )
        )
      })
    )
  );

  getLocationCharacters = createEffect(() =>
    this.actions.pipe(
      ofType(LocationsApi.loadLocationSuccess),
      switchMap((action)=>{
        const ids = action.location.residents.map((residentUrl: string) =>
          residentUrl.split('https://rickandmortyapi.com/api/character/')[1])

        return this.charactersService.getCharacterById({ id: ids.join(',') }).pipe(
          map((response: any) => {
            return LocationsApi.loadLocationCharactersSuccess({ characters: response })
          }),
          catchError((error) =>
            of(LocationsApi.loadLocationError({error}))
          )
        )
      })
    )
  )
}
