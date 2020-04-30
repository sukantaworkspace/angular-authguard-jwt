import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { loanFormRoute } from './loanform/loanform.route';

const custFormState = [loanFormRoute];

@NgModule({
  imports: [RouterModule.forChild(custFormState)],
  exports: [RouterModule]
})
export class CustformsRoutingModule { }
