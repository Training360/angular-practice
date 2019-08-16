import { Component } from '@angular/core';
import { StudentService } from './service/student.service';
import { Student } from './model/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe-directive-demo';

  studentList: Student[] = [];
  filterKey: string = "name";
  filterPhrase: string = "";

  constructor(
    private studentService: StudentService
  ) {
    this.studentList = this.studentService.list;
  }
}
