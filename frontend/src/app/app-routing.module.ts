import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotAuthorizedPageComponent} from './views/403/not-authorized-page/not-authorized-page.component';
import {NotFoundPageComponent} from './views/404/not-found-page/not-found-page.component';
import {HomepageContainerComponent} from './views/homepage/container/homepage-container/homepage-container.component';
import {FlightsContainerComponent} from "./views/certificates/container/flights/flights-container.component";
import {HotelContainerComponent} from "./views/dashboard/container/hotel-container/hotel-container.component";
import {CertificateRequestsComponent} from "./views/csr/container/certificate-requests/certificate-requests.component";
import {AuthGuard} from "./model/AuthGuard";
import {VerificationScreenContainerComponent} from "./views/verification-screen/container/verification-screen-container/verification-screen-container.component";
import {PropertiesContainerComponent} from "./views/objects/container/properties-container/properties-container.component";
import {
  TenantInvitationContainerComponent
} from "./views/verification-screen/container/tenant-invitation-container/tenant-invitation-container.component";
import {TokensContainerComponent} from "./views/tokens/container/tokens/tokens-container.component";

const routes: Routes = [
  {path: '', component: HomepageContainerComponent},
  {path: 'hotels', component: HotelContainerComponent, canActivate: [AuthGuard]},
  {path: 'flights', component: FlightsContainerComponent, canActivate: [AuthGuard]},
  // {path: 'requests', component: CertificateRequestsComponent},
  // {path: 'properties', component: PropertiesContainerComponent},
  // {path: 'registration/verification', component: VerificationScreenContainerComponent},
  // {path: 'invitation', component: TenantInvitationContainerComponent},
  // {path: 'tokens', component: TokensContainerComponent},
  {path: '403', component: NotAuthorizedPageComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
