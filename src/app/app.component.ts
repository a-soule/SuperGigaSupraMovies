import { Component } from '@angular/core';
import {MovieService} from './movies/movie.service';
import {Result} from './movies/result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'supermovies';
}
