import { Component, Input, SimpleChanges } from '@angular/core';
import { File } from 'src/app/models/file';
import { Parasol } from 'src/app/models/parasol';

@Component({
  selector: 'app-disposition',
  templateUrl: './disposition.component.html',
  styleUrls: ['./disposition.component.css']
})
export class DispositionComponent {
  @Input() dataFromParent: any;

  tabParasols = [];
  tabParasolsReserve = [
    new Parasol(1, 25,new File(2,2,10)),
  ];
  tabParasolsChoisis = [];

  rows = Array(10).fill(0);
  columns = Array(8).fill(0);
  date: any;
  isSelected: boolean = false;

  affecterClass(st:any) {

    for(let parasol of this.tabParasolsReserve){
      if(parasol.numEmplacement == st){
        return "reserve";
      }
    }
    return "libre";
    // TODO : boucler sur le tableau de parasols et 
    // affecter la classe en fonction de son statut.

    /*return {
      'reserve': st == 'reserve',
      'libre': st == 'libre'
    };*/
  }

  ajouterAuxChoix(id: any){

    // TODO : push le parasol en question dans le tableau.
    //this.tabParasolsChoisis.push();
  }

}
