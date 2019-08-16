import { Component, OnInit } from '@angular/core';
import { MockData } from 'src/app/model/mock-data';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  modalCounter: number = 0;
  mockData: MockData = new MockData();
  employees: Employee[] = [];

  constructor() {
    this.employees = this.mockData.employee;
  }

  ngOnInit() {
  }

  showModal(): void {
    this.modalCounter++;
  }

}
