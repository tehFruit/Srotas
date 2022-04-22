import { WheelsDeleteMessageComponent } from './../wheels-delete-message/wheels-delete-message.component';
import { WheelsPopupComponent } from './../wheels-popup/wheels-popup.component';
import { WheelsService } from './../../services/wheels.service';
import { Component, OnInit } from '@angular/core';
import { Wheels } from './../../models/Wheels';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-wheels-table',
  templateUrl: './wheels-table.component.html',
  styleUrls: ['./wheels-table.component.css']
})
export class WheelsTableComponent implements OnInit {
  wheels: Wheels;
  wheelsData: Wheels[];
  show: boolean = false;
  displayedColumns =[
    'kaina',
    'pavadinimas',
    'dydis',
    'plotis',
    'gamintojas',
    'veiksmai'
  ];

  constructor(private wheelsService: WheelsService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAndRefreshData();
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
        this.wheelsService.postWheels(this.wheels).subscribe((data) => {
          this.getAndRefreshData();
          this.snackBar.open('Ratų skelbimas sukurtas', 'Gerai', {duration: 3000});
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
        };

        this.wheelsService.putWheels(wheels.id, data).subscribe(data => {
          this.getAndRefreshData();
          this.snackBar.open('Ratų skelbimas atnaujintas', 'Gerai', {duration: 3000});
        });
      }
    });
  }

  openDeleteWheelsDialog(wheels: Wheels){
    const dialogRef = this.dialog.open(WheelsDeleteMessageComponent, {data: 'ratų'});
    dialogRef.afterClosed().subscribe(response => {
      if(response =='true'){
        this.wheelsService.deleteWheels(wheels.id).subscribe(useless =>{
          this.getAndRefreshData();
          this.snackBar.open('Ratų skelbimas ištrintas', 'Gerai', {duration: 3000});
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
