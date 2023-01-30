import { Component } from '@angular/core';

@Component({
  selector: 'app-reservations-atraiter',
  templateUrl: './reservations-atraiter.component.html',
  styleUrls: ['./reservations-atraiter.component.css']
})
export class ReservationsATraiterComponent {

  cardDetailsVisible = false;

  clickDetail() {
    this.cardDetailsVisible=!this.cardDetailsVisible;
  }
}
