import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FlightResponse} from "../../../../model/flight/FlightResponse";
import {FlightService} from "../../../../services/flight.service";
import {FlightPriceRequest} from "../../../../model/flight/FlightPriceRequest";
import {seatClassReverseMapping} from "../../../../model/flight/SeatClass";
import {FlightBasePriceResponse} from "../../../../model/flight/FlightBasePriceResponse";
import {FormControl} from '@angular/forms';
import {AdditionalServicesRequestEvent} from "../../../../model/flight/AdditionalServicesRequestEvent";

@Component({
  selector: 'app-route-detailed-view',
  templateUrl: './route-detailed-view.component.html',
  styleUrls: ['./route-detailed-view.component.css']
})
export class RouteDetailedViewComponent {
  route!: FlightResponse[]
  routePrices!: FlightBasePriceResponse[]
  totalPrice!: number;
  seats!: FormControl[];
  seatList: number[] = Array.from({length: 40}, (_, i) => i + 1);
  totalWeight!: number;
  priorityBoarding: boolean = false;
  displayAdditionalPrice: boolean = false;
  additionalServices: AdditionalServicesRequestEvent | null = null;

  additionalPrices!: AdditionalServicesRequestEvent[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<RouteDetailedViewComponent>,
              private flightService: FlightService) {
  }

  ngOnInit() {
    this.route = this.data.route
    const request: FlightPriceRequest = {
      flightIds: this.route.map(obj => obj.id),
      numberOfAdults: this.data.numberOfAdults,
      numberOfChildren: this.data.numberOfChildren,
      seatClass: seatClassReverseMapping[this.data.seatClass]
    }
    console.log(request)
    this.flightService.getBasePrice(request).subscribe((res) => {
      this.routePrices = res
      this.totalPrice = this.routePrices.reduce((accumulator, object) => accumulator + object.basePrice.totalPrice, 0);
      this.additionalPrices = []
      this.seats = []
      this.routePrices.forEach((flightPrice) => {
        this.seats.push(new FormControl(''))
        this.additionalPrices.push({
          priorityBoarding: this.priorityBoarding,
          seats: [],      //todo fix
          specificSeats: this.seats[this.seats.length - 1].value?.length !== 0,
          flight: flightPrice.flight,
          luggageWeight: this.totalWeight,
        })
      })
    })

  }

  displayDate(departureTime: number) {
    return new Date(departureTime * 1000).toLocaleString()
  }

  calculateTime(arrivalTime: number, departureTime: number) {
    let time = (Math.abs(arrivalTime - departureTime) * 1000 / 36e5).toFixed(2);
    let date = new Date(0, 0)
    date.setMinutes(+time * 60)
    return date.toTimeString().slice(0, 5)
  }

  openAdditionalExpensesDialog() {

  }

  calculateAdditionalServicePrice() {
    this.additionalPrices.forEach((price, index) => {
      price.luggageWeight = this.totalWeight
      price.specificSeats = this.seats[index].value.length !== 0
      price.seats = []
      if (price.specificSeats) {
        this.seats[index].value.forEach((seatNumber: number) => {
          price.seats.push({
            number: seatNumber,
            seatClass: this.data.seatClass,
          })
        })
      }
    })


    console.log(this.additionalPrices)
    console.log(this.seats)


    this.displayAdditionalPrice = true    //todo move

    this.flightService.getAdditionalServicesPrice(this.additionalPrices).subscribe((res) => {
      this.additionalPrices = res
    })

  }
}
