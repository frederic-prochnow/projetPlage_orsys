import { Component, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { NgbDatepickerModule, NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { File } from '../models/file';
import { Location } from '../models/location';
import { Parasol } from '../models/parasol';
import { FileService } from '../services/file.service';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-ajouter-reservation',
  templateUrl: './ajouter-reservation.component.html',
  styleUrls: ['./ajouter-reservation.component.css']
})
export class AjouterReservationComponent {

  constructor(private locServ: LocationService, private fileServ: FileService){}

  @Input() tabParasolsNonChoisisables !: Parasol[];
  @Input() dateLocation !: string;
  parasolsTotaux = Array(80).fill(0).map((x, i) => i + 1);
  parasolsIndisponibles: number[] = [];
  parasolsDisponibles: number[] = [];
  parasolsSelectionnes: number[] = [];
  parasolsAEnvoyer: Parasol[] = [];
  remarque: string = "";
  montantAReglerEnEuros: number = 0;
  idLoc = sessionStorage.getItem("idLoc");
  listFiles: File[] = [];

  ngOnInit(){
    
    for(let i of this.tabParasolsNonChoisisables){
      this.parasolsIndisponibles.push((i.file.numero -1)*10 + i.numEmplacement);
    }

    for(let i of this.parasolsTotaux){
      if(!this.parasolsIndisponibles.includes(i)){
        this.parasolsDisponibles.push(i);
      }
    }

    this.fileServ.recupererFiles().subscribe({
      next: (response) => {
        this.listFiles = response;
      }
    });

    console.log(this.dateLocation);
    

  }

  calculerMontant(){

    this.montantAReglerEnEuros = 0;

    for (let p of this.parasolsSelectionnes){
      let numeroFile:number = ((p -(p %10))/10);
      this.montantAReglerEnEuros += this.listFiles[numeroFile].prixJournalier;
    }
  }

  submitForm(){

    const idLocataire = this.idLoc==null?"":this.idLoc;
    console.log(idLocataire);
    

    for (let p of this.parasolsSelectionnes){
      let numeroFile:number = ((p -(p %10))/10);
      this.parasolsAEnvoyer.push(new Parasol(p, p, this.listFiles[numeroFile]));
    }
    
    this.locServ.nouvelleLocation(this.dateLocation, 2, idLocataire, this.remarque, this.montantAReglerEnEuros ).subscribe({
      next: (response) => {
        if(response==-1){
          alert("Il y a eu un problème lors de votre réservation, réessayez");
        }else{
          const idLocation = response;
          let ok = true;
          for(let p of this.parasolsAEnvoyer){
            this.locServ.ajoutParasolsLocation(idLocation,p.id).subscribe({
              next: (response) => {
                if(!response){
                  ok = false;
                }
              }
            });
          }
          if(!ok){
            alert("Il y a eu un problème de l'enregistrement des parasols, réessayez");
          }else {
            alert("Location rajouter avec succès");
            window.location.reload();
          }
        }
      }
    });
  }
}