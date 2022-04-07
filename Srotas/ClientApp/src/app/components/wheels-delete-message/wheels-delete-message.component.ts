import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-wheels-delete-message',
  templateUrl: './wheels-delete-message.component.html',
  styleUrls: ['./wheels-delete-message.component.css']
})
export class WheelsDeleteMessageComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) { }
}
