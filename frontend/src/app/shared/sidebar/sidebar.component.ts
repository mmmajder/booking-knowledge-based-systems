import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {PaymentComponent} from "../../views/payment/payment.component";
import {MatDialog} from "@angular/material/dialog";
import {CustomerService} from "../../services/customer.service";
import {User} from "../../model/User";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() currentPage = 'dashboard';
  userRole = 'ROLE_ADMIN';
  numberOfTokens = 0;
  loggedUser!: User;

  constructor(private router: Router, public dialog: MatDialog, private customerService: CustomerService, private authService: AuthService) {
    this.userRole = localStorage.getItem("userRole")!;
    this.authService.getCurrentlyLoggedUser().subscribe((res) => {
        this.loggedUser = res;
        if (this.userRole === "CUSTOMER") {
          this.getNumberOfTokens();
        }
      }
    )
  }

  navigate(page: string) {
    this.router.navigate([page]);
  }

  logout() {
    localStorage.removeItem('userRole');
    localStorage.removeItem('token')
    this.router.navigate(['']);
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
