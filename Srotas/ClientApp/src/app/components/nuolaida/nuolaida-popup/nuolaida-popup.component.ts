import { Nuolaida } from '../../../models/Nuolaida';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-nuolaida-popup',
  templateUrl: './nuolaida-popup.component.html',
  styleUrls: ['./nuolaida-popup.component.css']
})
export class NuolaidaPopupComponent implements OnInit {
  title: string;
  form: FormGroup;
  notCorrect: boolean;


  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<NuolaidaPopupComponent>,
    @Inject(MAT_DIALOG_DATA)
    { procentai, kodas }: Nuolaida) {
    if (kodas) {
      this.title = 'Redaguoti nuolaidą';
    } else {
      this.title = 'Sukurti nuolaią';
    }
    this.form = this.fb.group({
      procentai: [procentai, Validators.pattern('^[\\d]+$')],
      kodas: [kodas, Validators.required]
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
