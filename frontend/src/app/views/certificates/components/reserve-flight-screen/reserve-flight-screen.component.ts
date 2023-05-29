import {Component, Input} from '@angular/core';
import {AdditionalServicesPrice} from "../../../../model/flight/AdditionalServicesPrice";
import {AdditionalServicesRequestEvent} from "../../../../model/flight/AdditionalServicesRequestEvent";
import {FlightBasePriceResponse} from "../../../../model/flight/FlightBasePriceResponse";
import {UserService} from "../../../../services/user.service";
import {FlightService} from "../../../../services/flight.service";
import {FlightResponse} from "../../../../model/flight/FlightResponse";

@Component({
  selector: 'app-reserve-flight-screen',
  templateUrl: './reserve-flight-screen.component.html',
  styleUrls: ['./reserve-flight-screen.component.css']
})
export class ReserveFlightScreenComponent {
  @Input() basePrice!: FlightBasePriceResponse[];
  @Input() additionalPrices!: AdditionalServicesRequestEvent[];

  totalBasePrice: number = 0;
  totalAdditionalServicePrice: number = 0;
  loyaltyProgramDiscount: number = 0;
  totalPrice: number = 0;
  loyaltyStatus!: string;

  constructor(private userService: UserService, private flightService: FlightService) {
    // this.totalAdditionalServicePrice = this.additionalPrices.reduce((accumulator, obj) => accumulator + obj.additionalServicesPrice?.totalAdditionalPrice)
  }

  updatePrice() {
    console.log("Update price")
    if (this.basePrice) {
      this.totalBasePrice = this.basePrice.reduce((accumulator, obj) => accumulator + obj.basePrice.totalPrice, 0);
    }
    if (this.additionalPrices) {
      this.totalAdditionalServicePrice = 0
      this.additionalPrices.forEach((additionalPrice) => {
        if (additionalPrice.additionalServicesPrice) {
          this.totalAdditionalServicePrice += additionalPrice.additionalServicesPrice.totalAdditionalPrice
        }
      })
    }
    this.totalPrice = (this.totalBasePrice + this.totalAdditionalServicePrice)

    this.userService.getLoyaltyProgramDiscount().subscribe((res) => {
      console.log(res)
      console.log("Ovde Miki")
      if (res) {
        this.loyaltyProgramDiscount = res.discount
        if (this.loyaltyProgramDiscount === 0.05) this.loyaltyStatus = "BRONZE"
        else if (this.loyaltyProgramDiscount === 0.1) this.loyaltyStatus = "SILVER"
        else if (this.loyaltyProgramDiscount === 0.05) this.loyaltyStatus = "GOLD"
        else
          this.loyaltyStatus = "NONE"
      }
      // this.flightService.getGrandTotalPrice().subscribe((res) => {
      //   console.log(res)
      //   this.totalPrice = res
      // })
      this.totalPrice = (this.totalBasePrice + this.totalAdditionalServicePrice) * (1 - this.loyaltyProgramDiscount)
    })


  }


  reserve() {
    let request = {
      flights: this.basePrice.map((obj) => obj.flight),
      totalPrice: this.totalPrice
    }
    this.flightService.reserveFlights(request).subscribe((res) => {
      console.log(res)
    })
  }
}
