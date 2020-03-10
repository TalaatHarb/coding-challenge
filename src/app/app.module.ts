import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ChallengesPageComponent } from './challenges-page/challenges-page.component';

import { StarFieldC001Component } from './star-field-c001/star-field-c001.component';
import { MengerSpongeC002Component } from './menger-sponge-c002/menger-sponge-c002.component';
import { ChallengeCardComponent } from './challenge-card/challenge-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ChallengesPageComponent,
    StarFieldC001Component,
    MengerSpongeC002Component,
    ChallengeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
