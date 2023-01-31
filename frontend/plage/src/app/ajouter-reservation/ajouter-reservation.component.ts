import { Component, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { NgbDatepickerModule, NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Location } from '../models/location';
import { Parasol } from '../models/parasol';

@Component({
  selector: 'app-ajouter-reservation',
  templateUrl: './ajouter-reservation.component.html',
  styleUrls: ['./ajouter-reservation.component.css']
})
export class AjouterReservationComponent {

  @Input() tabParasolsNonChoisisables !: Parasol[];
  @Input() dateLocation : string | undefined;
  parasolsTotaux = Array(80).fill(0).map((x, i) => i + 1);
  parasolsIndisponibles: number[] = [];
  parasolsDisponibles: number[] = [];
  parasolsSelectionnes: number[] = [];
  formDataArray = [];

  ngOnInit(){
    
    for(let i of this.tabParasolsNonChoisisables){
      this.parasolsIndisponibles.push((i.file.numero -1)*10 + i.numEmplacement);
    }

    for(let i of this.parasolsTotaux){
      if(!this.parasolsIndisponibles.includes(i)){
        this.parasolsDisponibles.push(i);
      }
    }
  }

  submitForm(){
    console.log(this.parasolsSelectionnes);
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