import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './navigation/inscription/inscription.component';
import { AccueilLocataireComponent } from './navigation/accueil-locataire/accueil-locataire.component';
import { AccueilConcessionnaireComponent } from './navigation/accueil-concessionnaire/accueil-concessionnaire.component';
import { AccueilAuthentificationComponent } from './navigation/accueil-authentification/accueil-authentification.component';

const routes: Routes = [
  { path:'', component: AccueilAuthentificationComponent},
  { path: 'inscription', component: InscriptionComponent},
  { path: 'locataire', component: AccueilLocataireComponent},
  { path: 'concessionnaire', component: AccueilConcessionnaireComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }