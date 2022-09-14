import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ViewequiryComponent } from './viewequiry/viewequiry.component';

import { CibilscoreComponent } from './cibilscore/cibilscore.component';


const oerouting: Routes = [
  // {path: 'oedash', component: DashboardComponent},
  {path:'oeenq',component:ViewequiryComponent},
  
  {path:'cibil',component:CibilscoreComponent}
  
];
@NgModule({
  declarations: [ ViewequiryComponent, CibilscoreComponent],
  imports: [
    CommonModule,RouterModule.forChild(oerouting)
  ]
})
export class OperationexecutiveModule { }
