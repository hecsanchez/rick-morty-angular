import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  LocationDetailPageComponent
} from "~modules/locations/pages/location-detail-page/location-detail-page.component";
import {LocationsListPageComponent} from "~modules/locations/pages/locations-list-page/locations-list-page.component";
import {LocationsRoutingModule} from "~modules/locations/locations-routing.module";
import { SpinnerComponent } from '~app/shared/components/spinner/spinner.component';
import {SharedModule} from "~shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LocationsRoutingModule,
    NgOptimizedImage,
    SharedModule
  ],
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
