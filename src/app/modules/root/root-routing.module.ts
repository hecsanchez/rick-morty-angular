import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterConfig } from '~app/config/router.config';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

const routes = RouterConfig.routeNames;

const rootRoutes: Routes = [
  { path: routes.home, component: HomePageComponent, pathMatch: 'full' },
  { path: routes.error, component: ErrorPageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(rootRoutes)],
  exports: [RouterModule],
})
export class RootRoutingModule {}
