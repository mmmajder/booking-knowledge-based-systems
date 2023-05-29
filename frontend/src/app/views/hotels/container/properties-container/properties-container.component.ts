import {Component} from '@angular/core';
import {HotelResponse} from "../../../../model/Property";
import {PropertyService} from "../../../../services/property.service";
import {SearchHotelsParams} from "../../../../model/hotels/SearchHotelsParams";

@Component({
  selector: 'app-properties-container',
  templateUrl: './properties-container.component.html',
  styleUrls: ['./properties-container.component.css']
})
export class PropertiesContainerComponent {
  searchParams = new SearchHotelsParams();
  properties: HotelResponse[] = [];
  popularHotels: HotelResponse[] = [];

  facilities = [
    "WiFi",
    "Parking",
    "Pool",
    "Sauna",
    "Gym",
    "Spa",
    "Cinema"
  ];
  meals = [
    {"value": "BED_AND_BREAKFAST", "description": "Bed and breakfast"},
    {"value": "HALF_BOARD", "description": "Half board"},
    {"value": "FULL_BOARD", "description": "Full board"},
    {"value": "ALL_INCLUSIVE", "description": "All inclusive"},
  ];
  reviewScores = [
    {"value": 9.0, "description": "Excellent 9+"},
    {"value": 8.0, "description": "Very good 8+"},
    {"value": 7.0, "description": "Good 7+"},
    {"value": 6.0, "description": "Pleasant 6+"},
  ];

  constructor(private propertiesService: PropertyService) {
    this.getCards();
    this.updatePopularHotels();
  }

  getCards() {
    console.log(this.searchParams)
    if (this.searchParams.startDate != undefined && this.searchParams.endDate != undefined) {
      this.propertiesService.getProperties(this.searchParams).subscribe({
        next: (properties) => {
          this.properties = properties;
          console.log(properties)
        },
        error: err => console.error(err)
      })
    }
  }

  remove(choice: number, list: number[]) {
    return list.filter(item => item !== choice);
  }

  removeString(choice: string, list: string[]) {
    return list.filter(item => item !== choice);
  }

  public updatePopularHotels() {
    this.propertiesService.getPopularHotels().subscribe({
      next: (hotels) => this.popularHotels = hotels,
      error: err => console.error(err)
    })
  }
}
