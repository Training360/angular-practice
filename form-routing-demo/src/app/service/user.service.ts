import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  list: User[] = [
    new User({
      id: 1,
      name: "Sörös Piroska",
      age: 45,
      email: "piri@gmail.com",
      password: "piriVagyoknemtagadombevallom765*"
    }),
    new User({
      id: 2,
      name: "Boros Piroska",
      age: 25,
      email: "bpiri@gmail.com",
      password: "IAmYourWorstNightmare*"
    })
  ]

  constructor() { }

  get(id: number): User {
    return this.list.filter( user => user.id == id )[0] || new User();
  }
}
