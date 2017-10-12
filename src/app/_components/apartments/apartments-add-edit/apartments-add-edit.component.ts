
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { ApartmentsService } from './../../../_services/apartments.service';
import { ValidationService } from './../../../_services/validation.service';
import { Apartment } from './../../../_interfaces/apartment';
import { fadeInAnimation } from './../../../_animations/index';


@Component({
  selector: 'app-apartments-add-edit',
  templateUrl: './apartments-add-edit.component.html',
  styleUrls: ['./apartments-add-edit.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})

export class ApartmentsAddEditComponent implements OnInit {
  
  rForm: FormGroup;
  apartment:any;   
  successResponse=false;

  id: number;
  token: string;
  isDataLoaded: boolean = false;
  editRouteUrl: boolean = false;

  
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private vs: ValidationService,
    private fb: FormBuilder,
    private apartmentService: ApartmentsService) { 

    //from fields
    this.rForm = fb.group({
      'title' :        [null,Validators.required],
      'street':        [null,Validators.required],
      'town':          [null,Validators.required],
      'country':       [null,Validators.required],
      'city':          [null,Validators.required],
      'moveInDate':    [null,Validators.required],
      'postalCode':    [null,Validators.required],
      'email':         [null,Validators.required],
      'content':       [null,Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(500)])],
    });

  }

  ngOnInit() {
  
    //check the route type edit / create
    this.route.params.subscribe((params: any) => {
      if (params.id) {
        this.editRoute()
        this.editRouteUrl = true;
      } 
     });
  
  } 

  /*
   *  If edit route get already saved data first and populate in form
   *  if token not exisit or valid send to 404
   */
  editRoute(){
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.token = params['token']; 
    });

    this.apartmentService.edit(this.id,this.token).subscribe(
      (data) => {
        this.rForm.patchValue(data);
        this.isDataLoaded = true;
      },
      (err) => {
        if(err.status == 404){
          this.router.navigate(['./404']);
        }
      }
    
    );
  }

  /*
   * Save Post - check if its update or new before sending request 
   * 
   */

  saveApartment(apartment){
    var ex;
    if(this.editRouteUrl){
      ex = this.apartmentService.update(apartment);
    }else{
      ex = this.apartmentService.store(apartment);
    }
    ex.subscribe(
     res => {
      console.log('New Apartment Posted');
      this.successResponse = true;
     },
     (err) => {
       // Error callback
       if(err.status == 422){
         var errResponse = err.json();
         var messages = errResponse.errors;
         Object.keys(messages).forEach(key => {
             if(this.rForm.controls[key]){
               this.rForm.controls[key].setErrors({
                 remote: messages[key]
               });
             }
             });
         }
     }
    );   
 }
}


