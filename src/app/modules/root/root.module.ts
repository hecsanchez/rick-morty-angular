import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { RootRoutingModule } from './root-routing.module';
import { SharedModule } from '~shared/shared.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SharedModule, RootRoutingModule],
  declarations: [
    HomePageComponent,
    ErrorPageComponent
  ],
  exports: [
    HomePageComponent,
    ErrorPageComponent
  ],
})
export class RootModule {}
