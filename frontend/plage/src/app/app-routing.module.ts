import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './navigation/inscription/inscription.component';
import { AccueilLocataireComponent } from './navigation/accueil-locataire/accueil-locataire.component';
import { AccueilConcessionnaireComponent } from './navigation/accueil-concessionnaire/accueil-concessionnaire.component';
import { AccueilAuthentificationComponent } from './navigation/accueil-authentification/accueil-authentification.component';
import { AuthConcessionnaireGuard } from './guards/auth-concessionnaire.guard';
import { AuthLocataireGuard } from './guards/auth-locataire.guard';

const routes: Routes = [
  { path: '', component: AccueilAuthentificationComponent },
  { path: 'accueil', component: AccueilAuthentificationComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'locataire', component: AccueilLocataireComponent, canActivate: [AuthLocataireGuard] },
  { path: 'concessionnaire', component: AccueilConcessionnaireComponent, canActivate: [AuthConcessionnaireGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }