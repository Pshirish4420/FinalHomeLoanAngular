import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllApplicationListComponent } from './all-application-list/all-application-list.component';
import { AllApprovedListComponent } from './all-approved-list/all-approved-list.component';

import { RouterModule, Routes } from '@angular/router';
import { NewcaseformComponent } from './newcaseform/newcaseform.component';

const serouting: Routes = [
  {path:'all-app-list',component:AllApplicationListComponent  },
  {
    path:'all-approved-list',component:AllApprovedListComponent
  },
  {
    path:'enquiry-form',component:NewcaseformComponent
  }
 
  
];



@NgModule({
  declarations: [AllApplicationListComponent, AllApprovedListComponent,  NewcaseformComponent],
  imports: [
    CommonModule,RouterModule.forChild(serouting)
  ]
})
export class SalsesexecutiveModule { }
