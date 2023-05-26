import {Component, Input} from '@angular/core';
import {AdditionalServicesPrice} from "../../../../model/flight/AdditionalServicesPrice";
import {AdditionalServicesRequestEvent} from "../../../../model/flight/AdditionalServicesRequestEvent";

@Component({
  selector: 'app-reserve-flight-screen',
  templateUrl: './reserve-flight-screen.component.html',
  styleUrls: ['./reserve-flight-screen.component.css']
})
export class ReserveFlightScreenComponent {
  @Input() totalPrice!: number;
  @Input() additionalPrices!: AdditionalServicesRequestEvent[];

  reserve() {

  }
}
