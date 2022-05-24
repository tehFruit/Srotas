import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-car-delete-message',
  templateUrl: './car-delete-message.component.html',
  styleUrls: ['./car-delete-message.component.css']
})
export class CarDeleteMessageComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) { }
}
