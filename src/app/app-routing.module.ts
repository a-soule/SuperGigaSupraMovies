import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MOVIES_ROUTE} from './movies/movies.route';

const routes: Routes = [
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  MOVIES_ROUTE
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
