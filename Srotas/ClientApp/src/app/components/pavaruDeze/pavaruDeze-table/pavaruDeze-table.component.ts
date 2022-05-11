import { PavaruDezeDeleteMessageComponent } from '../pavaruDeze-delete-message/pavaruDeze-delete-message.component';
import { PavaruDezePopupComponent } from '../pavaruDeze-popup/pavaruDeze-popup.component';
import { PavaruDezeService } from '../../../services/pavaruDeze.service';
import { Component, OnInit } from '@angular/core';
import { PavaruDeze } from '../../../models/PavaruDeze';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pavaruDeze-table',
  templateUrl: './pavaruDeze-table.component.html',
  styleUrls: ['./pavaruDeze-table.component.css']
})
export class PavaruDezeTableComponent implements OnInit {

  pavaruDeze: PavaruDeze;
  pavaruDezeData: PavaruDeze[];
  show: boolean = false;
  displayedColumns = [
    'kaina',
    'pavadinimas',
    'gamintojas',
    'tipas',
    'veiksmai'
  ];

  constructor(private pavaruDezeService: PavaruDezeService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAndRefreshData();
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
        this.pavaruDezeService.postPavaruDeze(this.pavaruDeze).subscribe((data) => {
          this.getAndRefreshData();
          this.snackBar.open('Pavarų dėžės skelbimas sukurtas', 'Gerai', { duration: 3000 });
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
          tipas: data.tipas
        };

        this.pavaruDezeService.putPavaruDeze(pavaruDeze.id, data).subscribe(data => {
          this.getAndRefreshData();
          this.snackBar.open('Pavarų dėžės skelbimas atnaujintas', 'Gerai', { duration: 3000 });
        });
      }
    });
  }

  openDeletePavaruDezeDialog(pavaruDeze: PavaruDeze) {
    const dialogRef = this.dialog.open(PavaruDezeDeleteMessageComponent, { data: 'pavarų dėžių' });
    dialogRef.afterClosed().subscribe(response => {
      if (response == 'true') {
        this.pavaruDezeService.deletePavaruDeze(pavaruDeze.id).subscribe(useless => {
          this.getAndRefreshData();
          this.snackBar.open('Pavarų dėžės skelbimas ištrintas', 'Gerai', { duration: 3000 });
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
