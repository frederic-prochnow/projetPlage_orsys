import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil-locataire',
  templateUrl: './accueil-locataire.component.html',
  styleUrls: ['./accueil-locataire.component.css']
})
export class AccueilLocataireComponent implements OnInit{

  idLoc = sessionStorage.getItem("idLoc");

  access = false;
  afficherRefus = false;

  constructor(private router: Router) {}

  async ngOnInit(): Promise<void> {
    if(this.idLoc != null && this.idLoc != ''){
      this.access = true;
    }else{
      this.afficherRefus = true;
      await new Promise(f => setTimeout(f, 3000));
      this.router.navigate(['/']);
    }
  }
}
