import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PlatformModule } from '@angular/cdk/platform';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';

import { AccueilAuthentificationComponent } from './navigation/accueil-authentification/accueil-authentification.component';
import { AuthentificationComponent } from './core/authentification/authentification.component';
import { CalendrierComponent } from './core/calendrier/calendrier.component';
import { AjouterReservationComponent } from './core/reservations/ajouter-reservation/ajouter-reservation.component';
import { ReservationsATraiterComponent } from './core/reservations/reservations-atraiter/reservations-atraiter.component';
import { ReservationsDetailsComponent } from './core/reservations/reservations-details/reservations-details.component';
import { ReservationsListeComponent } from './core/reservations/reservations-liste/reservations-liste.component';
import { ReservationsLocataireComponent } from './core/reservations/reservations-locataire/reservations-locataire.component';
import { ReservationsTotalComponent } from './core/reservations/reservations-total/reservations-total.component';
import { OpenCloseComponent } from './core/open-close/open-close.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccueilConcessionnaireComponent } from './navigation/accueil-concessionnaire/accueil-concessionnaire.component';
import { AccueilLocataireComponent } from './navigation/accueil-locataire/accueil-locataire.component';
import { InscriptionComponent } from './navigation/inscription/inscription.component';
import { AuthService } from './services/auth.service';
import { NavConcessionnaireComponent } from './navbar/nav-concessionnaire/nav-concessionnaire.component';
import { NavLocataireComponent } from './navbar/nav-locataire/nav-locataire.component';
import { NavInscriptionComponent } from './navbar/nav-inscription/nav-inscription.component';
import { AppComponent } from './app.component';
import { NouveauLocataireComponent } from './core/locataire/nouveau-locataire/nouveau-locataire.component';
import { DispositionComponent } from './core/calendrier/disposition/disposition.component';
import { LocataireValiderComponent } from './core/locataire/locataire-valider/locataire-valider.component';
import { LocataireListeComponent } from './core/locataire/locataire-liste/locataire-liste.component';



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
    OpenCloseComponent,
    NavInscriptionComponent,
    InscriptionComponent,
    AccueilAuthentificationComponent,
    NouveauLocataireComponent,
    LocataireValiderComponent,
    LocataireListeComponent
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
    MatInputModule,
    MatTableModule,
    MatExpansionModule,
    MatDialogModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatAutocompleteModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
