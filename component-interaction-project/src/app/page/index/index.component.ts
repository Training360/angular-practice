import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  modalCounter: number = 0;

  constructor() { }

  ngOnInit() {
  }

  showModal(): void {
    this.modalCounter++;
  }

}
