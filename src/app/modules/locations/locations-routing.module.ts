import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterConfig } from '~app/config/router.config';
import {LocationsListPageComponent} from "~modules/locations/pages/locations-list-page/locations-list-page.component";
import {
  LocationDetailPageComponent
} from "~modules/locations/pages/location-detail-page/location-detail-page.component";

const routesNames = RouterConfig.routeNames;

const locationsRoutes: Routes = [
  { path: '', component: LocationsListPageComponent },
  { path: routesNames.characters.detail, component: LocationDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(locationsRoutes)],
  exports: [RouterModule],
})
export class LocationsRoutingModule {}
