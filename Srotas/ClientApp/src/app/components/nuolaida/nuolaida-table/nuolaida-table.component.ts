import { NuolaidaDeleteMessageComponent } from '../nuolaida-delete-message/nuolaida-delete-message.component';
import { NuolaidaPopupComponent } from '../nuolaida-popup/nuolaida-popup.component';
import { NuolaidaService } from '../../../services/nuolaidos.service';
import { Component, OnInit } from '@angular/core';
import { Nuolaida } from '../../../models/Nuolaida';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-nuolaida-table',
  templateUrl: './nuolaida-table.component.html',
  styleUrls: ['./nuolaida-table.component.css']
})
export class NuolaidaTableComponent implements OnInit {
  nuolaida: Nuolaida;
  nuolaidaData: Nuolaida[];
  show: boolean = false;
  displayedColumns = [
    'prcoentai',
    'kodas',
    'ArPanaudota'
  ];

  constructor(private nuolaidaService: NuolaidaService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAndRefreshData();
  }

  public openCreateNuolaidaDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {};

    const dialogRef = this.dialog.open(NuolaidaPopupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.nuolaida = data;
        this.nuolaida.pardavejasId = 1;
        this.nuolaidaService.postNuolaida(this.nuolaida).subscribe((data) => {
          this.getAndRefreshData();
          this.snackBar.open('Nuolaida sukurta', 'Gerai', { duration: 3000 });
        });
      }
    });
  }

  openEditNuolaidaDialog(nuolaida: Nuolaida) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      procentai: nuolaida.procentai,
      kodas: nuolaida.kodas
    };

    const dialogRef = this.dialog.open(NuolaidaPopupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        const updateObj = {
          procentai: data.procentai,
          kodas: data.kodas,
          pardavejasId: nuolaida.pardavejasId,
          id: nuolaida.id,
          arPanaudota: nuolaida.arPanaudota
        };

        this.nuolaidaService.putNuolaida(nuolaida.id, updateObj).subscribe(data => {
          this.getAndRefreshData();
          this.snackBar.open('Nuolaidos informacija atnaujinta', 'Gerai', { duration: 3000 });
        });
      }
    });
  }

  openDeleteNuolaidaDialog(nuolaida: Nuolaida) {
    const dialogRef = this.dialog.open(NuolaidaDeleteMessageComponent, { data: 'nuolaidų' });
    dialogRef.afterClosed().subscribe(response => {
      if (response == 'true') {
        this.nuolaidaService.deleteNuolaida(nuolaida.id).subscribe(useless => {
          this.getAndRefreshData();
          this.snackBar.open('Nuolaida ištrinta', 'Gerai', { duration: 3000 });
        });
      }
    });
  }

  getAndRefreshData() {
    this.nuolaidaService.GetAllNuolaidos().subscribe(response => {
      this.nuolaidaData = response;
    });
  }

}
