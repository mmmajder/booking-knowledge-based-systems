import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FlightResponse} from "../../../../model/flight/FlightResponse";
import {FlightService} from "../../../../services/flight.service";
import {FlightPriceRequest} from "../../../../model/flight/FlightPriceRequest";
import {SeatClass, seatClassReverseMapping} from "../../../../model/flight/SeatClass";
import {FlightBasePriceResponse} from "../../../../model/flight/FlightBasePriceResponse";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-route-detailed-view',
  templateUrl: './route-detailed-view.component.html',
  styleUrls: ['./route-detailed-view.component.css']
})
export class RouteDetailedViewComponent {
  route!: FlightResponse[]
  routePrices!: FlightBasePriceResponse[]
  totalPrice!: number;
  seats = new FormControl('');
  seatList: number[] = Array.from({length: 40}, (_, i) => i + 1);
  totalWeight!: number;
  priorityBoarding!: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<RouteDetailedViewComponent>,
              private flightService: FlightService) {
  }

  ngOnInit() {
    this.route = this.data.route
    const request : FlightPriceRequest = {
      flightIds: this.route.map(obj => obj.id),
      numberOfAdults: this.data.numberOfAdults,
      numberOfChildren: this.data.numberOfChildren,
      seatClass: seatClassReverseMapping[this.data.seatClass]
    }
    console.log(request)
    this.flightService.getBasePrice(request).subscribe((res) => {
      this.routePrices = res
      this.totalPrice = this.routePrices.reduce((accumulator, object) => accumulator + object.basePrice.totalPrice, 0);
    })

  }

  displayDate(departureTime: number) {
    return new Date(departureTime * 1000).toLocaleString()
  }

  calculateTime(arrivalTime: number, departureTime: number) {
    let time = (Math.abs(arrivalTime - departureTime) * 1000 / 36e5).toFixed(2);
    let date = new Date(0,0)
    date.setMinutes(+time * 60)
    return date.toTimeString().slice(0, 5)
  }

  openAdditionalExpensesDialog() {

  }
}
