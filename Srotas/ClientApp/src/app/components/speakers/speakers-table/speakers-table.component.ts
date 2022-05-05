import { SpeakersDeleteMessageComponent } from './../speakers-delete-message/speakers-delete-message.component';
import { SpeakersPopupComponent } from './../speakers-popup/speakers-popup.component';
import { SpeakersService } from './../../../services/speakers.service';
import { Component, OnInit } from '@angular/core';
import { Speaker } from './../../../models/Speaker';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-speakers-table',
  templateUrl: './speakers-table.component.html',
  styleUrls: ['./speakers-table.component.css']
})
export class SpeakersTableComponent implements OnInit {

  speaker: Speaker;
  speakerData: Speaker[];
  show: boolean = false;
  displayedColumns = [
    'kaina',
    'pavadinimas',
    'gamintojas',
    'skersmuo',
    'veiksmai'
  ];

  constructor(private speakerService: SpeakersService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAndRefreshData();
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
        this.speakerService.postSpeaker(this.speaker).subscribe((data) => {
          this.getAndRefreshData();
          this.snackBar.open('Kolonėlės skelbimas sukurtas', 'Gerai', { duration: 3000 });
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
        };

        this.speakerService.putSpeaker(speaker.id, data).subscribe(data => {
          this.getAndRefreshData();
          this.snackBar.open('Kolonėlės skelbimas atnaujintas', 'Gerai', { duration: 3000 });
        });
      }
    });
  }

  openDeleteSpeakerDialog(speaker: Speaker) {
    const dialogRef = this.dialog.open(SpeakersDeleteMessageComponent, { data: 'ratų' });
    dialogRef.afterClosed().subscribe(response => {
      if (response == 'true') {
        this.speakerService.deleteSpeaker(speaker.id).subscribe(useless => {
          this.getAndRefreshData();
          this.snackBar.open('Kolonėlės skelbimas ištrintas', 'Gerai', { duration: 3000 });
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
