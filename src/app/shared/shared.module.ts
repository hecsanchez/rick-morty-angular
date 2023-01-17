import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {SearchBarComponent} from "~shared/components/search-bar/search-bar.component";
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from "~shared/components/header/header.component";
import {RouterLink} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
  ],
  declarations: [
    SpinnerComponent,
    SearchBarComponent,
    HeaderComponent
  ],
  exports: [
    CommonModule,
    SpinnerComponent,
    SearchBarComponent,
    HeaderComponent
  ],
})
export class SharedModule {}
