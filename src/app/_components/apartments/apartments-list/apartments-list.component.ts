import { Component, OnInit } from '@angular/core';

import { ApartmentsService } from './../../../_services/apartments.service';
import { Apartment } from './../../../_interfaces/apartment';
import { fadeInAnimation } from './../../../_animations/index';
import {PageEvent} from '@angular/material';


@Component({
  selector: 'app-apartments',
  templateUrl: './apartments-list.component.html',
  styleUrls: ['./apartments-list.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class ApartmentsListComponent implements OnInit {


  apartments:Apartment[];
  apartmentForm: boolean = false;
  isNewForm: boolean; 
  newApartment: any = {};
  errorMessage:string;
  isDataLoaded: boolean = false;

  // MatPaginator Inputs
  length ;
  pageSize ;
  pageSizeOptions = [5, 10, 25, 100];
  

  // MatPaginator Output
  pageEvent: PageEvent;
  
  

  constructor(private apartmentService: ApartmentsService) {}

  ngOnInit(){
    this.getApartments();
  }


  getApartments(page:number = 1){
    this.apartmentService.index(page).subscribe(
      apartments => {
        this.apartments = apartments,
        this.isDataLoaded = true;
        error => this.errorMessage =<any>error
    });
  }


  nextPage(e){
    this.isDataLoaded = false;
   this.getApartments(e.pageIndex)
  }
  

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
  

}
