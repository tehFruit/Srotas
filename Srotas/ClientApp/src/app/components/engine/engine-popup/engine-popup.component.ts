import { Engine } from './../../../models/Engine';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-engine-popup',
  templateUrl: './engine-popup.component.html',
  styleUrls: ['./engine-popup.component.css']
})
export class EnginePopupComponent implements OnInit {
  title: string;
  form: FormGroup;
  notCorrect: boolean;


  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<EnginePopupComponent>,
    @Inject(MAT_DIALOG_DATA)
    { kaina, pavadinimas, gamintojas, turis, kuroTipas }: Engine) {
    if (pavadinimas) {
      this.title = 'Redaguoti variklio skelbimą';
    } else {
      this.title = 'Sukurti variklio skelbimą';
    }
    this.form = this.fb.group({
      kaina: [kaina, Validators.pattern('^[\\d]+$')],
      pavadinimas: [pavadinimas, Validators.required],
      gamintojas: [gamintojas, Validators.required],
      turis: [turis, Validators.required],
      kuroTipas: [kuroTipas, Validators.required],
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
