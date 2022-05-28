import { Speaker } from './../models/Speaker';
import { PavaruDeze } from './../models/PavaruDeze';
import { Engine } from './../models/Engine';
import { Wheels } from './../models/Wheels';
import { Injectable } from '@angular/core';
import { Car } from '../models/Car';
import { Hood } from '../models/Hood';
import { Door } from '../models/Door';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  readonly strCars = 'cars';
  readonly strWheels = 'wheels';
  readonly strEngines = 'engines';
  readonly strGearboxes = 'gearboxes';
  readonly strHoods = 'hoods';
  readonly strDoors = 'doors';
  readonly strSpeakers = 'speakers';
  readonly strTotal = 'total';
  readonly strDiscount = 'discount';

  cars: Car[];
  wheels: Wheels[];
  engines: Engine[];
  gearboxes: PavaruDeze[];
  speakers: Speaker[];
  hoods: Hood[];
  doors: Door[];
  total: number = 0;
  discountPercent: number = 0;

  constructor() {
    this.initCars();
    this.initWheels();
    this.initEngines();
    this.initGearboxes();
    this.initSpeakers();
    this.initHoods();
    this.initDoors();
    this.initTotal();
    this.initDiscount();
  }

  getCars(){
    return this.cars;
  }

  getWheels(){
    return this.wheels;
  }

  getEngines(){
    return this.engines;
  }

  getGearboxes(){
    return this.gearboxes;
  }

  getSpeakers(){
    return this.speakers;
  }

  getHoods(){
    return this.hoods;
  }

  getDoors(){
    return this.doors;
  }

  empty(){
    this.cars = [];
    localStorage.setItem(this.strCars, JSON.stringify(this.cars));

    this.wheels = [];
    localStorage.setItem(this.strWheels, JSON.stringify(this.wheels));

    this.engines = [];
    localStorage.setItem(this.strEngines, JSON.stringify(this.engines));

    this.gearboxes = [];
    localStorage.setItem(this.strGearboxes, JSON.stringify(this.gearboxes));
    
    this.speakers = [];
    localStorage.setItem(this.strSpeakers, JSON.stringify(this.speakers));

    this.hoods = [];
    localStorage.setItem(this.strHoods, JSON.stringify(this.hoods));

    this.doors = [];
    localStorage.setItem(this.strDoors, JSON.stringify(this.doors));

    this.total = 0;
    localStorage.setItem(this.strTotal, JSON.stringify(this.total));

    this.discountPercent = 0;
    localStorage.setItem(this.strDiscount, JSON.stringify(this.discountPercent));
  }

  private initCars(){
    if(localStorage.getItem(this.strCars) != null){
      this.cars = JSON.parse(localStorage.getItem(this.strCars) || '{}');
    }else{
      this.cars = [];
    }
  }

  private initWheels(){
    if(localStorage.getItem(this.strWheels) != null){
      this.wheels = JSON.parse(localStorage.getItem(this.strWheels) || '{}');
    }else{
      this.wheels = [];
    }
  }

  private initEngines(){
    if(localStorage.getItem(this.strEngines) != null){
      this.engines = JSON.parse(localStorage.getItem(this.strEngines) || '{}');
    }else{
      this.engines = [];
    }
  }

  private initGearboxes(){
    if(localStorage.getItem(this.strGearboxes) != null){
      this.gearboxes = JSON.parse(localStorage.getItem(this.strGearboxes) || '{}');
    }else{
      this.gearboxes = [];
    }
  }

  private initSpeakers(){
    if(localStorage.getItem(this.strSpeakers) != null){
      this.speakers = JSON.parse(localStorage.getItem(this.strSpeakers) || '{}');
    }else{
      this.speakers = [];
    }
  }

  private initHoods(){
    if(localStorage.getItem(this.strHoods) != null){
      this.hoods = JSON.parse(localStorage.getItem(this.strHoods) || '{}');
    }else{
      this.hoods = [];
    }
  }

  private initDoors(){
    if(localStorage.getItem(this.strDoors) != null){
      this.doors = JSON.parse(localStorage.getItem(this.strDoors) || '{}');
    }else{
      this.doors = [];
    }
  }

  private initTotal(){
    if(localStorage.getItem(this.strTotal) != null){
      this.total = JSON.parse(localStorage.getItem(this.strTotal) || '{}');
    }
  }

  private initDiscount(){
    if(localStorage.getItem(this.strDiscount) != null){
      this.discountPercent = JSON.parse(localStorage.getItem(this.strDiscount) || '{}');
    }
  }

  addCar(car: Car): boolean{
    const index = this.cars.indexOf(car, 0);
    if(index == -1){
      this.cars.push(car);
      this.total += car.kaina;
      localStorage.setItem(this.strCars, JSON.stringify(this.cars));
      localStorage.setItem(this.strTotal, JSON.stringify(this.total));
      return true;
    }
    return false;
  }

  addWheels(wheels: Wheels){
    const index = this.wheels.indexOf(wheels, 0);
    if(index == -1){
      this.wheels.push(wheels);
      this.total += wheels.kaina;
      localStorage.setItem(this.strWheels, JSON.stringify(this.wheels));
      localStorage.setItem(this.strTotal, JSON.stringify(this.total));
    }
  }

  addEngine(engine: Engine){
    const index = this.engines.indexOf(engine, 0);
    if(index == -1){
      this.engines.push(engine);
      this.total += engine.kaina;
      localStorage.setItem(this.strEngines, JSON.stringify(this.engines));
      localStorage.setItem(this.strTotal, JSON.stringify(this.total));
    }
  }

  addGearbox(gearbox: PavaruDeze){
    const index = this.gearboxes.indexOf(gearbox, 0);
    if(index == -1){
      this.gearboxes.push(gearbox);
      this.total += gearbox.kaina;
      localStorage.setItem(this.strGearboxes, JSON.stringify(this.gearboxes));
      localStorage.setItem(this.strTotal, JSON.stringify(this.total));
    }
  }

  addSpeakers(speakers: Speaker){
    const index = this.speakers.indexOf(speakers, 0);
    if(index == -1){
      this.speakers.push(speakers);
      this.total += speakers.kaina;
      localStorage.setItem(this.strSpeakers, JSON.stringify(this.speakers));
      localStorage.setItem(this.strTotal, JSON.stringify(this.total));
    }
  }

  addHood(hood: Hood){
    const index = this.hoods.indexOf(hood, 0);
    if(index == -1){
      this.hoods.push(hood);
      this.total += hood.kaina;
      localStorage.setItem(this.strHoods, JSON.stringify(this.hoods));
      localStorage.setItem(this.strTotal, JSON.stringify(this.total));
    }
  }

  addDoors(doors: Door){
    const index = this.doors.indexOf(doors, 0);
    if(index == -1){
      this.doors.push(doors);
      this.total += doors.kaina;
      localStorage.setItem(this.strDoors, JSON.stringify(this.doors));
      localStorage.setItem(this.strTotal, JSON.stringify(this.total));
    }
  }

  removeCar(car: Car){
    const index = this.cars.indexOf(car, 0);
    if(index > -1){
      this.cars.splice(index, 1);
      this.total -= car.kaina;
      localStorage.setItem(this.strCars, JSON.stringify(this.cars));
      localStorage.setItem(this.strTotal, JSON.stringify(this.total));
    }
  }

  removeWheels(wheels: Wheels){
    const index = this.wheels.indexOf(wheels, 0);
    if(index > -1){
      this.wheels.splice(index, 1);
      this.total -= wheels.kaina;
      localStorage.setItem(this.strWheels, JSON.stringify(this.wheels));
      localStorage.setItem(this.strTotal, JSON.stringify(this.total));
    }
  }

  removeEngine(engine: Engine){
    const index = this.engines.indexOf(engine, 0);
    if(index > -1){
      this.engines.splice(index, 1);
      this.total -= engine.kaina;
      localStorage.setItem(this.strEngines, JSON.stringify(this.engines));
      localStorage.setItem(this.strTotal, JSON.stringify(this.total));
    }
  }

  removeGearbox(gearbox: PavaruDeze){
    const index = this.gearboxes.indexOf(gearbox, 0);
    if(index > -1){
      this.gearboxes.splice(index, 1);
      this.total -= gearbox.kaina;
      localStorage.setItem(this.strGearboxes, JSON.stringify(this.gearboxes));
      localStorage.setItem(this.strTotal, JSON.stringify(this.total));
    }
  }

  removeSpeakers(speakers: Speaker){
    const index = this.speakers.indexOf(speakers, 0);
    if(index > -1){
      this.speakers.splice(index, 1);
      this.total -= speakers.kaina;
      localStorage.setItem(this.strSpeakers, JSON.stringify(this.speakers));
      localStorage.setItem(this.strTotal, JSON.stringify(this.total));
    }
  }

  removeHood(hood: Hood){
    const index = this.hoods.indexOf(hood, 0);
    if(index > -1){
      this.hoods.splice(index, 1);
      this.total -= hood.kaina;
      localStorage.setItem(this.strHoods, JSON.stringify(this.hoods));
      localStorage.setItem(this.strTotal, JSON.stringify(this.total));
    }
  }

  removeDoors(doors: Door){
    const index = this.doors.indexOf(doors, 0);
    if(index > -1){
      this.doors.splice(index, 1);
      this.total -= doors.kaina;
      localStorage.setItem(this.strDoors, JSON.stringify(this.doors));
      localStorage.setItem(this.strTotal, JSON.stringify(this.total));
    }
  }

  getTotal(){
    return this.total;
  }

  setDiscount(percent: number){
    this.discountPercent = percent;
    localStorage.setItem(this.strDiscount, JSON.stringify(this.discountPercent));
  }

  getTotalDiscounted(){
    var cut = this.total / 100 * this.discountPercent;
    return this.total - cut;
  }
}
