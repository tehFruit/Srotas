import { CarsService } from './../../../services/cars.service';
import { Component, OnInit, ɵgetComponentViewDefinitionFactory } from '@angular/core';
import { Car } from 'src/app/models/Car';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CarPopupComponent } from '../car-popup/car-popup.component';
import { CarDeleteMessageComponent } from '../car-delete-message/car-delete-message.component';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {
  car: Car;
  carData: Car[];
  
  constructor(private carService: CarsService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this.carService.getAllCars().subscribe(cars => {
      console.log(cars);
      this.carData = cars;
    });
  }

  public openCreateCarDialog(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {};

    const dialogRef = this.dialog.open(CarPopupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      if(data){
        this.car = data;

        this.car.pardavejasId = 1;
        this.car.uzsakymasId = null;
        
        console.log(this.car);
        this.carService.postCar(this.car).subscribe((data) => {
          this.getCars();
          this.snackBar.open('Automobilio skelbimas sukurtas', 'Gerai', {duration: 3000});
        });
      }
    });
  }

  openEditCarDialog(car: Car){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      gamintojas : car.gamintojas,
      modelis : car.modelis,
      rida : car.rida,
      pagaminimoMetai : car.pagaminimoMetai,
      pavaruDezesTipas : car.pavaruDezesTipas,
      kuroTipas : car.kuroTipas,
      spalva: car.spalva,
      kaina : car.kaina,
      turiRatus : car.turiRatus,
      ratuDydis : car.ratuDydis,
      ratuPlotis : car.ratuPlotis,
      turiVarikli : car.turiVarikli,
      variklioTuris : car.variklioTuris,
      turiPavaruDeze : car.turiPavaruDeze,
      turiKoloneles : car.turiKoloneles,
      koloneliuSkersmuo : car.koloneliuSkersmuo,
      turiKapota : car.turiKapota,
      turiDuris : car.turiDuris,
      parduotas : car.parduotas
    };

    const dialogRef = this.dialog.open(CarPopupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      if(data){
        const updateObj = {
          gamintojas : data.gamintojas,
          modelis : data.modelis,
          rida : data.rida,
          pagaminimoMetai : data.pagaminimoMetai,
          pavaruDezesTipas : data.pavaruDezesTipas,
          kuroTipas : data.kuroTipas,
          spalva: data.spalva,
          kaina : data.kaina,
          turiRatus : data.turiRatus,
          ratuDydis : data.ratuDydis,
          ratuPlotis : data.ratuPlotis,
          turiVarikli : data.turiVarikli,
          variklioTuris : data.variklioTuris,
          turiPavaruDeze : data.turiPavaruDeze,
          turiKoloneles : data.turiKoloneles,
          koloneliuSkersmuo : data.koloneliuSkersmuo,
          turiKapota : data.turiKapota,
          turiDuris : data.turiDuris,
          parduotas : data.parduotas,
          id: car.id,
          pardavejasId: car.pardavejasId, 
          uzsakymasId: car.uzsakymasId
        };

        this.carService.putCar(car.id, updateObj).subscribe(data => {
          this.getCars();
          this.snackBar.open('Automobilio skelbimas atnaujintas', 'Gerai', {duration: 3000});
        });
      }
    });
  }

  openDeleteCarDialog(car: Car){
    const dialogRef = this.dialog.open(CarDeleteMessageComponent, {data: 'automobilių'});
    dialogRef.afterClosed().subscribe(response => {
      if(response =='true'){
        this.carService.deleteCar(car.id).subscribe(useless =>{
          this.getCars();
          this.snackBar.open('Automobilio skelbimas ištrintas', 'Gerai', {duration: 3000});
        });
      }
    });
  }

}
