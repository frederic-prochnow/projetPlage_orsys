import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { ReservationsComponent } from './calendrier/reservations/reservations.component';
@NgModule({
  declarations: [
    AppComponent,
    CalendrierComponent,
    ReservationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
