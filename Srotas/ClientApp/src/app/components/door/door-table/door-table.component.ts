import { CartService } from './../../../services/cart.service';
import { DoorDeleteMessageComponent } from '../door-delete-message/door-delete-message.component';
import { DoorPopupComponent } from '../door-popup/door-popup.component';
import { DoorsService } from '../../../services/doors.service';
import { Component, OnInit } from '@angular/core';
import { Door } from '../../../models/Door';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { Buyer } from 'src/app/models/Buyer';
import { Seller } from 'src/app/models/Seller';

@Component({
  selector: 'app-door-table',
  templateUrl: './door-table.component.html',
  styleUrls: ['./door-table.component.css']
})
export class DoorTableComponent implements OnInit {
  door: Door;
  doorData: Door[];
  show: boolean = false;
  
  currentUser: string;
  buyer: Buyer;
  seller: Seller;

  constructor(private doorService: DoorsService, private dialog: MatDialog, private snackBar: MatSnackBar, private userService : UserService, private cart: CartService) { }

  ngOnInit(): void {
    this.getAndRefreshData();
    this.getUser();
  }

  addToCart(d: Door){
    this.cart.addDoors(d);
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

  public openCreateDoorDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {};

    const dialogRef = this.dialog.open(DoorPopupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.door = data;
        this.door.pardavejasId = 1;
        this.doorService.postDoor(this.door).subscribe((data) => {
          this.getAndRefreshData();
          this.snackBar.open('Dur?? skelbimas sukurtas', 'Gerai', { duration: 3000 });
        });
      }
    });
  }

  openEditDoorDialog(door: Door) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      kaina: door.kaina,
      pavadinimas: door.pavadinimas,
      gamintojas: door.gamintojas,
      modelis: door.modelis,
      pagaminimoMetai: door.pagaminimoMetai,
      spalva: door.spalva,
    };

    const dialogRef = this.dialog.open(DoorPopupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        const updateObj = {
          kaina: data.kaina,
          pavadinimas: data.pavadinimas,
          gamintojas: data.gamintojas,
          modelis: data.modelis,
          pagaminimoMetai: data.pagaminimoMetai,
          spalva: data.spalva,
          id: door.id,
          parduotas: door.parduotas,
          pardavejasId: door.pardavejasId,
          uzsakymasId: door.uzsakymasId
        };

        this.doorService.putDoor(door.id, updateObj).subscribe(data => {
          this.getAndRefreshData();
          this.snackBar.open('Dur?? skelbimas atnaujintas', 'Gerai', { duration: 3000 });
        });
      }
    });
  }

  openDeleteDoorDialog(door: Door) {
    const dialogRef = this.dialog.open(DoorDeleteMessageComponent, { data: 'dur??' });
    dialogRef.afterClosed().subscribe(response => {
      if (response == 'true') {
        this.doorService.deleteDoor(door.id).subscribe(useless => {
          this.getAndRefreshData();
          this.snackBar.open('Dur?? skelbimas i??trintas', 'Gerai', { duration: 3000 });
        });
      }
    });
  }

  getAndRefreshData() {
    this.doorService.getAllDoors().subscribe(response => {
      this.doorData = response;
    });
  }

}
