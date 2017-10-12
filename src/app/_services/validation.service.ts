import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {

  constructor() { }

  /*
   * Validation Method
   * @return : bool
   */

   

  validField(formGroup,field){
    if((!formGroup.controls[field].valid && formGroup.controls[field].touched) 
    || (formGroup.controls[field].valid  && formGroup.controls[field].value == '')){
      return false;
    }else if(formGroup.controls[field].valid && formGroup.controls[field].value != null && formGroup.controls[field].value != ''){
      return true;
    }
  }

  /*
   * Validation Method
   * @return : string class for bootstrap 4
   */

  validationClass(formGroup,field){
    if((!formGroup.controls[field].valid && formGroup.controls[field].touched) 
    || (formGroup.controls[field].valid  && formGroup.controls[field].value == '')){
      return 'is-invalid';
    }else if(formGroup.controls[field].valid && formGroup.controls[field].value != null && formGroup.controls[field].value != ''){
      return 'is-valid';
    }
  }
  
  /*
   * Validation Message method to display to display error message from server side are front end. 
   * Pass front end error as second argument
   * @return : string 
   */
  validationMessage(formGroup,field,validationError = 'This field is required.'){
    console.log(formGroup.controls[field]);
    if(formGroup.controls[field].errors.remote)
      return formGroup.controls[field].errors.remote;
      else
      return validationError;
  }
}
