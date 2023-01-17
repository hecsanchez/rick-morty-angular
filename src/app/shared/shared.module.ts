import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import {SearchBarComponent} from "~shared/components/search-bar/search-bar.component";
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SpinnerComponent,
    SearchBarComponent,
  ],
  exports: [
    CommonModule,
    SpinnerComponent,
    SearchBarComponent
  ],
})
export class SharedModule {}
