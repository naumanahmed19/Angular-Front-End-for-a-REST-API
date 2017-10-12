import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApartmentsService } from './../apartments.service';
import { Apartment } from '.././apartment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-apartments-create',
  templateUrl: './apartments-create.component.html',
  styleUrls: ['./apartments-create.component.css']
})
export class ApartmentsCreateComponent  {

  rForm: FormGroup;
  apartment:any;   
  severErrors:boolean= false;                  // A property for our submitted form
  description:string = '';
  //name:string = '';
  successResponse=false;
  titleAlert:string = 'This field is required';
  constructor(private fb: FormBuilder, private apartmentService: ApartmentsService) { 

    this.rForm = fb.group({
      'title' :        [null,Validators.required],
      'street':        [null,Validators.required],
      'town':          [null,Validators.required],
      'country':       [null,Validators.required],
      'city':          [null,Validators.required],
      'moveInDate':    [null,Validators.required],
      'postalCode':    [null,Validators.required],
      'email':         [null,Validators.required],
     'content':       [null,Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(500)])],
    });

  }
//   ngOnInit() {
//     this.apartment;
//   }

  saveApartment(apartment){
     this.apartmentService.store(apartment).subscribe(
      res => {
       console.log('New Apartment Posted');
       this.successResponse = true;
      },
      (err) => {
        // Error callback
        if(err.status == 422){
          this.severErrors = true;
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
          console.log(this.rForm.controls['email'].errors.remote);
      }
     );   
  }

  checkValidation(field){
    if((!this.rForm.controls[field].valid && this.rForm.controls[field].touched) 
    || (!this.rForm.controls[field].valid && this.severErrors)
    || (this.rForm.controls[field].valid  && this.rForm.controls[field].value == '')){
      return 'is-invalid';
    }else if(this.rForm.controls[field].valid && this.rForm.controls[field].value != null && this.rForm.controls[field].value != ''){
      return 'is-valid';
    }
  }

  validationMessage(field,validationError = 'This field is required.'){
    if(this.rForm.controls[field].errors.remote)
      return this.rForm.controls[field].errors.remote;
      else
      return validationError;
  }
}
