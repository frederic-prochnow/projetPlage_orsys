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
  tabParasolsChoisis = [];

  rows = Array(10).fill(0);
  columns = Array(8).fill(0);
  date: any;

  ngOnChanges(){    
    if(this.dataFromParent != undefined){
      this.paraService.recupererParasolsValider("2", this.dataFromParent).subscribe({
        next: (response) => {
          if(response){
            this.tabParasolsValider = response;
          }else{
            console.log("Disposition component didn't receive anything from parasols booked");
          }
        }
      });
      this.paraService.recupererParasolsATraiter("2", this.dataFromParent).subscribe({
        next: (response) => {
          if(response){
            this.tabParasolsATraiter = response;
          }else{
            console.log("Disposition component didn't receive anything from parasols booked");
          }
        }
      });
    }
  }


  affecterClass(st:string) {

    for(let parasol of this.tabParasolsValider){
      let emplacement : string = (parasol.file.numero -1)*10 + parasol.numEmplacement; 
      if(emplacement == st){
        delay(200);
        return "valider";
      }
    }
    for(let parasol of this.tabParasolsATraiter){
      let emplacement : string = (parasol.file.numero -1)*10 + parasol.numEmplacement; 
      if(emplacement == st){
        delay(200);
        return "atraiter";
      }
    }
    return "libre";
  }

  ajouterAuxChoix(id: any){

    // TODO : push le parasol en question dans le tableau.
    //this.tabParasolsChoisis.push();
  }

}
