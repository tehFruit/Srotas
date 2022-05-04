import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-speakers-delete-message',
  templateUrl: './speakers-delete-message.component.html',
  styleUrls: ['./speakers-delete-message.component.css']
})
export class SpeakersDeleteMessageComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) { }
}
