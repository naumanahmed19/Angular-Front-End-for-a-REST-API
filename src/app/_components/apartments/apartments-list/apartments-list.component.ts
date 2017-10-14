import { Component, OnInit } from '@angular/core';

import { ApartmentsService } from './../../../_services/apartments.service';
import { Apartment } from './../../../_interfaces/apartment';
import { fadeInAnimation } from './../../../_animations/index';



@Component({
  selector: 'app-apartments',
  templateUrl: './apartments-list.component.html',
  styleUrls: ['./apartments-list.component.css'],
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

  constructor(private apartmentService: ApartmentsService) {}

  ngOnInit(){
    this.getApartments();

  }


  getApartments(){
    this.apartmentService.index().subscribe(
      apartments => {
        this.apartments = apartments,
        this.isDataLoaded = true;
        error => this.errorMessage =<any>error
    });
    
  }
  
  // removeApartment(apartment){
  //   this.apartmentService.destroy(apartment);
  // }

}
