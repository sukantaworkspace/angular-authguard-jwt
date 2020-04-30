import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustformsRoutingModule } from './custforms-routing.module';
import { CustformsComponent } from './custforms.component';
import { LoanformComponent } from './loanform/loanform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoanformComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustformsRoutingModule
  ]
})
export class CustformsModule { }
