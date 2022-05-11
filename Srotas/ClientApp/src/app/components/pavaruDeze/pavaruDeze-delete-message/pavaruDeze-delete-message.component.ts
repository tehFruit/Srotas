import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-pavaruDeze-delete-message',
  templateUrl: './pavaruDeze-delete-message.component.html',
  styleUrls: ['./pavaruDeze-delete-message.component.css']
})
export class PavaruDezeDeleteMessageComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) { }
}
