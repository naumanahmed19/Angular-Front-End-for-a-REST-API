import { ApartmentsService } from './../apartments.service';
import { Component, OnInit } from '@angular/core';
import { Apartment } from './../apartment';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {


  apartments:Apartment[];
  apartmentForm: boolean = false;
  isNewForm: boolean; 
  newApartment: any = {};
  errorMessage:string;
  isDataLoaded: boolean = false;

  constructor(private apartmentService: ApartmentsService) {}

  ngOnInit(){
    this.getApartments();
    this.isDataLoaded = true;
    console.log(this.isDataLoaded);
  }


  getApartments(){
    this.apartmentService.index().subscribe(
      apartments => {
        this.apartments = apartments,
        error => this.errorMessage =<any>error
    });
    
  }


  // showEditApartmentForm(apartment){
  //   if(!apartment){
  //     this.apartmentForm = false;
  //     return;
  //   }
  //   this.apartmentForm = true;
  //   this.isNewForm = false;
  //   this.newApartment = apartment;
  // }


  // showAddApartmentForm(){
  //   this.newApartment = {};
  //   this.apartmentForm = true;
  //   this.isNewForm = true;
    
  // }



  // removeApartment(apartment){
  //   this.apartmentService.destroy(apartment);
  // }


}
