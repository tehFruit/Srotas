import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-engine-delete-message',
  templateUrl: './engine-delete-message.component.html',
  styleUrls: ['./engine-delete-message.component.css']
})
export class EngineDeleteMessageComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) { }
}
