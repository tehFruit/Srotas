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

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<WheelsPopupComponent>,
    @Inject(MAT_DIALOG_DATA)
      { kaina, pavadinimas, dydis, plotis, gamintojas }: Wheels ) 
  { 
    if (pavadinimas) {
      this.title = 'Redaguoti ratus';
    } else {
      this.title = 'Sukurti ratus';
    }
    this.form = this.fb.group({
      kaina: [kaina, Validators.required],
      pavadinimas: [pavadinimas, Validators.required],
      dydis: [dydis, Validators.required],
      plotis: [plotis, Validators.required],
      gamintojas: [gamintojas, Validators.required],
    }) as FormGroup;
  }

  ngOnInit(): void {
  }

  save(){ 
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
    else{
      console.log('Fuck');
    }
  }

  close(){
    this.dialogRef.close();
  }

}
