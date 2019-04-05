import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
const apiKey = 'b6aeb3ece0d12122656a309c7613fec1';
@Injectable({
  providedIn: 'root'
})


export class MovieService {


  constructor(private http: HttpClient) { }
  currentQuery: string;
  searchMovie(query: string): Observable<any> {
    this.currentQuery = query;
    return this.http.get('https://api.themoviedb.org/3/search/movie' + '?api_key=' + apiKey + '&language=fr-FR&query=' + query +
      '&page=1&include_adult=false')
      ;
  }
  getTopRated(): Observable<any> {
  return this.http.get( 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + apiKey + '&language=en-US&page=1');
  }

  searchMovieAtPage(page: number): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/search/movie' + '?api_key=' + apiKey + '&language=fr-FR&query=' + this.currentQuery +
      '&page=' + page + '&include_adult=false')
      ;
  }

  getGenre(): Observable<any>{
    return this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=b6aeb3ece0d12122656a309c7613fec1&language=fr-FR');
  }
}
