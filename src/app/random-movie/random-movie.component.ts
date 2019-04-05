import { Component, OnInit } from '@angular/core';
import {RandomMovieService} from './random-movie.service';
import {RandomMovie} from './randomMovie';

@Component({
  selector: 'app-random-movie',
  templateUrl: './random-movie.component.html',
  styleUrls: ['./random-movie.component.css']
})
export class RandomMovieComponent implements OnInit {
  random: RandomMovie;
  constructor(private randomService: RandomMovieService) { }

  ngOnInit() {
    this.randomService.getRandomMovie().subscribe(res => this.random = res);
  }

}
