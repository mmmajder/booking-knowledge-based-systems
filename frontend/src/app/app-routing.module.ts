import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotAuthorizedPageComponent} from './views/403/not-authorized-page/not-authorized-page.component';
import {NotFoundPageComponent} from './views/404/not-found-page/not-found-page.component';
import {HomepageContainerComponent} from './views/homepage/container/homepage-container/homepage-container.component';
import {FlightsContainerComponent} from "./views/certificates/container/flights/flights-container.component";
import {AuthGuard} from "./model/AuthGuard";
import {VerifyRegistrationComponent} from "./views/verify-registration/verify-registration.component";
import {
  PropertiesContainerComponent
} from "./views/hotels/container/properties-container/properties-container.component";

const routes: Routes = [
  {path: '', component: HomepageContainerComponent},
  {path: 'hotels', component: PropertiesContainerComponent, canActivate: [AuthGuard]},
  {path: 'flights', component: FlightsContainerComponent, canActivate: [AuthGuard]},
  {path: 'verify/:verificationCode', component: VerifyRegistrationComponent},
  {path: '403', component: NotAuthorizedPageComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
