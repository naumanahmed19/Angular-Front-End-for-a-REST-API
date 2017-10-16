import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatTableModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatDatepickerModule,
  MatSnackBarModule,
  MatListModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatListModule
  ]
})
export class MaterialModule {}

