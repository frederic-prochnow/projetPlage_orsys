import { Component, Input } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { LocationService } from '../../../services/location.service';
import { Location } from './../../../models/location';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reservations-details',
  templateUrl: './reservations-details.component.html',
  styleUrls: ['./reservations-details.component.css']
})
export class ReservationsDetailsComponent {

  constructor(private locService: LocationService, private authService: AuthService, private router: Router) { }

  idLoc = this.authService.getTokenLoc();

  @Input()
  item!: Location;

  valider(id: number) {
    this.locService.validerLocation(id).subscribe({
      next: (response) => {
        if (response) {
          let res = "Validation de la location numéro " + id + " réussi !";
          sessionStorage.setItem("message", res);
          this.router.navigateByUrl('/concessionnaire');
        } else {
          let res = "Validation de la location numéro " + id + " en échec !";
          sessionStorage.setItem("message_erreur", res);
        }
      }
    });
  }

  annuler(id: number) {
    this.locService.annulerLocation(id).subscribe({
      next: (response) => {
        if (response) {
          let res = "Annulation de la location numéro " + id + " réussi !";
          sessionStorage.setItem("message", res);
          this.router.navigateByUrl('/concessionnaire');
        } else {
          let res = "Annulation de la location numéro " + id + " en échec !";
          sessionStorage.setItem("message_erreur", res);
        }
      }
    });
  }
}
