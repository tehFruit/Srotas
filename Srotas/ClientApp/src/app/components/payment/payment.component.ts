import { Speaker } from './../../models/Speaker';
import { PavaruDeze } from './../../models/PavaruDeze';
import { Engine } from './../../models/Engine';
import { DoorsService } from './../../services/doors.service';
import { HoodsService } from './../../services/hoods.service';
import { SpeakersService } from './../../services/speakers.service';
import { PavaruDezeService } from './../../services/pavaruDeze.service';
import { EnginesService } from './../../services/engines.service';
import { WheelsService } from './../../services/wheels.service';
import { BankService } from './../../services/bank.service';
import { OrderService } from './../../services/order.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NuolaidaService } from './../../services/nuolaidos.service';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Buyer } from 'src/app/models/Buyer';
import { Car } from 'src/app/models/Car';
import { Wheels } from 'src/app/models/Wheels';
import { Hood } from 'src/app/models/Hood';
import { Door } from 'src/app/models/Door';
import { CarsService } from 'src/app/services/cars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  buyer: Buyer;
  total: number = 0;
  code: string = '';
  paymentMethod = 'Balansu';
  
  constructor(private cart: CartService, 
    private userService: UserService, 
    private nuolaidaService: NuolaidaService, 
    private snackBar: MatSnackBar,
    private orderService: OrderService,
    private bank: BankService,
    private carService: CarsService,
    private wheelService: WheelsService,
    private engineService: EnginesService,
    private gearboxService: PavaruDezeService,
    private speakerService: SpeakersService,
    private hoodService: HoodsService,
    private doorService: DoorsService,
    private router: Router) { }

  ngOnInit(): void {
    this.getBuyer();
    this.total = this.cart.getTotalDiscounted();
  }

  getBuyer(){
    this.userService.getBuyer().subscribe(b => {
      this.buyer = b;
    });
  }

  applyCode(){
    this.nuolaidaService.getNuolaidaByCode(this.code).subscribe( code => {
      console.log(code);
      this.cart.setDiscount(code.procentai);
      this.total = this.cart.getTotalDiscounted();
      this.nuolaidaService.setUsed(code.id).subscribe(() => {});
    }, 
      notFound => {
        this.snackBar.open('Kodas negalioja', 'Gerai', {duration: 3000});
    });
  }

  pay(){
    if(this.paymentMethod == 'Balansu'){
      if(this.buyer.balansas >= this.total){
        this.processOrder();
        this.userService.UpdateBuyerBalance(this.buyer.balansas - this.total).subscribe(() => {});
        this.snackBar.open('Užsakymas apmokėtas', 'Gerai', {duration: 3000});
      }else{
        this.snackBar.open('Nėra pinigų', 'Gerai', {duration: 3000});
      }
    }else{
      if(this.bank.approved()){
        this.processOrder();
        this.snackBar.open('Užsakymas apmokėtas', 'Gerai', {duration: 3000});
      }
      else{
        this.snackBar.open('Bankas sakė ne', 'Gerai', {duration: 3000});
      }
    }
  }

  private processOrder(){
    var date = new Date();
    date.setDate(date.getDate() + 7);
    var order = {
      kodas: 'kodas123',
      pristatymoData: date.toJSON(),
      suma: this.total,
      pirkejasId: 1,
      ivertinimas: null
    };

    var orderId: number = 0;
    this.orderService.createOrder(order).subscribe(order => {
      orderId = order.id;
    });

    var cars: Car[] = this.cart.getCars();
    var wheels: Wheels[] = this.cart.getWheels();
    var engines: Engine[] = this.cart.getEngines();
    var gearboxes: PavaruDeze[] = this.cart.getGearboxes();
    var speakers: Speaker[] = this.cart.getSpeakers();
    var hoods: Hood[] = this.cart.getHoods();
    var doors: Door[] = this.cart.getDoors();

    for(var c of cars){
      c.uzsakymasId = orderId;
      c.parduotas = true;
      this.carService.putCar(c.id, c).subscribe(() =>{});
    }

    for(var w of wheels){
      w.uzsakymasId = orderId;
      w.parduotas = true;
      this.wheelService.putWheels(w.id, w).subscribe(() => {});
    }

    for(var e of engines){
      e.uzsakymasId = orderId;
      e.parduotas = true;
      this.engineService.putEngine(e.id, e).subscribe(() => {});
    }

    for(var g of gearboxes){
      g.uzsakymasId = orderId;
      g.parduotas = true;
      this.gearboxService.putPavaruDeze(g.id, g).subscribe(() => {});
    }

    for(var s of speakers){
      s.uzsakymasId = orderId;
      s.parduotas = true;
      this.speakerService.putSpeaker(s.id, s).subscribe(() => {});
    }

    for(var h of hoods){
      h.uzsakymasId = orderId;
      h.parduotas = true;
      this.hoodService.putHood(h.id, h).subscribe(() => {});
    }

    for(var d of doors){
      d.uzsakymasId = orderId;
      d.parduotas = true;
      this.doorService.putDoor(d.id, d).subscribe(() => {});
    }

    this.cart.empty();
  }

}
