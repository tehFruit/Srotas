import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Nuolaida } from '../models/Nuolaida';

@Injectable({
  providedIn: 'root'
})
export class NuolaidaService {
  readonly baseURL = 'https://localhost:7201/api/Nuolaida';
  constructor(private http: HttpClient) { }

  GetAllNuolaidos(): Observable<Nuolaida[]> {
    return this.http.get<Nuolaida[]>(this.baseURL);
  }

  getNuolaida(id: number): Observable<Nuolaida> {
    return this.http.get<Nuolaida>(this.baseURL + `/${id}`);
  }

  postNuolaida(engine: Nuolaida): Observable<Nuolaida> {
    return this.http.post<Nuolaida>(this.baseURL, engine);
  }

  putNuolaida(id: number, engine: Nuolaida): Observable<Nuolaida> {
    return this.http.put<Nuolaida>(this.baseURL + `/${id}`, engine);
  }

  deleteNuolaida(id: number): Observable<Nuolaida> {
    return this.http.delete<Nuolaida>(this.baseURL + `/${id}`);
  }
}
