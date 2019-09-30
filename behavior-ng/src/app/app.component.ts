import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'behavior-ng';
  list$: BehaviorSubject<any> = this.us.list;
  newUser: any = {};

  constructor(
    private us: UserService
  ) {

  }

  ngOnInit() {
    this.us.readAll();
  }

  onCreate(user) {
    this.us.create(user);
    this.newUser = {};
  }

  onDelete(user): void {
    this.us.delete(user.id);
  }
}
