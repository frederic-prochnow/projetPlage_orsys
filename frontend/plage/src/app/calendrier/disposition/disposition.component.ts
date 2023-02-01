import { LocationService } from './../../services/location.service';
import { ParasolService } from './../../services/parasol.service';
import { Component, Input, OnChanges } from '@angular/core';

import { Parasol } from 'src/app/models/parasol';
import { delay } from 'rxjs';

@Component({
  selector: 'app-disposition',
  templateUrl: './disposition.component.html',
  styleUrls: ['./disposition.component.css']
})
export class DispositionComponent implements OnChanges{
  @Input() dataFromParent : any;

  constructor(private paraService: ParasolService, private locService: LocationService){}

  tabParasolsValider : Parasol[] = [];
  tabParasolsATraiter : Parasol[] = [];
  idLoc = sessionStorage.getItem("idLoc");
  idCons = sessionStorage.getItem("idCons");
  tabParasolsNonChoisisables : Parasol[] = [];
  nouvelleLocation : boolean = false;

  rows = Array(10).fill(0);
  columns = Array(8).fill(0);
  date: any;

  ngOnChanges(){    
    if(this.dataFromParent != undefined){
      this.date = this.dataFromParent;
      this.paraService.recupererParasolsValider("1", this.dataFromParent).subscribe({
        next: (response) => {
          if(response){
            this.tabParasolsValider = response;
          }else{
            console.log("Disposition component didn't receive anything from parasols booked");
          }
        }
      });
      this.paraService.recupererParasolsATraiter("1", this.dataFromParent).subscribe({
        next: (response) => {
          if(response){
            this.tabParasolsATraiter = response;
          }else{
            console.log("Disposition component didn't receive anything from parasols booked");
          }
        }
      });
    }
    console.log(this.tabParasolsValider,this.tabParasolsATraiter);
  }

  //Affecte la classe donnant la couleur suivant le type de réservation
  affecterClass(st:string) {
    console.log("ok1");
    for(let parasol of this.tabParasolsValider){
      let emplacement : string = (parasol.file.numero -1)*10 + parasol.numEmplacement; 
      if(emplacement == st){
        console.log("ok4");
        return "valider";
      }
    }
    for(let parasol of this.tabParasolsATraiter){
      let emplacement : string = (parasol.file.numero -1)*10 + parasol.numEmplacement; 
      //Si la session appartient à un locataire, un parasol en cours de traitement n'est pasréservable, il sera donc en rouge et non sélectionnable
      if(emplacement == st && this.idCons){
        console.log("ok2");
        return "atraiter";
      }else if(emplacement == st && this.idLoc){
        console.log("ok3");
        return "valider";
      }
    }
    return "libre";
  }

  commencerLocation(){
    this.tabParasolsNonChoisisables = this.tabParasolsATraiter.concat(this.tabParasolsValider);
    this.nouvelleLocation = true;
  }

}
