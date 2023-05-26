import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AuthService} from "../../../../services/auth.service";
import {FlightResponse} from "../../../../model/flight/FlightResponse";
import {RouteDetailedViewComponent} from "../route-detailed-view/route-detailed-view.component";
import {SeatClass} from "../../../../model/flight/SeatClass";

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit {
  @Input() flight!: FlightResponse[];
  @Input() numberOfAdults!: number;
  @Input() numberOfChildren!: number;
  @Input() seatClass!: SeatClass;

  startTime!: string
  endTime!: string
  startLocation!: string
  endLocation!: string
  totalTime!: string
  numberOfStops!: number

  constructor(private dialog: MatDialog, private authService: AuthService) {

  }

  objectDetails(id: number) {
    // let dialogRef = this.dialog.open(PropertyDetailsComponent, {
    //   height: '650px',
    //   width: '800px'
    // });
    // dialogRef.componentInstance.id = id;
    // dialogRef.afterClosed().subscribe(() => this.updateDisplay.emit())
  }

  ngOnInit(): void {
    const firstFlight = this.flight[0]
    const lastFlight = this.flight[this.flight.length - 1]

    this.startTime = new Date(firstFlight.departureTime * 1000).toLocaleString()
    this.endTime = new Date(lastFlight.arrivalTime * 1000).toLocaleString()
    this.startLocation = firstFlight.departureAirport.code
    this.endLocation = lastFlight.arrivalAirport.code
    this.numberOfStops = this.flight.length - 1
    this.totalTime = this.calculateTime(lastFlight.arrivalTime, firstFlight.departureTime);
  }

  calculateTime(arrivalTime: number, departureTime: number) {
    let time = (Math.abs(arrivalTime - departureTime) * 1000 / 36e5).toFixed(2);
    let date = new Date(0,0)
    date.setMinutes(+time * 60)
    return date.toTimeString().slice(0, 5)
  }

  showFlightDialog() {
    let dialogRef = this.dialog.open(RouteDetailedViewComponent, {
      height: '90vh',
      width: '90vw',
      data: {
        route: this.flight,
        numberOfAdults: this.numberOfAdults,
        numberOfChildren: this.numberOfChildren,
        seatClass: this.seatClass
      }
    });
    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result) {
    //     this.numberOfAdults = result.data.numberOfAdults
    //     this.numberOfChildren = result.data.numberOfChildren
    //     this.seatClass = result.data.seatClass
    //   }
    // });
  }
}
