import { Wheels } from './../../models/Wheels';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-wheels-popup',
  templateUrl: './wheels-popup.component.html',
  styleUrls: ['./wheels-popup.component.css']
})
export class WheelsPopupComponent implements OnInit {
  title: string;
  form: FormGroup;
  notCorrect: boolean;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<WheelsPopupComponent>,
    @Inject(MAT_DIALOG_DATA)
      { kaina, pavadinimas, dydis, plotis, gamintojas }: Wheels ) 
  { 
    if (pavadinimas) {
      this.title = 'Redaguoti ratų skelbimą';
    } else {
      this.title = 'Sukurti ratų skelbimą';
    }
    this.form = this.fb.group({
      kaina: [kaina, Validators.required],
      pavadinimas: [pavadinimas, Validators.required],
      dydis: [dydis, Validators.required],
      plotis: [plotis, Validators.required],
      gamintojas: [gamintojas, Validators.required],
    }) as FormGroup;
    this.notCorrect = false;
  }

  ngOnInit(): void {
  }

  save(){ 
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
    else{
      this.notCorrect = true;
    }
  }

  close(){
    this.dialogRef.close();
  }

}
