import { Http,Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx"
import { Apartment } from './../_interfaces/apartment';
import 'rxjs/add/operator/map';

@Injectable()
export class ApartmentsService {

  apartments;

  public url = 'http://2rent.app/api/apartments/';  // URL to web api

 
  constructor(private http:Http) {}

  index(): Observable<Apartment[]>{
    return this.http.get(this.url)
               .map((response:Response) => <Apartment[]>response.json());
         
  }
  show(id){
    return this.http.get(this.url+id)
    .map(res => res.json())
  
  }

  edit(id,token){

    return this.http.get(this.url+id+'/edit/'+token).map(res => res.json());
  }

  store(apartment){

    return this.http.post(this.url,apartment);

  }
  
  update(id,apartment,fileToUpload: any =''){

    return this.http.patch(this.url+id,apartment);
  }
 
  
  destroy(apartment){
    return this.http.delete(this.url+apartment.id).subscribe(
      res => {
        console.log('Apartment Deleted');
      },
      err=>{
           console.log('something wrong');
      }
     );   
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
