import {Movie} from './movie';

export class Result {
  page: number;
  totalResults: number;
  totalPages: number;
  results: Movie[];
}
