import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChallengesPageComponent } from './challenges-page/challenges-page.component';
import { StarFieldC001Component } from './star-field-c001/star-field-c001.component';

@NgModule({
  declarations: [
    AppComponent,
    ChallengesPageComponent,
    StarFieldC001Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
