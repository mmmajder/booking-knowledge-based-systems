import {Component, Input} from '@angular/core';
import {AdditionalServicesPrice} from "../../../../model/flight/AdditionalServicesPrice";
import {AdditionalServicesRequestEvent} from "../../../../model/flight/AdditionalServicesRequestEvent";
import {FlightBasePriceResponse} from "../../../../model/flight/FlightBasePriceResponse";
import {UserService} from "../../../../services/user.service";

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

  constructor(private userService: UserService) {
    // this.totalAdditionalServicePrice = this.additionalPrices.reduce((accumulator, obj) => accumulator + obj.additionalServicesPrice?.totalAdditionalPrice)
  }

  updatePrice() {
    console.log("Update price")
    if (this.basePrice) {
      this.totalBasePrice = this.basePrice.reduce((accumulator, obj) => accumulator + obj.basePrice.totalPrice, 0);
    }
    if (this.additionalPrices) {
      this.totalAdditionalServicePrice = this.additionalPrices.reduce((accumulator, obj) => accumulator + obj.additionalServicesPrice!.totalAdditionalPrice, 0);
    }

    this.userService.getLoyaltyProgramDiscount().subscribe((res) => {
      console.log(res)
      console.log("Ovde Miki")
      this.loyaltyProgramDiscount = res.discount
    })

    this.totalPrice = this.totalBasePrice + this.totalAdditionalServicePrice - this.loyaltyProgramDiscount
  }


  reserve() {

  }
}
