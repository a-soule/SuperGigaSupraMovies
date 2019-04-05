import {Movie} from './movie';

export class Result {
  page: number;
  total_results: number;
  total_pages: number;
  results: Movie[];
}
