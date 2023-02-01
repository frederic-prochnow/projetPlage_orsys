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
    
    this.locServ.nouvelleLocation(this.dateLocation, 2, idLocataire, this.parasolsAEnvoyer, this.remarque, this.montantAReglerEnEuros ).subscribe({
      next: (response) => {
        if(response){
          alert("Votre réservation a bien été prise en compte");
        }else{
          alert("Il y a eu un problème lors de votre réservation, réessayez");
        }
      }
    });

    console.log(this.dateLocation, 2, idLocataire, this.parasolsAEnvoyer, this.remarque, this.montantAReglerEnEuros);
    

    //const nouvelleLocation : Location = new Location(this.dateLocation | Date, this.dateLocation | Date +1);
  }




  //Ouvre le panneau réservation au clic sur un parasol
  /*@ViewChild('content')
  content!: ElementRef;
  ngAfterViewInit() {
    this.open(this.content.nativeElement);
    console.log(this.content.nativeElement);
  }*/

  /*@Output() valueChanged = new EventEmitter<string>();

  changeValue() {
    this.valueChanged.emit('Nouvelle valeur');
  }*/

  /*closeResult = '';

	constructor(private offcanvasService: NgbOffcanvas) {}

	open(content: any) {
    console.log(content);
    
		this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === OffcanvasDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on the backdrop';
		} else {
			return `with: ${reason}`;
		}
	}*/
}