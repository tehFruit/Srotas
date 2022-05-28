import { ConfirmationService } from './../../../services/confirmation.service';
import { CartService } from './../../../services/cart.service';
import { DoorsService } from './../../../services/doors.service';
import { HoodsService } from './../../../services/hoods.service';
import { SpeakersService } from './../../../services/speakers.service';
import { EnginesService } from './../../../services/engines.service';
import { Wheels } from './../../../models/Wheels';
import { WheelsService } from './../../../services/wheels.service';
import { CarsService } from './../../../services/cars.service';
import { Component, OnInit, ɵgetComponentViewDefinitionFactory } from '@angular/core';
import { Car } from 'src/app/models/Car';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CarPopupComponent } from '../car-popup/car-popup.component';
import { CarDeleteMessageComponent } from '../car-delete-message/car-delete-message.component';
import { UserService } from 'src/app/services/user.service';
import { Buyer } from 'src/app/models/Buyer';
import { Seller } from 'src/app/models/Seller';
import { PavaruDezeService } from 'src/app/services/pavaruDeze.service';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {
  car: Car;
  carData: Car[];

  wheels : any[] = [];
  engines: any[] = [];
  gearboxes: any[] =[];
  speakers: any[] = [];
  hoods: any[] = [];
  doors: any[] = [];

  currentUser: string;
  buyer: Buyer;
  seller: Seller;

  suggestions: boolean = false;
  
  constructor(
    private carService: CarsService, 
    private dialog: MatDialog, 
    private snackBar: MatSnackBar, 
    private userService : UserService,
    private wheelsService: WheelsService,
    private engineService: EnginesService,
    private gearboxService: PavaruDezeService,
    private speakerService: SpeakersService,
    private hoodService: HoodsService,
    private doorService: DoorsService,
    private cart: CartService,
    private confirmService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.getCars();
    this.getUser();
  }

  switchSuggestions(){
    this.suggestions = !this.suggestions;
    if(this.suggestions){
      this.getWheelSuggestions();
      this.getEngineSuggestions();
      this.getGearboxSuggestions();
      this.getSpeakerSuggestions();
      this.getHoodSuggestions();
      this.getDoorSuggestions();
    }
  }

  addCarToCart(car: Car){
    if(this.cart.addCar(car) && this.isMissingParts(car)){
      this.confirmService.confirm('Ar norit automatiskai surinkt dalis?', () => this.missingPartsToCart(car));
    }
  }

  missingPartsToCart(car: Car){
    if(!car.turiRatus){
      this.wheelsService.getSpecWheels(car.ratuDydis, car.ratuPlotis).subscribe(found => {
        this.cart.addWheels(found);
      }, none => {});
    }

    if(!car.turiVarikli){
      this.engineService.getSpecEngine(car.gamintojas, car.variklioTuris, car.kuroTipas).subscribe(found => {
        this.cart.addEngine(found);
      });
    }

    if(!car.turiPavaruDeze){
      this.gearboxService.getSpecPavaruDeze(car.gamintojas, car.pavaruDezesTipas).subscribe(found => {
        this.cart.addGearbox(found);
      });
    }

    if(!car.turiKoloneles){
      this.speakerService.getSpecSpeaker(car.koloneliuSkersmuo).subscribe( found => {
        this.cart.addSpeakers(found);
      });
    }

    if(!car.turiKapota){
      this.hoodService.getSpecHood(car.gamintojas, car.modelis, car.pagaminimoMetai, car.spalva).subscribe(found => {
        this.cart.addHood(found);
      });
    }

    if(!car.turiDuris){
      this.doorService.getSpecDoor(car.gamintojas, car.modelis, car.pagaminimoMetai, car.spalva).subscribe(found => {
        this.cart.addDoors(found);
      });
    }
  }

  isMissingParts(car: Car): boolean{
    var missing = false;
    if(!car.turiRatus){
      missing = true;
    }
    if(!car.turiVarikli){
      missing = true;
    }
    if(!car.turiPavaruDeze){
      missing = true;
    }
    if(!car.turiKoloneles){
      missing = true;
    }
    if(!car.turiKapota){
      missing = true;
    }
    if(!car.turiDuris){
      missing = true;
    }

    return missing;
  }

  getSuggestions(){
    for(let i in this.carData){ //for loop with indexes. if we replace 'in' with 'of' it returns obj itself
      //Wheels
      this.wheelsService.getSpecWheels(this.carData[i].ratuDydis, this.carData[i].ratuPlotis).subscribe(w => {
        this.wheels.push({carIndex: i, suggestedWheels: w});
      });

      //Engines
      this.engineService.getSpecEngine(this.carData[i].gamintojas, this.carData[i].variklioTuris, this.carData[i].kuroTipas).subscribe(e => {
        this.engines.push({carIndex: i, suggestedEngine: e});
      });

      //Gearboxes
      this.gearboxService.getSpecPavaruDeze(this.carData[i].gamintojas, this.carData[i].pavaruDezesTipas).subscribe(g => {
        this.gearboxes.push({carIndex: i, suggestedGearbox: g});
      });

      //Speakers
      this.speakerService.getSpecSpeaker(this.carData[i].koloneliuSkersmuo).subscribe(s => {
        this.speakers.push({carIndex: i, suggestedSpeakers: s});
      });

      //Hoods
      this.hoodService.getSpecHood(this.carData[i].gamintojas, this.carData[i].modelis, this.carData[i].pagaminimoMetai, this.carData[i].spalva).subscribe(h => {
        this.hoods.push({carIndex: i, suggestedHood: h});
      });

      //Doors
      this.doorService.getSpecDoor(this.carData[i].gamintojas, this.carData[i].modelis, this.carData[i].pagaminimoMetai, this.carData[i].spalva).subscribe(d => {
        this.doors.push({carIndex: i, suggestedDoors: d});
      });
    }
  }

  getWheelSuggestions(){
    for(let i in this.carData){
      //Wheels
      this.wheelsService.getSpecWheels(this.carData[i].ratuDydis, this.carData[i].ratuPlotis).subscribe(w => {
        this.wheels.push({carIndex: i, suggestedWheels: w});
      });
    }
  }

  getEngineSuggestions(){
    for(let i in this.carData){
      //Engines
      this.engineService.getSpecEngine(this.carData[i].gamintojas, this.carData[i].variklioTuris, this.carData[i].kuroTipas).subscribe(e => {
        this.engines.push({carIndex: i, suggestedEngine: e});
      });
    }
  }

  getGearboxSuggestions(){
    for(let i in this.carData){
      //Gearboxes
      this.gearboxService.getSpecPavaruDeze(this.carData[i].gamintojas, this.carData[i].pavaruDezesTipas).subscribe(g => {
        this.gearboxes.push({carIndex: i, suggestedGearbox: g});
      });
    }
  }

  getSpeakerSuggestions(){
    for(let i in this.carData){
      //Speakers
      this.speakerService.getSpecSpeaker(this.carData[i].koloneliuSkersmuo).subscribe(s => {
        this.speakers.push({carIndex: i, suggestedSpeakers: s});
      });
    }
  }

  getHoodSuggestions(){
    for(let i in this.carData){
      //Hoods
      this.hoodService.getSpecHood(this.carData[i].gamintojas, this.carData[i].modelis, this.carData[i].pagaminimoMetai, this.carData[i].spalva).subscribe(h => {
        this.hoods.push({carIndex: i, suggestedHood: h});
      });

    }
  }

  getDoorSuggestions(){
    for(let i in this.carData){
      //Doors
      this.doorService.getSpecDoor(this.carData[i].gamintojas, this.carData[i].modelis, this.carData[i].pagaminimoMetai, this.carData[i].spalva).subscribe(d => {
        this.doors.push({carIndex: i, suggestedDoors: d});
      });
    }
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

  getCars(){
    this.carService.getAllCars().subscribe(cars => {
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
