import {Component, Input} from '@angular/core';
import {HotelResponse} from "../../../../model/Property";

@Component({
  selector: 'app-popular-hotel',
  templateUrl: './popular-hotel.component.html',
  styleUrls: ['./popular-hotel.component.css']
})
export class PopularHotelComponent {
  @Input() property!: HotelResponse;
}
