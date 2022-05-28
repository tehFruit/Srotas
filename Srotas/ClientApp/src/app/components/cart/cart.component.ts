import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationService } from './../../services/confirmation.service';
import { PavaruDeze } from './../../models/PavaruDeze';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/Car';
import { Wheels } from 'src/app/models/Wheels';
import { Engine } from 'src/app/models/Engine';
import { Speaker } from 'src/app/models/Speaker';
import { Hood } from 'src/app/models/Hood';
import { Door } from 'src/app/models/Door';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cars: Car[];
  wheels: Wheels[];
  engines: Engine[];
  gearboxes: PavaruDeze[];
  speakers: Speaker[];
  hoods: Hood[];
  doors: Door[];

  total: number = 0;

  constructor(private cart: CartService, private confirmService: ConfirmationService, private snackBar: MatSnackBar, private router: Router) {
    this.getData();
  }

  getData(){
    this.cars = this.cart.getCars();
    this.wheels = this.cart.getWheels();
    this.engines = this.cart.getEngines();
    this.gearboxes = this.cart.getGearboxes();
    this.speakers = this.cart.getSpeakers();
    this.hoods = this.cart.getHoods();
    this.doors = this.cart.getDoors();
    this.total = this.cart.getTotalDiscounted();
  }

  ngOnInit(): void {
    this.print();
  }

  print(){
    console.log(this.cars);
    console.log(this.hoods);
    console.log(this.speakers);
  }

  removeCar(car: Car){
    this.confirmService.confirm('Ar norite pašalinti prekę iš krepšelio?', () => this.doRemoveCar(car));
  }

  private doRemoveCar(car: Car){
    this.cart.removeCar(car);
    this.cars = this.cart.getCars();
    this.total = this.cart.getTotalDiscounted();
    this.snackBar.open('Prekė pašalinta', 'Gerai', {duration: 3000});
  }

  removeWheels(w: Wheels){
    this.confirmService.confirm('Ar norite pašalinti prekę iš krepšelio?', () => this.doRemoveWheels(w));
  }

  private doRemoveWheels(w: Wheels){
    this.cart.removeWheels(w);
    this.wheels = this.cart.getWheels();
    this.total = this.cart.getTotalDiscounted();
    this.snackBar.open('Prekė pašalinta', 'Gerai', {duration: 3000});
  }

  removeEngine(e: Engine){
    this.confirmService.confirm('Ar norite pašalinti prekę iš krepšelio?', () => this.doRemoveEngine(e));
  }

  private doRemoveEngine(e: Engine){
    this.cart.removeEngine(e);
    this.engines = this.cart.getEngines();
    this.total = this.cart.getTotalDiscounted();
    this.snackBar.open('Prekė pašalinta', 'Gerai', {duration: 3000});
  }

  removeGearbox(g: PavaruDeze){
    this.confirmService.confirm('Ar norite pašalinti prekę iš krepšelio?', () => this.doRemoveGearbox(g));
  }

  private doRemoveGearbox(g: PavaruDeze){
    this.cart.removeGearbox(g);
    this.gearboxes = this.cart.getGearboxes();
    this.total = this.cart.getTotalDiscounted();
    this.snackBar.open('Prekė pašalinta', 'Gerai', {duration: 3000});
  }

  removeSpeakers(s: Speaker){
    this.confirmService.confirm('Ar norite pašalinti prekę iš krepšelio?', () => this.doRemoveSpeakers(s));
  }

  private doRemoveSpeakers(s: Speaker){
    this.cart.removeSpeakers(s);
    this.speakers = this.cart.getSpeakers();
    this.total = this.cart.getTotalDiscounted();
    this.snackBar.open('Prekė pašalinta', 'Gerai', {duration: 3000});
  }

  removeHood(h: Hood){
    this.confirmService.confirm('Ar norite pašalinti prekę iš krepšelio?', () => this.doRemoveHood(h));
  }

  private doRemoveHood(h: Hood){
    this.cart.removeHood(h);
    this.hoods = this.cart.getHoods();
    this.total = this.cart.getTotalDiscounted();
    this.snackBar.open('Prekė pašalinta', 'Gerai', {duration: 3000});
  }

  removeDoors(d: Door){
    this.confirmService.confirm('Ar norite pašalinti prekę iš krepšelio?', () => this.doRemoveDoors(d));
  }

  private doRemoveDoors(d: Door){
    this.cart.removeDoors(d);
    this.doors = this.cart.getDoors();
    this.total = this.cart.getTotalDiscounted();
    this.snackBar.open('Prekė pašalinta', 'Gerai', {duration: 3000});
  }

  navigateToPayment(){
    this.router.navigate(['/Moketi']);
  }

}
