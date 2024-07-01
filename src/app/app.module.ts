import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PassengerCardComponent } from './shared/components/passenger-card/passenger-card.component';
import { PassengerListComponent } from './shared/components/passenger-list/passenger-list.component';
import { PassengerDashComponent } from './shared/components/passenger-dash/passenger-dash.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    PassengerCardComponent,
    PassengerListComponent,
    PassengerDashComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
