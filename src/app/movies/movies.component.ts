import { Component, OnInit } from '@angular/core';
import {Result} from './result';
import {MovieService} from './movie.service';
import {Genres} from './genre';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  result: Result;
  genres: Genres;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getGenres();
  }

    focusoutHandler(event) {
    this.movieService.searchMovie(event.target.value).subscribe(res => this.result = res);
  }
  changePageReact(page: number) {
    console.log('slt');
    this.movieService.searchMovieAtPage(page).subscribe(res => this.result = res);

  }

  getGenres() {
    this.movieService.getGenre().subscribe(res => this.genres = res);
  }
}
