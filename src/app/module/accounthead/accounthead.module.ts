import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprovedListComponent } from './approved-list/approved-list.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';



@NgModule({
  declarations: [ApprovedListComponent, EmiCalculatorComponent],
  imports: [
    CommonModule
  ]
})
export class AccountheadModule { }
