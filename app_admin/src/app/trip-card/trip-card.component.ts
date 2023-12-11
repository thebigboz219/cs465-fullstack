import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';
import { AuthenticationService } from '../authentication';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {

  @Input('trip') trip: any;

  constructor(
    private router: Router,
    private tripService: TripDataService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }
  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  private editTrip(trip: Trip): void {
    console.log('Inside TripListingComponent#editTrip');
    localStorage.removeItem("tripCode");
    localStorage.setItem("tripCode", trip.code);
    this.router.navigate(['edit-trip']);
  }

  private deleteTrip(trip: Trip): void {
    this.tripService.deleteTrip(trip.code)
      .then(data => {
        console.log(data);
        this.router.navigate(['']);
      });
  }

}
