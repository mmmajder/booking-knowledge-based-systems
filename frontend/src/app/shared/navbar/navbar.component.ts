import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger} from "@angular/material/menu";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {Observable, Subscription} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PaymentComponent} from "../../views/payment/payment.component";
import {User} from "../../model/User";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userRole!: string
  numberOfTokens: number = 0;
  loggedUser!: User

  constructor(public dialog: MatDialog,) {
  }

  ngOnInit(): void {
    this.userRole = "ROLE_CUSTOMER" //todo will change this
    this.loggedUser = new User()                //todo will change this
  }


  addTokens() {
    this.dialog.open(PaymentComponent, {
      data: {
        "user": this.loggedUser
      }
    });
  }
}
