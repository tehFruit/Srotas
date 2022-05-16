import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-hood-delete-message',
  templateUrl: './hood-delete-message.component.html',
  styleUrls: ['./hood-delete-message.component.css']
})
export class HoodDeleteMessageComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) { }

}
