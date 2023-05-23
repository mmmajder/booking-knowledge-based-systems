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
  userRole!: string;

  constructor(private dialog: MatDialog) {
    this.userRole = localStorage.getItem("userRole") || ""
  }

  objectDetails(id: number) {
    let dialogRef = this.dialog.open(PropertyDetailsComponent, {
      height: '650px',
      width: '800px'
    });
    dialogRef.componentInstance.id = id;
    dialogRef.afterClosed().subscribe(() => this.updateDisplay.emit())
  }
}
