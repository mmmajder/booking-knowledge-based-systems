import {Component, Inject, OnInit} from '@angular/core';
import {SeatClass} from "../../../../model/flight/SeatClass";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-passengers-dialog',
  templateUrl: './passengers-dialog.component.html',
  styleUrls: ['./passengers-dialog.component.css']
})
export class PassengersDialogComponent implements OnInit {
  selectedClass: SeatClass = SeatClass.ECONOMY;
  seatClasses = Object.values(SeatClass);
  numberOfChildren: number = 0;
  numberOfAdults: number = 1;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<PassengersDialogComponent>) {
  }

  ngOnInit() {
    console.log(this.data)
    this.numberOfAdults = this.data.numberOfAdults
    this.numberOfChildren = this.data.numberOfChildren
    this.selectedClass = this.data.seatClass
  }

  confirm() {
    this.dialogRef.close({
      data: {
        numberOfAdults: this.numberOfAdults,
        numberOfChildren: this.numberOfChildren,
        seatClass: this.selectedClass
      }
    })
  }
}
