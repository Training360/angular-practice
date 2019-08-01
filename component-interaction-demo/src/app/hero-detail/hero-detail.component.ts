import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  @Output() onChange: EventEmitter<Hero> = new EventEmitter();



  constructor() { }

  ngOnInit() {
  }

  changeTrigger(): void {
    this.onChange.emit(this.hero);
  }

}
