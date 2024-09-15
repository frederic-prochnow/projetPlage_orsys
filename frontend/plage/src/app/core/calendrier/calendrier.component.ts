import { Component } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent {
  title = 'ng-bootstrap-datepicker';
  model!: NgbDateStruct;
  dataToSend: string | undefined;
  date: string | undefined;

  submitToChild(){
    this.date = "";
    this.date += this.model.year + "-" +  (this.model.month<10?"0"+this.model.month:this.model.month) + "-" +(this.model.day<10?"0"+this.model.day:this.model.day); 
    this.dataToSend = this.date;
  }
  
  constructor (private calender: NgbCalendar) {}
}