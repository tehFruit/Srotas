import { CartService } from './../../../services/cart.service';
import { HoodDeleteMessageComponent } from './../hood-delete-message/hood-delete-message.component';
import { HoodPopupComponent } from './../hood-popup/hood-popup.component';
import { HoodsService } from './../../../services/hoods.service';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Hood } from './../../../models/Hood';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Buyer } from 'src/app/models/Buyer';
import { Seller } from 'src/app/models/Seller';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-hood-table',
  templateUrl: './hood-table.component.html',
  styleUrls: ['./hood-table.component.css']
})
export class HoodTableComponent implements OnInit {
  hood: Hood;
  hoodData: Hood[];
  show: boolean = false;
  
  currentUser: string;
  buyer: Buyer;
  seller: Seller;

  constructor(private hoodService: HoodsService, private dialog: MatDialog, private snackBar: MatSnackBar, private userService : UserService, private cart: CartService) { }

  ngOnInit(): void {
    this.getAndRefreshData();
    this.getUser();
  }

  addToCart(h: Hood){
    this.cart.addHood(h);
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

  public openCreateHoodDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {};

    const dialogRef = this.dialog.open(HoodPopupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.hood = data;
        this.hood.pardavejasId = 1;
        this.hoodService.postHood(this.hood).subscribe((data) => {
          this.getAndRefreshData();
          this.snackBar.open('Kapoto skelbimas sukurtas', 'Gerai', { duration: 3000 });
        });
      }
    });
  }

  openEditHoodDialog(hood: Hood) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      kaina: hood.kaina,
      pavadinimas: hood.pavadinimas,
      gamintojas: hood.gamintojas,
      modelis: hood.modelis,
      pagaminimoMetai: hood.pagaminimoMetai,
      spalva: hood.spalva,
    };

    const dialogRef = this.dialog.open(HoodPopupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        const updateObj = {
          kaina: data.kaina,
          pavadinimas: data.pavadinimas,
          gamintojas: data.gamintojas,
          modelis: data.modelis,
          pagaminimoMetai: data.pagaminimoMetai,
          spalva: data.spalva,
          id: hood.id,
          pardavejasId: hood.pardavejasId,
          parduotas: hood.parduotas,
          uzsakymasId : hood.uzsakymasId
        };

        this.hoodService.putHood(hood.id, updateObj).subscribe(data => {
          this.getAndRefreshData();
          this.snackBar.open('Kapoto skelbimas atnaujintas', 'Gerai', { duration: 3000 });
        });
      }
    });
  }

  openDeleteHoodDialog(hood: Hood) {
    const dialogRef = this.dialog.open(HoodDeleteMessageComponent, { data: 'kapoto' });
    dialogRef.afterClosed().subscribe(response => {
      if (response == 'true') {
        this.hoodService.deleteHood(hood.id).subscribe(useless => {
          this.getAndRefreshData();
          this.snackBar.open('Kapoto skelbimas i??trintas', 'Gerai', { duration: 3000 });
        });
      }
    });
  }

  getAndRefreshData() {
    this.hoodService.getAllHoods().subscribe(response => {
      this.hoodData = response;
    });
  }

}
