import { Component, OnInit } from '@angular/core';
import {Result} from '../movies/result';
import {MovieService} from '../movies/movie.service';
import {MoviesComponent} from '../movies/movies.component';
import {Genres} from '../movies/genre';

@Component({
  selector: 'app-toprated',
  templateUrl: './toprated.component.html',
  styleUrls: ['./toprated.component.css']
})
export class TopratedComponent implements OnInit {
  genres: Genres;
  topRate: Result;

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.getGenres();
    this.movieService.getTopRated().subscribe(res => this.topRate = res.results.slice(1, 4));
  }

  getGenres() {
    this.movieService.getGenre().subscribe(res => this.genres = res);
  }
}
