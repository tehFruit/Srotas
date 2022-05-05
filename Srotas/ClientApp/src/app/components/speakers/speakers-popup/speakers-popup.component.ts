import { Speaker } from './../../../models/Speaker';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-speakers-popup',
  templateUrl: './speakers-popup.component.html',
  styleUrls: ['./speakers-popup.component.css']
})
export class SpeakersPopupComponent implements OnInit {
  title: string;
  form: FormGroup;
  notCorrect: boolean;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<SpeakersPopupComponent>,
    @Inject(MAT_DIALOG_DATA)
    { kaina, pavadinimas, gamintojas, skersmuo }: Speaker) {
    if (pavadinimas) {
      this.title = 'Redaguoti variklio skelbimą';
    } else {
      this.title = 'Sukurti variklio skelbimą';
    }
    this.form = this.fb.group({
      kaina: [kaina, Validators.pattern('^[\\d]+$')],
      pavadinimas: [pavadinimas, Validators.required],
      gamintojas: [gamintojas, Validators.required],
      skersmuo: [skersmuo, Validators.required],
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
