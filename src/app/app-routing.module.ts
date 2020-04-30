import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './account';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./account/account.module').then((m) => m.AccountModule)
  },
  { path: 'custforms', loadChildren: () => import('./custforms/custforms.module').then(m => m.CustformsModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
