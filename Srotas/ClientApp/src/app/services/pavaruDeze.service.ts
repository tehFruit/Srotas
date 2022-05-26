import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PavaruDeze } from '../models/PavaruDeze';

@Injectable({
  providedIn: 'root'
})
export class PavaruDezeService {
  readonly baseURL = 'https://localhost:7201/api/PavaruDeze';
  constructor(private http: HttpClient) { }

  getAllPavaruDezes(): Observable<PavaruDeze[]> {
    return this.http.get<PavaruDeze[]>(this.baseURL);
  }

  getPavaruDeze(id: number): Observable<PavaruDeze> {
    return this.http.get<PavaruDeze>(this.baseURL + `/${id}`);
  }

  postPavaruDeze(pavaruDeze: PavaruDeze): Observable<PavaruDeze> {
    return this.http.post<PavaruDeze>(this.baseURL, pavaruDeze);
  }

  putPavaruDeze(id: number, pavaruDeze: PavaruDeze): Observable<PavaruDeze> {
    return this.http.put<PavaruDeze>(this.baseURL + `/${id}`, pavaruDeze);
  }

  deletePavaruDeze(id: number): Observable<PavaruDeze> {
    return this.http.delete<PavaruDeze>(this.baseURL + `/${id}`);
  }

  getSpecPavaruDeze(gamintojas: string, tipas: string): Observable<PavaruDeze>{
    return this.http.get<PavaruDeze>(this.baseURL + '/GetSpecific' + `/${gamintojas}` + `/${tipas}`);
  }
}
