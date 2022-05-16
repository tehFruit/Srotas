import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-door-delete-message',
  templateUrl: './door-delete-message.component.html',
  styleUrls: ['./door-delete-message.component.css']
})
export class DoorDeleteMessageComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) { }

}
