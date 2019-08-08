import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: any = {
    id: 1,
    name: "Sörös Piroska",
    age: 45,
    email: "piri@gmail.com",
    password: "piriVagyoknemtagadombevallom765*"
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(ev: Event): void {
    ev.preventDefault();
    console.log('Itt hívom meg a service update metódusát!', this.user);
  }

}
