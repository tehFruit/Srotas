import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  public message: string;

  constructor(
    private dialogRef: MatDialogRef<ConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { message: string }
  ) { }

  ngOnInit(): void {
    this.initializeConfirmationMessage();
  }

  private initializeConfirmationMessage(): void {
    this.message = this.data.message;
  }

  public accept(): void {
    this.dialogRef.close({ accepted: true });
  }

  public close(): void {
    this.dialogRef.close({ accepted: false });
  }

}
