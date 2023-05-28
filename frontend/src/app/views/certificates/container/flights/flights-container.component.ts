import {Component, OnInit, ViewChild} from '@angular/core';
import {CertificateTableDataSource} from "../../../../model/CertificateTableData";
import {MatDialog} from "@angular/material/dialog";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {CertificateService} from "../../../../services/certificate.service";
import {FormControl, FormGroup} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {Airport, airports} from "../../../../utils/Airports";
import {MatAutocompleteSelectedEvent, MatAutocompleteTrigger} from "@angular/material/autocomplete";
import {SeatClass, seatClassReverseMapping} from "../../../../model/flight/SeatClass";
import {PassengersDialogComponent} from "../../components/passengers-dialog/passengers-dialog.component";
import {NumberOfStops, numberOfStopsReverseMapping} from "../../../../model/flight/NumberOfStops";
import {FlightService} from "../../../../services/flight.service";
import {SearchFlightsParams} from "../../../../model/flight/SearchFlightsParams";
import {FlightResponse} from "../../../../model/flight/FlightResponse";

@Component({
  selector: 'app-certificate-list',
  templateUrl: './flights-container.component.html',
  styleUrls: ['./flights-container.component.css']
})
export class FlightsContainerComponent implements OnInit {
  @ViewChild(MatAutocompleteTrigger) _auto!: MatAutocompleteTrigger;
  myControlFrom = new FormControl('');
  myControlTo = new FormControl('');
  options: Airport[] = airports;
  filteredOptionsFrom!: Observable<string[]>;
  filteredOptionsTo!: Observable<string[]>;

  displayedColumns = ["serialNumber", "alias", "notBefore", "notAfter", "validityStatus", "details"];
  dataSource: CertificateTableDataSource;
  searchFilter: string;
  userRole: string;
  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort!: MatSort;
  returnTicket: boolean = true;
  from: string = "";
  to: string = "";
  seatClass: SeatClass = SeatClass.ECONOMY;
  numberOfChildren: number = 0;
  numberOfAdults: number = 1;
  selectedNumberOfStops: NumberOfStops = NumberOfStops.ANY;
  possibleNumberOfStops = Object.values(NumberOfStops);

  dateRange = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  singleDate!: Date;

  searchedFlights: FlightResponse[][] = [
    // [
    //   {
    //     "id": 1,
    //     "departureAirport": {
    //       "name": "Belgrad (Beograd) - Belgrade Nikola Tesla International",
    //       "country": "Serbia",
    //       "code": "BEG"
    //     },
    //     "arrivalAirport": {
    //       "name": "Nis",
    //       "country": "Serbia",
    //       "code": "INI"
    //     },
    //     "departureTime": 1688210382.12,
    //     "arrivalTime": 1688217582.12,
    //     "priceCatalog": null,
    //     "planeBusyness": null,
    //     "airline": "Air Serbia"
    //   },
    //   {
    //     "id": 5,
    //     "departureAirport": {
    //       "name": "Nis",
    //       "country": "Serbia",
    //       "code": "INI"
    //     },
    //     "arrivalAirport": {
    //       "name": "Amsterdam - Amsterdam Airport Schiphol",
    //       "country": "Netherlands",
    //       "code": "AMS"
    //     },
    //     "departureTime": 1688219982.12,
    //     "arrivalTime": 1688224782.12,
    //     "priceCatalog": null,
    //     "planeBusyness": null,
    //     "airline": "Air Serbia"
    //   },
    //   {
    //     "id": 6,
    //     "departureAirport": {
    //       "name": "Amsterdam - Amsterdam Airport Schiphol",
    //       "country": "Netherlands",
    //       "code": "AMS"
    //     },
    //     "arrivalAirport": {
    //       "name": "Paris",
    //       "country": "France",
    //       "code": "PAR"
    //     },
    //     "departureTime": 1688228382.12,
    //     "arrivalTime": 1688239182.12,
    //     "priceCatalog": null,
    //     "planeBusyness": null,
    //     "airline": "Air France"
    //   }
    // ],
    // [
    //   {
    //     "id": 1,
    //     "departureAirport": {
    //       "name": "Belgrad (Beograd) - Belgrade Nikola Tesla International",
    //       "country": "Serbia",
    //       "code": "BEG"
    //     },
    //     "arrivalAirport": {
    //       "name": "Nis",
    //       "country": "Serbia",
    //       "code": "INI"
    //     },
    //     "departureTime": 1688210382.12,
    //     "arrivalTime": 1688217582.12,
    //     "priceCatalog": null,
    //     "planeBusyness": null,
    //     "airline": "Air Serbia"
    //   },
    //   {
    //     "id": 3,
    //     "departureAirport": {
    //       "name": "Nis",
    //       "country": "Serbia",
    //       "code": "INI"
    //     },
    //     "arrivalAirport": {
    //       "name": "Istanbul - Istanbul Atatürk Airport",
    //       "country": "Turkey",
    //       "code": "IST"
    //     },
    //     "departureTime": 1688223582.12,
    //     "arrivalTime": 1688224782.12,
    //     "priceCatalog": null,
    //     "planeBusyness": null,
    //     "airline": "Turkish Airlines"
    //   },
    //   {
    //     "id": 4,
    //     "departureAirport": {
    //       "name": "Istanbul - Istanbul Atatürk Airport",
    //       "country": "Turkey",
    //       "code": "IST"
    //     },
    //     "arrivalAirport": {
    //       "name": "Paris",
    //       "country": "France",
    //       "code": "PAR"
    //     },
    //     "departureTime": 1688228382.12,
    //     "arrivalTime": 1688239182.12,
    //     "priceCatalog": null,
    //     "planeBusyness": null,
    //     "airline": "Turkish Airlines"
    //   }
    // ],
    // [
    //   {
    //     "id": 1,
    //     "departureAirport": {
    //       "name": "Belgrad (Beograd) - Belgrade Nikola Tesla International",
    //       "country": "Serbia",
    //       "code": "BEG"
    //     },
    //     "arrivalAirport": {
    //       "name": "Nis",
    //       "country": "Serbia",
    //       "code": "INI"
    //     },
    //     "departureTime": 1688210382.12,
    //     "arrivalTime": 1688217582.12,
    //     "priceCatalog": null,
    //     "planeBusyness": null,
    //     "airline": "Air Serbia"
    //   },
    //   {
    //     "id": 2,
    //     "departureAirport": {
    //       "name": "Nis",
    //       "country": "Serbia",
    //       "code": "INI"
    //     },
    //     "arrivalAirport": {
    //       "name": "Istanbul - Istanbul Atatürk Airport",
    //       "country": "Turkey",
    //       "code": "IST"
    //     },
    //     "departureTime": 1688219982.12,
    //     "arrivalTime": 1688224782.12,
    //     "priceCatalog": null,
    //     "planeBusyness": null,
    //     "airline": "Air Serbia"
    //   },
    //   {
    //     "id": 4,
    //     "departureAirport": {
    //       "name": "Istanbul - Istanbul Atatürk Airport",
    //       "country": "Turkey",
    //       "code": "IST"
    //     },
    //     "arrivalAirport": {
    //       "name": "Paris",
    //       "country": "France",
    //       "code": "PAR"
    //     },
    //     "departureTime": 1688228382.12,
    //     "arrivalTime": 1688239182.12,
    //     "priceCatalog": null,
    //     "planeBusyness": null,
    //     "airline": "Turkish Airlines"
    //   }
    // ]
  ]

