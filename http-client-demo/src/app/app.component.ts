import { Component, OnInit } from '@angular/core';
import { FilmService } from './service/film.service';
import { Film } from './model/film';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'http-client-demo';
  filmList: Film[] = [];

  constructor(
    private filmService: FilmService
  ) {

  }

  ngOnInit() {
    this.filmService.getAll().subscribe(
      films => this.filmList = films
    )
  }
}
