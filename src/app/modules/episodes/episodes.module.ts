import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {EpisodesRoutingModule} from "~modules/episodes/episodes-routing.module";
import {EpisodeDetailPageComponent} from "~modules/episodes/pages/episode-detail-page/episode-detail-page.component";
import {EpisodesListPageComponent} from "~modules/episodes/pages/episodes-list-page/episodes-list-page.component";
import {SharedModule} from "~shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EpisodesRoutingModule,
    NgOptimizedImage,
    SharedModule
  ],
  declarations: [
    EpisodeDetailPageComponent,
    EpisodesListPageComponent
  ],
  exports: [
    EpisodeDetailPageComponent,
    EpisodesListPageComponent
  ],
})
export class EpisodesModule {}
