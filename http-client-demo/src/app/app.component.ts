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

  onDelete(film: Film) {
    this.filmService.remove(film.id).subscribe(
      response => {
        let index = this.filmList.indexOf(film);
        this.filmList.splice(index, 1);
      },
      err => console.error(err)
    )
  }

  onUpdate(film:Film) {
    this.filmService.update(film).subscribe(
      response => {},
      err => console.log(err)
    )
  }

  ngOnInit() {
    this.filmService.getAll().subscribe(
      films => this.filmList = films
    )
  }


}
