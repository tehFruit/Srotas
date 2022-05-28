import { Buyer } from './../models/Buyer';
import { Seller } from './../models/Seller';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly userType = 'Buyer'; //Seller or Buyer
  readonly baseUrl = 'https://localhost:7201/api/User';
  constructor(private http: HttpClient) { }

  public getUserType(){
    return this.userType;
  }

  public getSeller() : Observable<Seller> {
    return this.http.get<Seller>(this.baseUrl + '/GetSeller');
  }

  public getBuyer() : Observable<Buyer>{
    return this.http.get<Buyer>(this.baseUrl + '/GetBuyer');
  }

  public UpdateSellerRating(rating: number) : Observable<Seller>{
    return this.http.put<Seller>(this.baseUrl + '/UpdateSeller', rating);
  }

  public UpdateBuyerBalance(balance: number) : Observable<Buyer>{
    return this.http.put<Buyer>(this.baseUrl + '/UpdateBuyer' + `/${balance}`, null);
  }
}
