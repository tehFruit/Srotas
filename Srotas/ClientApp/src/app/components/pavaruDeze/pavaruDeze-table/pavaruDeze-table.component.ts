import { CartService } from './../../../services/cart.service';
import { PavaruDezeDeleteMessageComponent } from '../pavaruDeze-delete-message/pavaruDeze-delete-message.component';
import { PavaruDezePopupComponent } from '../pavaruDeze-popup/pavaruDeze-popup.component';
import { PavaruDezeService } from '../../../services/pavaruDeze.service';
import { Component, OnInit } from '@angular/core';
import { PavaruDeze } from '../../../models/PavaruDeze';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { Buyer } from 'src/app/models/Buyer';
import { Seller } from 'src/app/models/Seller';

@Component({
  selector: 'app-pavaruDeze-table',
  templateUrl: './pavaruDeze-table.component.html',
  styleUrls: ['./pavaruDeze-table.component.css']
})
export class PavaruDezeTableComponent implements OnInit {

  pavaruDeze: PavaruDeze;
  pavaruDezeData: PavaruDeze[];
  show: boolean = false;
  
  currentUser: string;
  buyer: Buyer;
  seller: Seller;

  constructor(private pavaruDezeService: PavaruDezeService, private dialog: MatDialog, private snackBar: MatSnackBar, private userService : UserService, private cart: CartService) { }

  ngOnInit(): void {
    this.getAndRefreshData();
    this.getUser();
  }

  addToCart(box: PavaruDeze){
    this.cart.addGearbox(box);
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

  public openCreatePavaruDezeDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {};

    const dialogRef = this.dialog.open(PavaruDezePopupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.pavaruDeze = data;
        this.pavaruDeze.pardavejasId = 1;
        this.pavaruDezeService.postPavaruDeze(this.pavaruDeze).subscribe((data) => {
          this.getAndRefreshData();
          this.snackBar.open('Pavar?? d??????s skelbimas sukurtas', 'Gerai', { duration: 3000 });
        });
      }
    });
  }

  openEditPavaruDezeDialog(pavaruDeze: PavaruDeze) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      kaina: pavaruDeze.kaina,
      pavadinimas: pavaruDeze.pavadinimas,
      gamintojas: pavaruDeze.gamintojas,
      tipas: pavaruDeze.tipas
    };

    const dialogRef = this.dialog.open(PavaruDezePopupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        const updateObj = {
          kaina: data.kaina,
          pavadinimas: data.pavadinimas,
          gamintojas: data.gamintojas,
          tipas: data.tipas,
          id: pavaruDeze.id,
          pardavejasId: pavaruDeze.pardavejasId,
          parduotas: pavaruDeze.parduotas,
          uzsakymasId: pavaruDeze.uzsakymasId
        };

        this.pavaruDezeService.putPavaruDeze(pavaruDeze.id, updateObj).subscribe(data => {
          this.getAndRefreshData();
          this.snackBar.open('Pavar?? d??????s skelbimas atnaujintas', 'Gerai', { duration: 3000 });
        });
      }
    });
  }

  openDeletePavaruDezeDialog(pavaruDeze: PavaruDeze) {
    const dialogRef = this.dialog.open(PavaruDezeDeleteMessageComponent, { data: 'pavar?? d????i??' });
    dialogRef.afterClosed().subscribe(response => {
      if (response == 'true') {
        this.pavaruDezeService.deletePavaruDeze(pavaruDeze.id).subscribe(useless => {
          this.getAndRefreshData();
          this.snackBar.open('Pavar?? d??????s skelbimas i??trintas', 'Gerai', { duration: 3000 });
        });
      }
    });
  }

  getAndRefreshData() {
    this.pavaruDezeService.getAllPavaruDezes().subscribe(response => {
      this.pavaruDezeData = response;
    });
  }

}
