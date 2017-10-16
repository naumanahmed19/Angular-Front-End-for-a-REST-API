import { SharedService } from './_services/shared.service';
import { MaterialModule } from './material.module';
import { FormDataService } from './_services/form-data.service';
import { ValidationService } from './_services/validation.service';
import { ApartmentsService } from './_services/apartments.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MAT_DATE_FORMATS, DateAdapter } from '@angular/material';
import {AppDateAdapter} from './_adapters/date.adapter';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DateTimePickerModule } from 'ng-pick-datetime';


import { AppComponent } from './app.component';
import { ApartmentsListComponent } from './_components/apartments/apartments-list/apartments-list.component';
import { ApartmentsAddEditComponent } from './_components/apartments/apartments-add-edit/apartments-add-edit.component';
import { ApartmentsShowComponent } from './_components/apartments/apartments-show/apartments-show.component';
import { NotFoundComponent } from './_components/not-found/not-found.component';



const appRoutes: Routes = [
  { path: '', component: ApartmentsListComponent },
  { path: 'apartments', component: ApartmentsListComponent },
  { path: 'apartments/create', component: ApartmentsAddEditComponent},
  { path: 'apartments/show/:id', component: ApartmentsShowComponent},
  { path: 'apartments/:id/edit/:token', component: ApartmentsAddEditComponent},
  { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];


// import { NativeDateAdapter } from "@angular/material";

// export class AppDateAdapter extends NativeDateAdapter {
  
//       format(date: Date, displayFormat: Object): string {
  
          
//               const day = date.getDate();
//               const month = date.getMonth() + 1;
//               const year = date.getFullYear();
//               return `${year}-${month}-${day}`;
          
//       }
//   }
  
export const APP_DATE_FORMATS =
{
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
    },
    display: {
        dateInput: 'input',
        monthYearLabel: { year: 'numeric', month: 'numeric' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};



  





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
    MaterialModule,
  
  ],
  providers: [
    ApartmentsService,
    ValidationService,
    FormDataService,
    SharedService,
    {
        provide: DateAdapter, useClass: AppDateAdapter
    },
    {
        provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

