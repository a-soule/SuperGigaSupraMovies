import { Component, OnInit } from '@angular/core';
import {Result} from './result';
import {MovieService} from './movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  result: Result;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

    focusoutHandler(event) {
    this.movieService.searchMovie(event.target.value).subscribe(res => this.result = res.results);
  }

}
