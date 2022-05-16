import { Door } from '../../../models/Door';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-door-popup',
  templateUrl: './door-popup.component.html',
  styleUrls: ['./door-popup.component.css']
})
export class DoorPopupComponent implements OnInit {
  title: string;
  form: FormGroup;
  notCorrect: boolean;


  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<DoorPopupComponent>,
    @Inject(MAT_DIALOG_DATA)
    { kaina, pavadinimas, gamintojas, modelis, pagaminimoMetai, spalva}: Door) {
    if (pavadinimas) {
      this.title = 'Redaguoti durų skelbimą';
    } else {
      this.title = 'Sukurti durų skelbimą';
    }
    this.form = this.fb.group({
      kaina: [kaina, Validators.pattern('^[\\d]+$')],
      pavadinimas: [pavadinimas, Validators.required],
      gamintojas: [gamintojas, Validators.required],
      modelis: [modelis, Validators.required],
      pagaminimoMetai: [pagaminimoMetai, Validators.required],
      spalva: [spalva, Validators.required],
    }) as FormGroup;
    this.notCorrect = false;
  }

  ngOnInit(): void {
  }

  save() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
    else {
      this.notCorrect = true;
    }
  }

  close() {
    this.dialogRef.close();
  }

}
