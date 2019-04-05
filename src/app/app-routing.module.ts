import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MOVIES_ROUTE} from './movies/movies.route';
import {AppComponent} from './app.component';
import {TopratedComponent} from './toprated/toprated.component';
import {RANDOM_ROUTE} from './random-movie/random-movie.route';

const routes: Routes = [
  { path: '', component: TopratedComponent },
  MOVIES_ROUTE,
  RANDOM_ROUTE
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
