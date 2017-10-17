import { SharedService } from './../../../_services/shared.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApartmentsService } from './../../../_services/apartments.service';

@Component({
  selector: 'app-apartment-delete',
  templateUrl: './apartment-delete.component.html',
  styleUrls: ['./apartment-delete.component.scss']
})
export class ApartmentDeleteComponent implements OnInit {

  isDataLoaded: boolean = false;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private apartmentService: ApartmentsService,
    private sharedServices:SharedService,
  ) { }

  ngOnInit() {
      //check the route type edit / create
      this.route.params.subscribe((params: any) => {
        console.log(params);
        if (params.id && params.token ) {
          this.apartmentService.destroy(params.id,params.token ).subscribe(
            (res) => {
              var response = res.json();
              this.sharedServices.openSnackBar(response.message);
              this.isDataLoaded = true;
            },
            (err) => {
              if(err.status == 404){
                this.router.navigate(['./404']);
              }
            }
           );   
        }else{
          this.router.navigate(['./404']);
        } 
       });
  }

}
