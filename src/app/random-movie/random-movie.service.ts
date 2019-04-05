import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
const apiKey = 'b6aeb3ece0d12122656a309c7613fec1';
@Injectable({
  providedIn: 'root'
})


export class RandomMovieService {


  constructor(private http: HttpClient) { }
  currentQuery: string;
  private random: number;
  getRandomMovie(): Observable<any> {
    this.random = Math.floor((Math.random() * 600000) + 1);
    return this.http.get(
      'https://api.themoviedb.org/3/movie/' + this.random + '?api_key=b6aeb3ece0d12122656a309c7613fec1&language=fr-FR')
      ;
  }
}
