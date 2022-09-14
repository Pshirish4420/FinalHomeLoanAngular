import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprovedApplicationComponent } from './approved-application/approved-application.component';
import { RouterModule, Routes } from '@angular/router';

const dvrouting: Routes = [
  {path: 'approved-app',component:ApprovedApplicationComponent  },
    
];


@NgModule({
  declarations: [ApprovedApplicationComponent],
  imports: [
    CommonModule,RouterModule.forChild(dvrouting)
  ]
})
export class DocumentVerificationOfficerModule { }
