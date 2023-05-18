import {Component} from '@angular/core';
import {BasicPropertyDetails} from "../../../../model/Property";
import {PropertyService} from "../../../../services/property.service";
import {SearchHotelsParams} from "../../../../model/hotels/SearchHotelsParams";

@Component({
  selector: 'app-properties-container',
  templateUrl: './properties-container.component.html',
  styleUrls: ['./properties-container.component.css']
})
export class PropertiesContainerComponent {
  searchParams = new SearchHotelsParams();
  properties: BasicPropertyDetails[] = [];
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
    {"value": 9, "description": "Excellent 9+"},
    {"value": 8, "description": "Very good 8+"},
    {"value": 7, "description": "Good 7+"},
    {"value": 6, "description": "Pleasant 6+"},
  ];

  constructor(private propertiesService: PropertyService) {
    this.getCards();
  }

  getCards() {
    console.log(this.searchParams)
    this.propertiesService.getProperties(this.searchParams).subscribe({
      next: (properties) => this.properties = properties,
      error: err => console.error(err)
    })
  }

  remove(choice: number, list: number[]) {
    return list.filter(item => item !== choice);
  }

  removeString(choice: string, list: string[]) {
    return list.filter(item => item !== choice);
  }
}
