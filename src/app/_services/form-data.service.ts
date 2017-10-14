import { Injectable } from '@angular/core';

@Injectable()
export class FormDataService {

  constructor() { }

  formData(formGroup, fileInput:any='',fileInputName:string = 'file') {
     let formData = new FormData();
     if(fileInput){
       let fileElement = fileInput.nativeElement;
       if (fileElement.files) {
         console.log(fileElement.files.length);
          if(fileElement.files.length > 2)
          {
            for (let [key, value] of Object.entries(fileElement.files)) {
              if(fileElement.files[key])
                formData.append(fileInputName+key, fileElement.files[key]);
            }
          }else{
            formData.append(fileInputName, fileElement.files[0]);
          }
       }
     }
     for (let [key, value] of Object.entries(formGroup)) {
       formData.append(key, value);
     }
     return formData;
   }
}
