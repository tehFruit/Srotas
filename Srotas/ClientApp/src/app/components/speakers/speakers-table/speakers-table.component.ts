import { CartService } from './../../../services/cart.service';
import { SpeakersDeleteMessageComponent } from './../speakers-delete-message/speakers-delete-message.component';
import { SpeakersPopupComponent } from './../speakers-popup/speakers-popup.component';
import { SpeakersService } from './../../../services/speakers.service';
import { Component, OnInit } from '@angular/core';
import { Speaker } from './../../../models/Speaker';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { Buyer } from 'src/app/models/Buyer';
import { Seller } from 'src/app/models/Seller';

@Component({
  selector: 'app-speakers-table',
  templateUrl: './speakers-table.component.html',
  styleUrls: ['./speakers-table.component.css']
})
export class SpeakersTableComponent implements OnInit {

  speaker: Speaker;
  speakerData: Speaker[];
  show: boolean = false;
  
  currentUser: string;
  buyer: Buyer;
  seller: Seller;

  constructor(private speakerService: SpeakersService, private dialog: MatDialog, private snackBar: MatSnackBar, private userService : UserService, private cart: CartService) { }

  ngOnInit(): void {
    this.getAndRefreshData();
    this.getUser();
  }

  addToCart(sp : Speaker){
    this.cart.addSpeakers(sp);
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

  public openCreateSpeakerDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {};

    const dialogRef = this.dialog.open(SpeakersPopupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.speaker = data;
        this.speaker.pardavejasId = 1;
        this.speakerService.postSpeaker(this.speaker).subscribe((data) => {
          this.getAndRefreshData();
          this.snackBar.open('Kolon??l??s skelbimas sukurtas', 'Gerai', { duration: 3000 });
        });
      }
    });
  }

  openEditSpeakerDialog(speaker: Speaker) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      kaina: speaker.kaina,
      pavadinimas: speaker.pavadinimas,
      gamintojas: speaker.gamintojas,
      skersmuo: speaker.skersmuo,
    };

    const dialogRef = this.dialog.open(SpeakersPopupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        const updateObj = {
          kaina: data.kaina,
          pavadinimas: data.pavadinimas,
          gamintojas: data.gamintojas,
          skersmuo: data.skersmuo,
          id: speaker.id,
          parduotas: speaker.parduotas,
          pardavejasId: speaker.pardavejasId,
          uzsakymasId: speaker.uzsakymasId
        };

        this.speakerService.putSpeaker(speaker.id, updateObj).subscribe(data => {
          this.getAndRefreshData();
          this.snackBar.open('Kolon??l??s skelbimas atnaujintas', 'Gerai', { duration: 3000 });
        });
      }
    });
  }

  openDeleteSpeakerDialog(speaker: Speaker) {
    const dialogRef = this.dialog.open(SpeakersDeleteMessageComponent, { data: 'rat??' });
    dialogRef.afterClosed().subscribe(response => {
      if (response == 'true') {
        this.speakerService.deleteSpeaker(speaker.id).subscribe(useless => {
          this.getAndRefreshData();
          this.snackBar.open('Kolon??l??s skelbimas i??trintas', 'Gerai', { duration: 3000 });
        });
      }
    });
  }

  getAndRefreshData() {
    this.speakerService.getAllSpeakers().subscribe(response => {
      this.speakerData = response;
    });
  }

}
