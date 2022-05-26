import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Seller } from '../models/Seller';
import { Buyer } from '../models/Buyer';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  currentUser: string;
  buyer: Buyer;
  seller: Seller;
  constructor(private userService : UserService){}

  ngOnInit(): void {
    this.getUser();
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  getUser(){
    this.currentUser = this.userService.getUserType();
    if(this.currentUser == 'Buyer'){
      this.userService.getBuyer().subscribe(b => {
        this.buyer = b;
      });
    }
    else{
      this.userService.getSeller().subscribe(s => {
        this.seller = s;
      });
    }
  }

}
