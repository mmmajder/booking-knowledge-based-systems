import {Component, Input, OnInit} from '@angular/core';
import {PropertyDetails} from "../../../../model/Property";
import {PropertyService} from "../../../../services/property.service";
import {AuthService} from "../../../../services/auth.service";
import {User} from "../../../../model/User";
import {ReserveHotelParams, ReviewHotelParams} from "../../../../model/hotels/ReserveParams";

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  @Input() id!: number;
  userEmail: string = '';

  reservationParams = new ReserveHotelParams();
  reviewParams = new ReviewHotelParams();

  property: PropertyDetails = new PropertyDetails();
  loggedUser!: User;
  userRole!: string;
  reserveFormVisible = false;
  reviewFormVisible = false;

  constructor(private authService: AuthService, private propertyService: PropertyService) {
    this.userRole = localStorage.getItem("userRole") || ""
  }

  ngOnInit() {
    this.loadProperty();
    this.reviewParams.hotelId = this.id;
    this.reservationParams.hotelId = this.id;
  }

  loadProperty() {
    this.propertyService.getProperty(this.id).subscribe({
      next: (p) => {
        this.property = p;
        console.log(this.property)
      },
      error: err => console.error(err)
    });
  }

  range(stars: number) {
    let list = [];
    let i = 1;
    while (i <= stars) {
      list.push(1);
      i += 1;
    }
    return list;
  }

  reserve() {
    if (this.reserveFormVisible) {
      console.log(this.reservationParams)
      this.propertyService.reserve(this.reservationParams).subscribe({
        next: (success) => {
          console.log(success)
        },
        error: err => console.error(err)
      });
    } else {
      this.reserveFormVisible = true;
      this.reviewFormVisible = false;
    }
  }

  review() {
    if (this.reviewFormVisible) {
      this.propertyService.review(this.reviewParams).subscribe({
        next: (success) => {
          console.log(success)
        },
        error: err => console.error(err)
      });
    } else {
      this.reviewFormVisible = true;
      this.reserveFormVisible = false;
    }
  }
}
