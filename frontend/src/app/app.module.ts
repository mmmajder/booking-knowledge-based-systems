import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomepageModule} from "./views/homepage/homepage.module";
import {NotFoundPageComponent} from "./views/404/not-found-page/not-found-page.component";
import {NotAuthorizedPageComponent} from "./views/403/not-authorized-page/not-authorized-page.component";
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {SharedModule} from './shared/shared.module'
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HotelModule} from "./views/dashboard/hotel.module";
import {CertificatesModule} from "./views/certificates/certificates.module";
import {CsrModule} from "./views/csr/csr.module";
import {MatCardModule} from "@angular/material/card";
import {VerificationpageModule} from "./views/verification-screen/verificationpage.module";
import {TokensModule} from "./views/tokens/tokens.module";
import {PaymentComponent} from './views/payment/payment.component';
import {NgxPayPalModule} from "ngx-paypal";
import {MatDialogModule} from "@angular/material/dialog";
import {VerifyRegistrationComponent} from './views/verify-registration/verify-registration.component';
import {PropertiesModule} from "./views/hotels/properties.module";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    NotAuthorizedPageComponent,
    PaymentComponent,
    VerifyRegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    VerificationpageModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    SharedModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatInputModule,
    FormsModule,
    HotelModule,
    CertificatesModule,
    CsrModule,
    MatCardModule,
    ReactiveFormsModule,
    PropertiesModule,
    TokensModule,
    NgxPayPalModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
