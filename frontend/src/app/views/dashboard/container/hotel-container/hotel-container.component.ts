import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CsrFormComponent} from "../../components/csr-form/csr-form.component";

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './hotel-container.component.html',
  styleUrls: ['./hotel-container.component.css']
})
export class HotelContainerComponent {

  userRole: string

  constructor(public dialog: MatDialog) {
    this.userRole = localStorage.getItem("userRole") || ""
  }

  openNewCertificateDialog() {
    this.dialog.open(CsrFormComponent, {
      height: '500px',
      width: '600px',
    });
  }
}

