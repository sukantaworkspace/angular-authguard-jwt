import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { homeRoute, loginRoute } from './';

//import { AccountComponent } from './account.component';

const accountState = [homeRoute, loginRoute];

//const routes: Routes = [{ path: '', component: AccountComponent }];

@NgModule({
  imports: [RouterModule.forChild(accountState)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
