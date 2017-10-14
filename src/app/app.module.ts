import { FormDataService } from './_services/form-data.service';
import { ValidationService } from './_services/validation.service';
import { ApartmentsService } from './_services/apartments.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DateTimePickerModule } from 'ng-pick-datetime';


import { AppComponent } from './app.component';
import { ApartmentsListComponent } from './_components/apartments/apartments-list/apartments-list.component';
import { ApartmentsAddEditComponent } from './_components/apartments/apartments-add-edit/apartments-add-edit.component';
import { ApartmentsShowComponent } from './_components/apartments/apartments-show/apartments-show.component';
import { NotFoundComponent } from './_components/not-found/not-found.component';


const appRoutes: Routes = [
  { path: 'apartments', component: ApartmentsListComponent },
  { path: 'apartments/create', component: ApartmentsAddEditComponent},
  { path: 'apartments/show/:id', component: ApartmentsShowComponent},
  { path: 'apartments/:id/edit/:token', component: ApartmentsAddEditComponent},
  { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    ApartmentsListComponent,
    ApartmentsShowComponent,
    ApartmentsAddEditComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserAnimationsModule,
    DateTimePickerModule,
    NgxPaginationModule
  ],
  providers: [
    ApartmentsService,
    ValidationService,
    FormDataService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);