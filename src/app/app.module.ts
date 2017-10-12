import { ApartmentsService } from './apartments.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ApartmentsCreateComponent } from './apartments-create/apartments-create.component';
import { ApartmentsShowComponent } from './apartments-show/apartments-show.component';
import { ApartmentsEditComponent } from './apartments-edit/apartments-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';




const appRoutes: Routes = [
  { path: 'apartments', component: ApartmentsComponent },
  { path: 'apartments/create', component: ApartmentsCreateComponent},
  { path: 'apartments/show/:id', component: ApartmentsShowComponent},
  { path: 'apartments/:id/edit/:token', component: ApartmentsEditComponent},
  { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ApartmentsComponent,
    ApartmentsShowComponent,
    ApartmentsEditComponent,
    NotFoundComponent,
    ApartmentsCreateComponent,
  ],
  imports: [
  
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes
    ),
   
  ],
  providers: [
    ApartmentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule);