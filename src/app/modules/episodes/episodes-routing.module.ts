import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterConfig } from '~app/config/router.config';
import {EpisodesListPageComponent} from "~modules/episodes/pages/episodes-list-page/episodes-list-page.component";
import {EpisodeDetailPageComponent} from "~modules/episodes/pages/episode-detail-page/episode-detail-page.component";

const routesNames = RouterConfig.routeNames;

const locationsRoutes: Routes = [
  { path: '', component: EpisodesListPageComponent },
  { path: routesNames.episodes.detail, component: EpisodeDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(locationsRoutes)],
  exports: [RouterModule],
})
export class EpisodesRoutingModule {}
