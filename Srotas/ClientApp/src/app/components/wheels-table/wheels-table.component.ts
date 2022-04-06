import { WheelsService } from './../../services/wheels.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Wheels } from './../../models/Wheels';

@Component({
  selector: 'app-wheels-table',
  templateUrl: './wheels-table.component.html',
  styleUrls: ['./wheels-table.component.css']
})
export class WheelsTableComponent implements OnInit {
  wheelsData : Observable<Wheels[]>;
  displayedColumns =[
    'kaina',
    'pavadinimas',
    'dydis',
    'plotis',
    'gamintojas',
    'veiksmai'
  ];

  constructor(private wheelsService: WheelsService) { }

  ngOnInit(): void {
    this.wheelsData = this.wheelsService.getAllWheels();
    console.log(this.wheelsData);
  }

  openCreateWheelsDialog(){

  }

  openEditWheelsDialog(wheels: Wheels){

  }

  openDeleteWheelsDialog(wheels: Wheels){

  }

}
