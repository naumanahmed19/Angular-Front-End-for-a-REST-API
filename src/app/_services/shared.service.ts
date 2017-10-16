import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';
@Injectable()
export class SharedService {

  constructor(
    public snackBar: MatSnackBar

  ) { }

  openSnackBar(message: string, action: string='') {
    this.snackBar.open(message, action, {
      duration: 2000, 
      verticalPosition: 'top' ,
      horizontalPosition: 'right'
  
    });
  }

}
