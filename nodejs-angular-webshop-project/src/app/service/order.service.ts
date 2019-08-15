import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders: Order[] = [
    new Order(),
    new Order(),
    new Order()
  ];

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:3210');


    /* return new Observable( observer => {
      observer.next(this.orders);
    }); */
  }

}
