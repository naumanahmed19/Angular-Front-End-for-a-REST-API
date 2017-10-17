
import { Http,Response,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx"
import { Apartment } from './../_interfaces/apartment';
import 'rxjs/add/operator/map';

@Injectable()
export class ApartmentsService {

  apartments;


  public url = 'http://2rent.app/api/apartments/';  // URL to web api

 
  constructor(private http:Http) {}
  

  index(page:number = 1): Observable<Apartment[]>{
    return this.http.get(this.url+'?page='+page)
               .map((response:Response) => <Apartment[]>response.json());
         
  }
  show(id){
    return this.http.get(this.url+id)
    .map(res => res.json())
  
  }

  edit(id,token){
    return this.http.get(this.url+id+'/edit/'+token).map(res => res.json());
  }

  store(formData){
    this.debugFormData(formData);
    return this.http.post(this.url,formData);
  }
  
  update(id,formData){
    // Send Patch request to laravel
    formData.append('_method', 'PATCH');
    return this.http.post(this.url+id,formData);
  }
 
  
  destroy(id,token){
    return this.http.delete(this.url+id+'/delete/'+token);
  }

  debugFormData(formData){
    var outputLog = {}, iterator = formData.entries(), end = false;
    while(end == false) {
       var item = iterator.next();
       if(item.value!=undefined) {
           outputLog[item.value[0]] = item.value[1];
       } else if(item.done==true) {
           end = true;
       }
        }
    console.log(outputLog);
  }

}
