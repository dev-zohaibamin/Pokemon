import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  constructor(private snackBar: MatSnackBar) {}

  showMessage(message: string, isError: boolean) {
    let messageType = '';
    isError
      ? (messageType = 'warning-snackbar')
      : (messageType = 'success-snackbar');
    this.snackBar.open(`${message}`, '', {
      duration: 1500,
      verticalPosition: 'bottom',
      panelClass: [messageType, 'normal-snackbar'],
    });
  }
}
