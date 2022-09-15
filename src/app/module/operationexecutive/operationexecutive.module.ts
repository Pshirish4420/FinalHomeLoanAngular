import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AllApprovedListComponent } from './all-approved-list/all-approved-list.component';

const oerouting: Routes = [
  
  {path:'allaplist',component:AllApprovedListComponent},
  
];
@NgModule({
  declarations: [ AllApprovedListComponent],
  imports: [
    CommonModule,RouterModule.forChild(oerouting)
  ]
})
export class OperationexecutiveModule { }
