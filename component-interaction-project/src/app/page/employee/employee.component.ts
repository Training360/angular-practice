import { Component, OnInit } from '@angular/core';
import { MockData } from '../../model/mock-data';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeList: Employee[];

  constructor(
    private mock: MockData
  ) {
    this.employeeList = this.mock.employee;
    this.mock.employee = [];
  }

  ngOnInit() {
  }

}
