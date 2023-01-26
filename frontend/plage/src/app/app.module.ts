import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginGuard } from './login.guard';
import { LogoutGuard } from './logout.guard';
import { AuthentificationComponent } from './authentification/authentification.component';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule
  ],
  providers: [LoginGuard, LogoutGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
