import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AllApprovedListComponent } from './all-approved-list/all-approved-list.component';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
>>>>>>> c5bbeffc94fee9c7dca3df0f0166a47d50510626

const oerouting: Routes = [
  
  {path:'allaplist',component:AllApprovedListComponent},
  
];
@NgModule({
  declarations: [ AllApprovedListComponent],
  imports: [
<<<<<<< HEAD
    CommonModule,RouterModule.forChild(oerouting),FormsModule 
=======
    CommonModule,RouterModule.forChild(oerouting)
>>>>>>> c5bbeffc94fee9c7dca3df0f0166a47d50510626
  ]
})
export class OperationexecutiveModule { }
