import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprovedListComponent } from './approved-list/approved-list.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { RouterModule, Routes } from '@angular/router';


const ahrouting: Routes = [
  {path: 'approvedlist',component:ApprovedListComponent  },
  {
    path:'emi',component:EmiCalculatorComponent
  }
 
  
];


@NgModule({
  declarations: [ApprovedListComponent, EmiCalculatorComponent],
  imports: [
    CommonModule,RouterModule.forChild(ahrouting)
  ]
})
export class AccountheadModule { }
