import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApartmentsService } from './../apartments.service';

@Component({
  selector: 'app-apartments-edit',
  templateUrl: './apartments-edit.component.html',
  styleUrls: ['./apartments-edit.component.css']
})
export class ApartmentsEditComponent implements OnInit {

  id: number;
  token: string;
  apartment: any;
  isDataLoaded: boolean = false;
  error: string;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private apartmentService: ApartmentsService) {}

  ngOnInit() {
      this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       this.token = params['token']; // (+) converts string 'id' to a number
       console.log(params['token']);
    });
       this.apartmentService.edit(this.id,this.token).subscribe(
        (data) => {
          this.apartment = data
          this.isDataLoaded = true;
        },
        (err) => {
          if(err.status == 404){
            this.router.navigate(['./404']);
          }
        }
      
      ); // Reach here if fails
     
  }

  saveApartment(apartment){
    console.log(apartment);
    //if(this.id){
      this.apartmentService.update(apartment);
   
    // }else{
    //   this.apartmentService.store(apartment);
    // }
  }


}
