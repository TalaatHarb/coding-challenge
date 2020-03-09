import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallengesPageComponent } from './challenges-page/challenges-page.component';
import { StarFieldC001Component } from './star-field-c001/star-field-c001.component';


const routes: Routes = [
  {path: '', component: ChallengesPageComponent},
  {path: 'c001', component: StarFieldC001Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
