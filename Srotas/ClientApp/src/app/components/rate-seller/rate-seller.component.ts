import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Seller } from 'src/app/models/Seller';

@Component({
  selector: 'app-rate-seller',
  templateUrl: './rate-seller.component.html',
  styleUrls: ['./rate-seller.component.css']
})
export class RateSellerComponent implements OnInit {

  ratingStr: string = '0';
  ratingNum: number = 0;
  constructor(private userService: UserService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  rate(){
    this.userService.getSeller().subscribe( seller => {
      this.ratingNum = Number(this.ratingStr);
      let rating: number = seller.reitingas + this.ratingNum;
      console.log(rating);
      this.userService.UpdateSellerRating(rating).subscribe(() => {
        this.snackBar.open('Pardavėjas įvertintas', 'Gerai', {duration: 3000});
      });
    });
  }
}
