import { EngineDeleteMessageComponent } from './../engine-delete-message/engine-delete-message.component';
import { EnginePopupComponent } from './../engine-popup/engine-popup.component';
import { EnginesService } from './../../../services/engines.service';
import { Component, OnInit } from '@angular/core';
import { Engine } from './../../../models/Engine';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { Buyer } from 'src/app/models/Buyer';
import { Seller } from 'src/app/models/Seller';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-engine-table',
  templateUrl: './engine-table.component.html',
  styleUrls: ['./engine-table.component.css']
})
export class EngineTableComponent implements OnInit {
  engine: Engine;
  engineData: Engine[];
  show: boolean = false;

  currentUser: string;
  buyer: Buyer;
  seller: Seller;

  constructor(private engineService: EnginesService, private dialog: MatDialog, private snackBar: MatSnackBar, private userService : UserService, private cart: CartService) { }

  ngOnInit(): void {
    this.getAndRefreshData();
    this.getUser();
  }

  addToCart(engine: Engine){
    this.cart.addEngine(engine);
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

  public openCreateEngineDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {};

    const dialogRef = this.dialog.open(EnginePopupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.engine = data;
        this.engine.pardavejasId = 1;
        this.engineService.postEngine(this.engine).subscribe((data) => {
          this.getAndRefreshData();
          this.snackBar.open('Variklio skelbimas sukurtas', 'Gerai', { duration: 3000 });
        });
      }
    });
  }

  openEditEngineDialog(engine: Engine) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      kaina: engine.kaina,
      pavadinimas: engine.pavadinimas,
      gamintojas: engine.gamintojas,
      turis: engine.turis,
      kuroTipas: engine.kuroTipas,
    };

    const dialogRef = this.dialog.open(EnginePopupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        const updateObj = {
          kaina: data.kaina,
          pavadinimas: data.pavadinimas,
          gamintojas: data.gamintojas,
          turis: data.turis,
          kuroTipas: data.kuroTipas,
          id: engine.id,
          parduotas: engine.parduotas,
          pardavejasId: engine.pardavejasId,
          uzsakymasId: engine.uzsakymasId
        };

        this.engineService.putEngine(engine.id, updateObj).subscribe(data => {
          this.getAndRefreshData();
          this.snackBar.open('Variklio skelbimas atnaujintas', 'Gerai', { duration: 3000 });
        });
      }
    });
  }

  openDeleteEngineDialog(engine: Engine) {
    const dialogRef = this.dialog.open(EngineDeleteMessageComponent, { data: 'ratų' });
    dialogRef.afterClosed().subscribe(response => {
      if (response == 'true') {
        this.engineService.deleteEngine(engine.id).subscribe(useless => {
          this.getAndRefreshData();
          this.snackBar.open('Variklio skelbimas ištrintas', 'Gerai', { duration: 3000 });
        });
      }
    });
  }

  getAndRefreshData() {
    this.engineService.getAllEngines().subscribe(response => {
      this.engineData = response;
    });
  }

}
