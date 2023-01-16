import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  LocationDetailPageComponent
} from "~modules/locations/pages/location-detail-page/location-detail-page.component";
import {LocationsListPageComponent} from "~modules/locations/pages/locations-list-page/locations-list-page.component";
import {LocationsRoutingModule} from "~modules/locations/locations-routing.module";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, LocationsRoutingModule],
  declarations: [
    LocationDetailPageComponent,
    LocationsListPageComponent
  ],
  exports: [
    LocationDetailPageComponent,
    LocationsListPageComponent
  ],
})
export class LocationsModule {}
