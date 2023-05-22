import {Component, Input} from '@angular/core';
import {PropertyDetailsComponent} from "../../../hotels/components/property-details/property-details.component";
import {MatDialog} from "@angular/material/dialog";
import {AuthService} from "../../../../services/auth.service";
import {HotelResponse} from "../../../../model/Property";
import {FlightResponse} from "../../../../model/flight/FlightResponse";

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent {
  @Input() flight!: FlightResponse;
  loggedUserId!: string;
  userRole!: string;

  constructor(private dialog: MatDialog, private authService: AuthService) {
    this.userRole = localStorage.getItem("userRole") || ""
  }


  objectDetails(id: number) {
    // let dialogRef = this.dialog.open(PropertyDetailsComponent, {
    //   height: '650px',
    //   width: '800px'
    // });
    // dialogRef.componentInstance.id = id;
    // dialogRef.afterClosed().subscribe(() => this.updateDisplay.emit())
  }

}
