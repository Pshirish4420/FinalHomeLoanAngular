import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllApplicationListComponent } from './all-application-list/all-application-list.component';
import { AllApprovedListComponent } from './all-approved-list/all-approved-list.component';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const serouting: Routes = [
  {path:'all-app-list',component:AllApplicationListComponent  },
  {
    path:'all-approved-list',component:AllApprovedListComponent
  },
  {
    path:'enquiry-form',component:EnquiryFormComponent
  }
 
  
];



@NgModule({
  declarations: [AllApplicationListComponent, AllApprovedListComponent, EnquiryFormComponent],
  imports: [
    CommonModule,RouterModule.forChild(serouting),FormsModule
  ]
})
export class SalsesexecutiveModule { }
