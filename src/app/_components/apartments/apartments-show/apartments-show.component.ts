
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApartmentsService } from './../../../_services/apartments.service';
import { Apartment } from './../../../_interfaces/apartment';
import { fadeInAnimation } from './../../../_animations/index';

@Component({
  selector:  'app-apartments-show',
  templateUrl: './apartments-show.component.html',
  styleUrls: ['./apartments-show.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class ApartmentsShowComponent implements OnInit {

  id: number;
  private sub: any;
  apartment: any;
  
  isDataLoaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private apartmentService: ApartmentsService,
    private router: Router,
  ) {}

  ngOnInit() {
      this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
    });

       this.apartmentService.show(this.id).subscribe(data => {
        this.apartment = data;
        this.isDataLoaded = true;
        (err) => {
          console.log(err);
          if(err.status == 404){
            this.router.navigate(['./404']);
          }
        }
 
      });
  
  }

}
