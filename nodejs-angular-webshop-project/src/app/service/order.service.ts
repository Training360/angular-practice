import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders: Order[] = [
    new Order(),
    new Order(),
    new Order()
  ];

  constructor() { }

  getAll(): Observable<any> {
    return new Observable( observer => {
      observer.next(this.orders);
    });
  }

}
