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
  dataToSend: any;
  date: string ="";

  submitToChild(){
    this.date += this.model.day + "-" + this.model.month + "-" + this.model.year; 
    this.dataToSend = this.date;
  }
  
  constructor (private calender: NgbCalendar) {}
}