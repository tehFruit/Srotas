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

  cars: Car[];
  wheels: Wheels[];
  engines: Engine[];
  gearboxes: PavaruDeze[];
  speakers: Speaker[];
  hoods: Hood[];
  doors: Door[];
  total: number = 0;

  constructor() {
    this.initCars();
    this.initWheels();
    this.initEngines();
    this.initGearboxes();
    this.initSpeakers();
    this.initHoods();
    this.initDoors();
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
  }

  initCars(){
    if(localStorage.getItem(this.strCars) != null){
      this.cars = JSON.parse(localStorage.getItem(this.strCars) || '{}');
    }else{
      this.cars = [];
    }
  }

  initWheels(){
    if(localStorage.getItem(this.strWheels) != null){
      this.wheels = JSON.parse(localStorage.getItem(this.strWheels) || '{}');
    }else{
      this.wheels = [];
    }
  }

  initEngines(){
    if(localStorage.getItem(this.strEngines) != null){
      this.engines = JSON.parse(localStorage.getItem(this.strEngines) || '{}');
    }else{
      this.engines = [];
    }
  }

  initGearboxes(){
    if(localStorage.getItem(this.strGearboxes) != null){
      this.gearboxes = JSON.parse(localStorage.getItem(this.strGearboxes) || '{}');
    }else{
      this.gearboxes = [];
    }
  }

  initSpeakers(){
    if(localStorage.getItem(this.strSpeakers) != null){
      this.speakers = JSON.parse(localStorage.getItem(this.strSpeakers) || '{}');
    }else{
      this.speakers = [];
    }
  }

  initHoods(){
    if(localStorage.getItem(this.strHoods) != null){
      this.hoods = JSON.parse(localStorage.getItem(this.strHoods) || '{}');
    }else{
      this.hoods = [];
    }
  }

  initDoors(){
    if(localStorage.getItem(this.strDoors) != null){
      this.doors = JSON.parse(localStorage.getItem(this.strDoors) || '{}');
    }else{
      this.doors = [];
    }
  }

  addCar(car: Car){
    const index = this.cars.indexOf(car, 0);
    if(index == -1){
      this.cars.push(car);
      localStorage.setItem(this.strCars, JSON.stringify(this.cars));
    }
  }

  addWheels(wheels: Wheels){
    const index = this.wheels.indexOf(wheels, 0);
    if(index == -1){
      this.wheels.push(wheels);
      localStorage.setItem(this.strWheels, JSON.stringify(this.wheels));
    }
  }

  addEngine(engine: Engine){
    const index = this.engines.indexOf(engine, 0);
    if(index == -1){
      this.engines.push(engine);
      localStorage.setItem(this.strEngines, JSON.stringify(this.engines));
    }
  }

  addGearbox(gearbox: PavaruDeze){
    const index = this.gearboxes.indexOf(gearbox, 0);
    if(index == -1){
      this.gearboxes.push(gearbox);
      localStorage.setItem(this.strGearboxes, JSON.stringify(this.gearboxes));
    }
  }

  addSpeakers(speakers: Speaker){
    const index = this.speakers.indexOf(speakers, 0);
    if(index == -1){
      this.speakers.push(speakers);
      localStorage.setItem(this.strSpeakers, JSON.stringify(this.speakers));
    }
  }

  addHood(hood: Hood){
    const index = this.hoods.indexOf(hood, 0);
    if(index == -1){
      this.hoods.push(hood);
      localStorage.setItem(this.strHoods, JSON.stringify(this.hoods));
    }
  }

  addDoors(doors: Door){
    const index = this.doors.indexOf(doors, 0);
    if(index == -1){
      this.doors.push(doors);
      localStorage.setItem(this.strDoors, JSON.stringify(this.doors));
    }
  }

  removeCar(car: Car){
    const index = this.cars.indexOf(car, 0);
    if(index > -1){
      this.cars.splice(index, 1);
      localStorage.setItem(this.strCars, JSON.stringify(this.cars));
    }
  }

  removeWheels(wheels: Wheels){
    const index = this.wheels.indexOf(wheels, 0);
    if(index > -1){
      this.wheels.splice(index, 1);
      localStorage.setItem(this.strWheels, JSON.stringify(this.wheels));
    }
  }

  removeEngine(engine: Engine){
    const index = this.engines.indexOf(engine, 0);
    if(index > -1){
      this.engines.splice(index, 1);
      localStorage.setItem(this.strEngines, JSON.stringify(this.engines));
    }
  }

  removeGearbox(gearbox: PavaruDeze){
    const index = this.gearboxes.indexOf(gearbox, 0);
    if(index > -1){
      this.gearboxes.splice(index, 1);
      localStorage.setItem(this.strGearboxes, JSON.stringify(this.gearboxes));
    }
  }

  removeSpeakers(speakers: Speaker){
    const index = this.speakers.indexOf(speakers, 0);
    if(index > -1){
      this.speakers.splice(index, 1);
      localStorage.setItem(this.strSpeakers, JSON.stringify(this.speakers));
    }
  }

  removeHood(hood: Hood){
    const index = this.hoods.indexOf(hood, 0);
    if(index > -1){
      this.hoods.splice(index, 1);
      localStorage.setItem(this.strHoods, JSON.stringify(this.hoods));
    }
  }

  removeDoors(doors: Door){
    const index = this.doors.indexOf(doors, 0);
    if(index > -1){
      this.doors.splice(index, 1);
      localStorage.setItem(this.strDoors, JSON.stringify(this.doors));
    }
  }
}
