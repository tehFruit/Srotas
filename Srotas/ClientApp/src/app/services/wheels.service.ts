import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Wheels } from '../models/Wheels';

@Injectable({
  providedIn: 'root'
})
export class WheelsService {
  readonly baseURL = 'https://localhost:7265/api/Ratai';
  constructor(private http: HttpClient) { }

  getAllWheels(): Observable<Wheels[]> {
    return this.http.get<Wheels[]>(this.baseURL);
  }

  getWheels(id: string): Observable<Wheels> {
    return this.http.get<Wheels>(this.baseURL + `/${id}`);
  }

  postWheels(wheels: Wheels): Observable<Wheels> {
    return this.http.post<Wheels>(this.baseURL, wheels);
  }

  putWheels(id: string, wheels: Wheels): Observable<Wheels> {
    return this.http.put<Wheels>(this.baseURL + `/${id}`, wheels);
  }

  deleteWheels(id: string): Observable<Wheels> {
    return this.http.delete<Wheels>(this.baseURL + `/${id}`);
  }
}
