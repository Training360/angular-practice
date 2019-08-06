import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../model/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  jsonUrl: string = 'http://localhost:3000/film';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Film[]> {
    return this.http.get<Film[]>(this.jsonUrl);
  }
}
