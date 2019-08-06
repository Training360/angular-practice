import { Component, OnInit } from '@angular/core';
import { FilmService } from './service/film.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'http-client-demo';

  constructor(
    private filmService: FilmService
  ) {

  }

  ngOnInit() {
    this.filmService.getAll().subscribe(
      films => console.log(films)
    )
  }
}
