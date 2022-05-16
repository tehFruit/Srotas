import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Hood } from '../models/Hood';

@Injectable({
  providedIn: 'root'
})
export class HoodsService {
  readonly baseURL = 'https://localhost:7201/api/Variklis';
  constructor(private http: HttpClient) { }

  getAllHoods(): Observable<Hood[]> {
    return this.http.get<Hood[]>(this.baseURL);
  }

  getHood(id: number): Observable<Hood> {
    return this.http.get<Hood>(this.baseURL + `/${id}`);
  }

  postHood(hood: Hood): Observable<Hood> {
    return this.http.post<Hood>(this.baseURL, hood);
  }

  putHood(id: number, hood: Hood): Observable<Hood> {
    return this.http.put<Hood>(this.baseURL + `/${id}`, hood);
  }

  deleteHood(id: number): Observable<Hood> {
    return this.http.delete<Hood>(this.baseURL + `/${id}`);
  }
}
