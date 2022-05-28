import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor() { }

  //Simulates bank api with 80% success chance
  approved(){
    return Math.random() < 0.8;
  }
}
