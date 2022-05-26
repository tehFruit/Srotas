import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Engine } from '../models/Engine';

@Injectable({
  providedIn: 'root'
})
export class EnginesService {
  readonly baseURL = 'https://localhost:7201/api/Variklis';
  constructor(private http: HttpClient) { }

  getAllEngines(): Observable<Engine[]> {
    return this.http.get<Engine[]>(this.baseURL);
  }

  getEngine(id: number): Observable<Engine> {
    return this.http.get<Engine>(this.baseURL + `/${id}`);
  }

  postEngine(engine: Engine): Observable<Engine> {
    return this.http.post<Engine>(this.baseURL, engine);
  }

  putEngine(id: number, engine: Engine): Observable<Engine> {
    return this.http.put<Engine>(this.baseURL + `/${id}`, engine);
  }

  deleteEngine(id: number): Observable<Engine> {
    return this.http.delete<Engine>(this.baseURL + `/${id}`);
  }

  getSpecEngine(gamintojas: string, turis: number, tipas: string) : Observable<Engine>{
    return this.http.get<Engine>(this.baseURL + '/GetSpecific' + `/${gamintojas}` + `/${turis}` + `/${tipas}`);
  }
}
