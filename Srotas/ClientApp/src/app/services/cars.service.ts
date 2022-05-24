import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/Car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  readonly baseURL = 'https://localhost:7201/api/Automobiliai';
  constructor(private http: HttpClient) { }

  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.baseURL);
  }

  getCar(id: number): Observable<Car> {
    return this.http.get<Car>(this.baseURL + `/${id}`);
  }

  postCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.baseURL, car);
  }

  putCar(id: number, car: Car): Observable<Car> {
    return this.http.put<Car>(this.baseURL + `/${id}`, car);
  }

  deleteCar(id: number): Observable<Car> {
    return this.http.delete<Car>(this.baseURL + `/${id}`);
  }
}
