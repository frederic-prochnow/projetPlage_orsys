import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil-concessionnaire',
  templateUrl: './accueil-concessionnaire.component.html',
  styleUrls: ['./accueil-concessionnaire.component.css']
})
export class AccueilConcessionnaireComponent implements OnInit {

  idCons = sessionStorage.getItem("idCons");

  access = false;
  afficherRefus = false;

  constructor(private router: Router) {}

  async ngOnInit(): Promise<void> {
    if(this.idCons != null && this.idCons != ''){
      this.access = true;
    }else{
      this.afficherRefus = true;
      await new Promise(f => setTimeout(f, 3000));
      this.router.navigate(['/']);
    }
  }
}
