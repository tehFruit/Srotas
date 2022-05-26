import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Speaker } from '../models/Speaker';

@Injectable({
  providedIn: 'root'
})
export class SpeakersService {
  readonly baseURL = 'https://localhost:7201/api/Koloneles';
  constructor(private http: HttpClient) { }

  getAllSpeakers(): Observable<Speaker[]> {
    return this.http.get<Speaker[]>(this.baseURL);
  }

  getSpeaker(id: number): Observable<Speaker> {
    return this.http.get<Speaker>(this.baseURL + `/${id}`);
  }

  postSpeaker(speaker: Speaker): Observable<Speaker> {
    return this.http.post<Speaker>(this.baseURL, speaker);
  }

  putSpeaker(id: number, speaker: Speaker): Observable<Speaker> {
    return this.http.put<Speaker>(this.baseURL + `/${id}`, speaker);
  }

  deleteSpeaker(id: number): Observable<Speaker> {
    return this.http.delete<Speaker>(this.baseURL + `/${id}`);
  }

  getSpecSpeaker(skersmuo: number) : Observable<Speaker>{
    return this.http.get<Speaker>(this.baseURL + '/GetSpecific' + `/${skersmuo}`);
  }
}
