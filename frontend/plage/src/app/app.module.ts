import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { LoginGuard } from './login.guard';
import { LogoutGuard } from './logout.guard';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ConnectionTokenInterceptor, tokenInterceptorProvider } from './connection-token.interceptor';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { NavLocataireComponent } from './navbar/nav-locataire/nav-locataire.component';
import { NavConcessionnaireComponent } from './navbar/nav-concessionnaire/nav-concessionnaire.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { DispositionComponent } from './calendrier/disposition/disposition.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReservationsATraiterComponent } from './reservations-atraiter/reservations-atraiter.component';
import { ReservationsDetailsComponent } from './reservations-details/reservations-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    NavLocataireComponent,
    NavConcessionnaireComponent,
    CalendrierComponent,
    DispositionComponent,
    ReservationsATraiterComponent,
    ReservationsDetailsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [AuthService, LoginGuard, LogoutGuard, tokenInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
