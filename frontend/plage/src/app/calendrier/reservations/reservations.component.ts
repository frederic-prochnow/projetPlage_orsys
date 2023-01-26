import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent {
  @Input() dataFromParent: any;

  umbrellaColor: string = 'green';
  umbrellasPerRow: number = 10;

  date: any;


}
