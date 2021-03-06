import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Car } from 'src/app/models/Car';

@Component({
  selector: 'app-car-popup',
  templateUrl: './car-popup.component.html',
  styleUrls: ['./car-popup.component.css']
})
export class CarPopupComponent implements OnInit {
  title: string;
  form: FormGroup;
  notCorrect: boolean;
  check = true;
  
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<CarPopupComponent>,
    @Inject(MAT_DIALOG_DATA)
      { gamintojas, modelis, rida, pagaminimoMetai, pavaruDezesTipas, kuroTipas, spalva, kaina,
      turiRatus, ratuDydis, ratuPlotis, turiVarikli, variklioTuris, turiPavaruDeze, turiKoloneles,
      koloneliuSkersmuo, turiKapota, turiDuris }: Car) 
      { 
        this.form = this.fb.group({
          gamintojas: [gamintojas, Validators.required],
          modelis: [modelis, Validators.required],
          rida: [rida, Validators.required],
          pagaminimoMetai: [pagaminimoMetai, Validators.required],
          pavaruDezesTipas: [pavaruDezesTipas, Validators.required],
          kuroTipas: [kuroTipas, Validators.required],
          spalva: [spalva, Validators.required],
          kaina: [kaina, Validators.pattern('^[\\d]+$')],
          turiRatus: [turiRatus, Validators.required],
          ratuDydis: [ratuDydis, Validators.required],
          ratuPlotis: [ratuPlotis, Validators.required],
          turiVarikli: [turiVarikli, Validators.required],
          variklioTuris: [variklioTuris, Validators.required],
          turiPavaruDeze: [turiPavaruDeze, Validators.required],
          turiKoloneles: [turiKoloneles, Validators.required],
          koloneliuSkersmuo: [koloneliuSkersmuo,  Validators.required],
          turiKapota: [turiKapota, Validators.required],
          turiDuris: [turiDuris, Validators.required]
        }) as FormGroup;
        this.notCorrect = false;

        if (gamintojas) {
          this.title = 'Redaguoti automobilio skelbim??';
        } else {
          this.title = 'Sukurti automobilio skelbim??';
          this.form.controls.turiRatus.setValue(false);
          this.form.controls.turiVarikli.setValue(false);
          this.form.controls.turiPavaruDeze.setValue(false);
          this.form.controls.turiKoloneles.setValue(false);
          this.form.controls.turiKapota.setValue(false);
          this.form.controls.turiDuris.setValue(false);
        }
      }

  ngOnInit(): void {}

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
