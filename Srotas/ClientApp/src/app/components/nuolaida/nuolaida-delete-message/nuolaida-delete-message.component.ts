import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-nuolaida-delete-message',
  templateUrl: './nuolaida-delete-message.component.html',
  styleUrls: ['./nuolaida-delete-message.component.css']
})
export class NuolaidaDeleteMessageComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) { }
}
