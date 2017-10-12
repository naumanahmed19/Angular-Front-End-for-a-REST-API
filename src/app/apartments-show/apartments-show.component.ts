import { ApartmentsService } from './../apartments.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector:  'app-apartments-show',
  templateUrl: './apartments-show.component.html',
  styleUrls: ['./apartments-show.component.css']
})
export class ApartmentsShowComponent implements OnInit {

  id: number;
  private sub: any;
  apartment: any;
  
  isDataLoaded: boolean = false;

  constructor(private route: ActivatedRoute,private apartmentService: ApartmentsService) {}

  ngOnInit() {
      this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
    });

       this.apartmentService.show(this.id).subscribe(data => {
        this.apartment = data;
        console.log(this.apartment);
      });
      this.isDataLoaded = true;
  }

}
