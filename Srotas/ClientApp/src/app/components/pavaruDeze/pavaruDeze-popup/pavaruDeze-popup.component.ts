import { PavaruDeze } from '../../../models/PavaruDeze';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pavaruDeze-popup',
  templateUrl: './pavaruDeze-popup.component.html',
  styleUrls: ['./pavaruDeze-popup.component.css']
})
export class PavaruDezePopupComponent implements OnInit {
  title: string;
  form: FormGroup;
  notCorrect: boolean;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<PavaruDezePopupComponent>,
    @Inject(MAT_DIALOG_DATA)
    { kaina, pavadinimas, gamintojas, tipas }: PavaruDeze) {
    if (pavadinimas) {
      this.title = 'Redaguoti pavarų dėžės skelbimą';
    } else {
      this.title = 'Sukurti pavarų dėžės skelbimą';
    }
    this.form = this.fb.group({
      kaina: [kaina, Validators.pattern('^[\\d]+$')],
      pavadinimas: [pavadinimas, Validators.required],
      gamintojas: [gamintojas, Validators.required],
      tipas: [tipas]
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
