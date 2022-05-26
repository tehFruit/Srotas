import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Wheels } from '../models/Wheels';

@Injectable({
  providedIn: 'root'
})
export class WheelsService {
  readonly baseURL = 'https://localhost:7201/api/Ratai';
  constructor(private http: HttpClient) { }

  getAllWheels(): Observable<Wheels[]> {
    return this.http.get<Wheels[]>(this.baseURL);
  }

  getWheels(id: number): Observable<Wheels> {
    return this.http.get<Wheels>(this.baseURL + `/${id}`);
  }

  postWheels(wheels: Wheels): Observable<Wheels> {
    return this.http.post<Wheels>(this.baseURL, wheels);
  }

  putWheels(id: number, wheels: Wheels): Observable<Wheels> {
    return this.http.put<Wheels>(this.baseURL + `/${id}`, wheels);
  }

  deleteWheels(id: number): Observable<Wheels> {
    return this.http.delete<Wheels>(this.baseURL + `/${id}`);
  }

  getSpecWheels(dydis: string, plotis:number) : Observable<Wheels>{
    return this.http.get<Wheels>(this.baseURL + '/GetSpecific' + `/${dydis}` + `/${plotis}`);
  }
}
