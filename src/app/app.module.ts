import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import {MOVIES_ROUTE} from './movies/movies.route';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { TopratedComponent } from './toprated/toprated.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RandomMovieComponent } from './random-movie/random-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TopratedComponent,
    RandomMovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
