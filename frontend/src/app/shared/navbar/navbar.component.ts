import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger} from "@angular/material/menu";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {Observable, Subscription} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PaymentComponent} from "../../views/payment/payment.component";
import {User} from "../../model/User";
import {CustomerService} from "../../services/customer.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userRole!: string
  numberOfTokens: number = 0;
  loggedUser!: User

  constructor(public dialog: MatDialog, private customerService: CustomerService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.userRole = localStorage.getItem("userRole")! //todo will change this
    this.authService.getCurrentlyLoggedUser().subscribe((res) => {
      this.loggedUser = res             //todo will change this
    })

    if (this.userRole === "CUSTOMER")
      this.getNumberOfTokens();
  }

  getNumberOfTokens() {
    this.customerService.getNumberOfTokens().subscribe((tokens) => {
      this.numberOfTokens = tokens
    })
  }


  addTokens() {
    const dialogRef = this.dialog.open(PaymentComponent, {
      data: {
        "user": this.loggedUser
      }
    });

    dialogRef.afterClosed().subscribe(() => this.getNumberOfTokens())
  }
}