  constructor(public dialog: MatDialog, private certificateService: CertificateService, private flightService: FlightService) {
    this.userRole = localStorage.getItem("userRole") || ""
    this.dataSource = new CertificateTableDataSource(certificateService, this.userRole);
    this.searchFilter = "";
  }

  ngOnInit() {
    this.filteredOptionsFrom = this.myControlFrom.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.filteredOptionsTo = this.myControlTo.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    const filteredAirports = this.options.filter(option => option.name.toLowerCase().includes(filterValue) ||
      option.country.toLowerCase().includes(filterValue) ||
      option.code.toLowerCase().includes(filterValue) ||
      (option.code + ": " + option.name + ", " + option.country).toLowerCase().includes(filterValue));
    return filteredAirports.map(obj => obj.code + ": " + obj.name + ", " + obj.country);
  }

  reverseAirports() {
    this.myControlFrom.setValue(this.to)
    this.myControlTo.setValue(this.from)
    const temp = this.from
    this.from = this.to
    this.to = temp
  }

  toSelected($event: MatAutocompleteSelectedEvent) {
    this.to = $event.option.value;
  }

  fromSelected($event: MatAutocompleteSelectedEvent) {
    this.from = $event.option.value;
  }

  search() {
    console.log(this.dateRange.value)
    console.log(this.singleDate)
    console.log(this.seatClass)
    // const exists = (value: string) => Object.values(SeatClass).includes(value as any);
    // if (exists(this.seatClass)) {
    const searchParams = new SearchFlightsParams(seatClassReverseMapping[this.seatClass], this.from, this.to, this.numberOfChildren,
      this.numberOfAdults, numberOfStopsReverseMapping[this.selectedNumberOfStops], this.returnTicket, this.singleDate, this.dateRange.value.start!, this.dateRange.value.end!)
    this.flightService.searchFlights(searchParams).subscribe((res) => {
      this.searchedFlights = res
      console.log(res)
    })
  }

  openPassengersDialog() {
    let dialogRef = this.dialog.open(PassengersDialogComponent, {
      height: '400px',
      width: '500px',
      data: {
        numberOfChildren: this.numberOfChildren,
        numberOfAdults: this.numberOfAdults,
        seatClass: this.seatClass
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.numberOfAdults = result.data.numberOfAdults
        this.numberOfChildren = result.data.numberOfChildren
        this.seatClass = result.data.seatClass
      }
    });
  }
}
