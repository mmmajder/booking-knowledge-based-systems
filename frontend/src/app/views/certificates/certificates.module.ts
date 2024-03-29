import {NgModule} from "@angular/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatMenuModule} from "@angular/material/menu";
import {FlightsContainerComponent} from "./container/flights/flights-container.component";
import {SharedModule} from "../../shared/shared.module";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDividerModule} from "@angular/material/divider";
import { PassengersDialogComponent } from './components/passengers-dialog/passengers-dialog.component';
import { FlightCardComponent } from './components/flight-card/flight-card.component';
import { RouteDetailedViewComponent } from './components/route-detailed-view/route-detailed-view.component';
import {MatStepperModule} from "@angular/material/stepper";
import { ReserveFlightScreenComponent } from './components/reserve-flight-screen/reserve-flight-screen.component';

@NgModule({
  declarations: [
    FlightsContainerComponent,
    PassengersDialogComponent,
    FlightCardComponent,
    RouteDetailedViewComponent,
    ReserveFlightScreenComponent
  ],
    imports: [
        MatFormFieldModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        FormsModule,
        CommonModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        MatMenuModule,
        SharedModule,
        MatSelectModule,
        MatTableModule,
        MatPaginatorModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatDividerModule,
        MatStepperModule,
    ],
  exports: [
    FlightsContainerComponent
  ],
  bootstrap: [FlightsContainerComponent]
})
export class CertificatesModule {
}
