import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

const API_KEY='cae9c635';
const BASE_URL='https://www.omdbapi.com/';

@Injectable({
  providedIn: 'root'
})
export class OmdbserviceService {

  constructor(private http:HttpClient) { }

  getMovieData(query:string) {
    return this.http.get<any>(`${BASE_URL}?apikey=${API_KEY}&type=movie&s=${query}&page=1`);
  }
}
