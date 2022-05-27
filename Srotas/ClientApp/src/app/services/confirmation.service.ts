import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from '../components/confirmation/confirmation.component';
import { filter, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

  constructor(
    private matDialog: MatDialog
  ) { }

  public confirm(message: string, acceptCallback: () => void): void {
    const dialogRef = this.matDialog.open(ConfirmationComponent, { data: { message } });

    dialogRef.afterClosed().pipe(
      filter(result => !!result.accepted),
      tap(acceptCallback)
    ).subscribe();
  }
}
