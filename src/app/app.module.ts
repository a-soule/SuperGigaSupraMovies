import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import {MOVIES_ROUTE} from './movies/movies.route';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
