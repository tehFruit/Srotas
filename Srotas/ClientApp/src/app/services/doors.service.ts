import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Door } from '../models/Door';

@Injectable({
  providedIn: 'root'
})
export class DoorsService {
  readonly baseURL = 'https://localhost:7201/api/Variklis';
  constructor(private http: HttpClient) { }

  getAllDoors(): Observable<Door[]> {
    return this.http.get<Door[]>(this.baseURL);
  }

  getDoor(id: number): Observable<Door> {
    return this.http.get<Door>(this.baseURL + `/${id}`);
  }

  postDoor(door: Door): Observable<Door> {
    return this.http.post<Door>(this.baseURL, door);
  }

  putDoor(id: number, door: Door): Observable<Door> {
    return this.http.put<Door>(this.baseURL + `/${id}`, door);
  }

  deleteDoor(id: number): Observable<Door> {
    return this.http.delete<Door>(this.baseURL + `/${id}`);
  }
}
