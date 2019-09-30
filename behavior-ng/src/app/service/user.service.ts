import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  list: BehaviorSubject<any> = new BehaviorSubject([]);
  url: string = 'http://localhost:3000/users';

  constructor(
    private http: HttpClient
  ) { }

  readAll(): void {
    this.http.get(this.url).forEach(
      data => this.list.next(data)
    );
  }

  create(user): void {
    this.http.post(this.url, user).forEach(
      resp => this.readAll()
    );
  }

  delete(id): void {
    this.http.delete(this.url+'/'+id).forEach(
      done => this.readAll()
    );
  }
}
