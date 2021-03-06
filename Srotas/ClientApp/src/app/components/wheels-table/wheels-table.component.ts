import { WheelsDeleteMessageComponent } from './../wheels-delete-message/wheels-delete-message.component';
import { WheelsPopupComponent } from './../wheels-popup/wheels-popup.component';
import { WheelsService } from './../../services/wheels.service';
import { Component, OnInit } from '@angular/core';
import { Wheels } from './../../models/Wheels';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Buyer } from 'src/app/models/Buyer';
import { Seller } from 'src/app/models/Seller';
import { UserService } from 'src/app/services/user.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-wheels-table',
  templateUrl: './wheels-table.component.html',
  styleUrls: ['./wheels-table.component.css']
})
export class WheelsTableComponent implements OnInit {
  wheels: Wheels;
  wheelsData: Wheels[];

  currentUser: string;
  buyer: Buyer;
  seller: Seller;

  constructor(private wheelsService: WheelsService, private dialog: MatDialog, private snackBar: MatSnackBar, private userService : UserService, private cart: CartService) { }

  ngOnInit(): void {
    this.getAndRefreshData();
    this.getUser();
  }

  addToCart(wheels: Wheels){
    this.cart.addWheels(wheels);
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

  public openCreateWheelsDialog(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {};

    const dialogRef = this.dialog.open(WheelsPopupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      if(data){
        this.wheels = data;
        this.wheels.pardavejasId = 1;
        this.wheelsService.postWheels(this.wheels).subscribe((data) => {
          this.getAndRefreshData();
          this.snackBar.open('Rat?? skelbimas sukurtas', 'Gerai', {duration: 3000});
        });
      }
    });
  }

  openEditWheelsDialog(wheels: Wheels){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      kaina : wheels.kaina,
      pavadinimas : wheels.pavadinimas,
      dydis : wheels.dydis,
      plotis : wheels.plotis,
      gamintojas: wheels.gamintojas,
    };

    const dialogRef = this.dialog.open(WheelsPopupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      if(data){
        const updateObj = {
          kaina : data.kaina,
          pavadinimas : data.pavadinimas,
          dydis : data.dydis,
          plotis : data.plotis,
          gamintojas: data.gamintojas,
          id: wheels.id,
          parduotas: wheels.parduotas,
          pardavejasId : wheels.pardavejasId,
          uzsakymasId : wheels.uzsakymasId
        };

        this.wheelsService.putWheels(wheels.id, updateObj).subscribe(data => {
          this.getAndRefreshData();
          this.snackBar.open('Rat?? skelbimas atnaujintas', 'Gerai', {duration: 3000});
        });
      }
    });
  }

  openDeleteWheelsDialog(wheels: Wheels){
    const dialogRef = this.dialog.open(WheelsDeleteMessageComponent, {data: 'rat??'});
    dialogRef.afterClosed().subscribe(response => {
      if(response =='true'){
        this.wheelsService.deleteWheels(wheels.id).subscribe(useless =>{
          this.getAndRefreshData();
          this.snackBar.open('Rat?? skelbimas i??trintas', 'Gerai', {duration: 3000});
        });
      }
    });
  }

  getAndRefreshData(){
    this.wheelsService.getAllWheels().subscribe(response => {
      this.wheelsData = response;
    });
  }

}
