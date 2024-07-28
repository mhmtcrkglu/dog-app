import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BreedListComponent } from './breed-list/breed-list.component';
import { BreedDetailComponent } from './breed-detail/breed-detail.component';
import { AnalyticsComponent } from './analytics/analytics.component';

const routes: Routes = [
  { path: '', redirectTo: '/breed-list', pathMatch: 'full' },
  { path: 'breed-list', component: BreedListComponent },
  { path: 'breed-detail/:id', component: BreedDetailComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: '**', redirectTo: '/breed-list' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
