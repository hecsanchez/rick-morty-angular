import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {EpisodesRoutingModule} from "~modules/episodes/episodes-routing.module";
import {EpisodeDetailPageComponent} from "~modules/episodes/pages/episode-detail-page/episode-detail-page.component";
import {EpisodesListPageComponent} from "~modules/episodes/pages/episodes-list-page/episodes-list-page.component";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, EpisodesRoutingModule],
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
