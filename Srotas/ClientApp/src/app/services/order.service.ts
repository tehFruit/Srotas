import { Observable } from 'rxjs/internal/Observable';
import { Order } from './../models/Order';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  readonly baseURL = 'https://localhost:7201/api/Uzsakymas';
  constructor(private http: HttpClient) { }

  createOrder(order: any) : Observable<Order>{
    return this.http.post<Order>(this.baseURL + '/NewOrder', order);
  }
}
