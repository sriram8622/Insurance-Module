import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimComponent } from './container/claim.component';
import { CarClaimComponent } from './car-claim/car-claim.component';

const routes: Routes = [
  {
    path: '',
    component: ClaimComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'car-claim',
      //   component: CarClaimComponent
      // },
      {
        path: 'car-claim',
        component: CarClaimComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimRoutingModule { }
