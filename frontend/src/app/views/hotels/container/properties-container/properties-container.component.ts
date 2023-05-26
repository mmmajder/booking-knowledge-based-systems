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
    "Playroom",
    "Restaurant",
    "Bar",
    "Store",
    "Cinema"
  ];
  meals = [
    "Bed and breakfast",
    "Half board",
    "Full board",
    "All inclusive"
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
        next: (properties) => this.properties = properties,
        error: err => console.error(err)
      })
    }
  }

  update() {
    this.getCards();
    this.updatePopularHotels();
  }

  remove(choice: number, list: number[]) {
    return list.filter(item => item !== choice);
  }

  removeString(choice: string, list: string[]) {
    return list.filter(item => item !== choice);
  }

  private updatePopularHotels() {
    this.propertiesService.getPopularHotels().subscribe({
      next: (hotels) => this.popularHotels = hotels,
      error: err => console.error(err)
    })
  }
}
