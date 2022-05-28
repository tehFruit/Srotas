import { MatSnackBar } from '@angular/material/snack-bar';
import { NuolaidaService } from './../../services/nuolaidos.service';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Buyer } from 'src/app/models/Buyer';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  buyer: Buyer;
  total: number = 0;
  code: string = '';
  
  constructor(private cart: CartService, private userService: UserService, private nuolaidaService: NuolaidaService, private snackBar: MatSnackBar) { }

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

}
