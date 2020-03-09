import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChallengesPageComponent } from './challenges-page/challenges-page.component';
import { StarFieldC001Component } from './star-field-c001/star-field-c001.component';
import { MengerSpongeC002Component } from './menger-sponge-c002/menger-sponge-c002.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ChallengesPageComponent,
    StarFieldC001Component,
    MengerSpongeC002Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
