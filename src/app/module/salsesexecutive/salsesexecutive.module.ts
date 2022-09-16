import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllApplicationListComponent } from './all-application-list/all-application-list.component';
import { AllApprovedListComponent } from './all-approved-list/all-approved-list.component';

import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { NewcaseformComponent } from './newcaseform/newcaseform.component';
import { ApplicationformComponent } from './applicationform/applicationform.component';
>>>>>>> 575d390c195f3abd316cd0467b1634ea256dbfa7

const serouting: Routes = [
  {path:'all-app-list',component:AllApplicationListComponent  },
  {
    path:'all-approved-list',component:AllApprovedListComponent
  },
  {
    path:'new-loan-form',component:NewcaseformComponent
  },
  {
    path:'new-enquiry-form', component:ApplicationformComponent
  }
 
  
];



@NgModule({
  declarations: [AllApplicationListComponent, AllApprovedListComponent,  NewcaseformComponent, ApplicationformComponent],
  imports: [
<<<<<<< HEAD
    CommonModule,RouterModule.forChild(serouting),FormsModule
=======
    CommonModule,RouterModule.forChild(serouting), FormsModule
>>>>>>> 575d390c195f3abd316cd0467b1634ea256dbfa7
  ]
})
export class SalsesexecutiveModule { }
