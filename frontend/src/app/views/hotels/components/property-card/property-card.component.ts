import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HotelResponse} from "../../../../model/Property";
import {MatDialog} from "@angular/material/dialog";
import {PropertyDetailsComponent} from "../property-details/property-details.component";

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent {
  @Output() updateDisplay: EventEmitter<any> = new EventEmitter();
  @Input() property!: HotelResponse;
  @Input() numberOfAdults!: number;
  @Input() numberOfChildren!: number;
  @Input() startDate!: Date;
  @Input() endDate!: Date;

  userRole!: string;

  constructor(private dialog: MatDialog) {
    this.userRole = localStorage.getItem("userRole") || ""
  }

  objectDetails(id: number, price: number) {
    let dialogRef = this.dialog.open(PropertyDetailsComponent, {
      height: '650px',
      width: '800px'
    });
    dialogRef.componentInstance.id = id;
    dialogRef.componentInstance.price = price;
    dialogRef.componentInstance.numberOfAdults = this.numberOfAdults;
    dialogRef.componentInstance.numberOfChildren = this.numberOfChildren;
    dialogRef.componentInstance.startDate = this.startDate;
    dialogRef.componentInstance.endDate = this.endDate;
    dialogRef.afterClosed().subscribe(() => this.updateDisplay.emit())
  }
}
