<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
>>>>>>> c5bbeffc94fee9c7dca3df0f0166a47d50510626
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllApplicationListComponent } from './all-application-list/all-application-list.component';
import { AllApprovedListComponent } from './all-approved-list/all-approved-list.component';
<<<<<<< HEAD

import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { NewcaseformComponent } from './newcaseform/newcaseform.component';
import { ApplicationformComponent } from './applicationform/applicationform.component';
>>>>>>> 575d390c195f3abd316cd0467b1634ea256dbfa7
=======
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { RouterModule, Routes } from '@angular/router';
>>>>>>> c5bbeffc94fee9c7dca3df0f0166a47d50510626

const serouting: Routes = [
  {path:'all-app-list',component:AllApplicationListComponent  },
  {
    path:'all-approved-list',component:AllApprovedListComponent
  },
  {
<<<<<<< HEAD
    path:'new-loan-form',component:NewcaseformComponent
  },
  {
    path:'new-enquiry-form', component:ApplicationformComponent
=======
    path:'enquiry-form',component:EnquiryFormComponent
>>>>>>> c5bbeffc94fee9c7dca3df0f0166a47d50510626
  }
 
  
];



@NgModule({
<<<<<<< HEAD
  declarations: [AllApplicationListComponent, AllApprovedListComponent,  NewcaseformComponent, ApplicationformComponent],
  imports: [
<<<<<<< HEAD
    CommonModule,RouterModule.forChild(serouting),FormsModule
=======
    CommonModule,RouterModule.forChild(serouting), FormsModule
>>>>>>> 575d390c195f3abd316cd0467b1634ea256dbfa7
=======
  declarations: [AllApplicationListComponent, AllApprovedListComponent, EnquiryFormComponent],
  imports: [
    CommonModule,RouterModule.forChild(serouting)
>>>>>>> c5bbeffc94fee9c7dca3df0f0166a47d50510626
  ]
})
export class SalsesexecutiveModule { }
