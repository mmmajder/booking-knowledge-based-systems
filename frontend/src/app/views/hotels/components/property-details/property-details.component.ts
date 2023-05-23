import {Component, Input, OnInit} from '@angular/core';
import {PropertyDetails} from "../../../../model/Property";
import {PropertyService} from "../../../../services/property.service";
import {AuthService} from "../../../../services/auth.service";
import {User} from "../../../../model/User";

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  @Input() id!: number;
  property: PropertyDetails = new PropertyDetails();
  loggedUser!: User;
  userRole!: string;

  constructor(private authService: AuthService, private propertyService: PropertyService) {
    this.userRole = localStorage.getItem("userRole") || ""
  }

  ngOnInit() {
    this.loadProperty();
  }

  loadProperty() {
    this.propertyService.getProperty(this.id).subscribe({
      next: (p) => {
        this.property = p;
        console.log(this.property)
      },
      error: err => console.error(err)
    });
  }

  range(stars: number) {
    let list = [];
    let i = 1;
    while(i <= stars) {
      list.push(1);
      i += 1;
    }
    return list;
  }
}
