import { NgModule, Component, HostBinding } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AuthentificationComponent } from './authentification/authentification.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { NavLocataireComponent } from './navbar/nav-locataire/nav-locataire.component';
import { NavConcessionnaireComponent } from './navbar/nav-concessionnaire/nav-concessionnaire.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { DispositionComponent } from './calendrier/disposition/disposition.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReservationsATraiterComponent } from './reservations/reservations-atraiter/reservations-atraiter.component';
import { ReservationsDetailsComponent } from './reservations/reservations-details/reservations-details.component';
import { ReservationsListeComponent } from './reservations/reservations-liste/reservations-liste.component';
import { ReservationsTotalComponent } from './reservations/reservations-total/reservations-total.component';
import { AccueilLocataireComponent } from './navigation/accueil-locataire/accueil-locataire.component';
import { AccueilConcessionnaireComponent } from './navigation/accueil-concessionnaire/accueil-concessionnaire.component';
import { ReservationsLocataireComponent } from './reservations/reservations-locataire/reservations-locataire.component';
import { AjouterReservationComponent } from './ajouter-reservation/ajouter-reservation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpenCloseComponent } from './open-close/open-close.component';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import { PlatformModule } from '@angular/cdk/platform';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    NavLocataireComponent,
    NavConcessionnaireComponent,
    CalendrierComponent,
    DispositionComponent,
    ReservationsListeComponent,
    ReservationsATraiterComponent,
    ReservationsDetailsComponent,
    ReservationsTotalComponent,
    AccueilLocataireComponent,
    AccueilConcessionnaireComponent,
    ReservationsLocataireComponent,
    AjouterReservationComponent,
    OpenCloseComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    PlatformModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
