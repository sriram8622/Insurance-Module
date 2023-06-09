import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimComponent } from './container/claim.component';
import { CarClaimComponent } from './components/car-claim/car-claim.component';
import { BikeClaimComponent } from './components/bike-claim/bike-claim.component';
import { HealthClaimComponent } from './components/health-claim/health-claim.component';

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
      },
      {
        path: 'bike-claim',
        component: BikeClaimComponent
      },
      {
        path: 'health-claim',
        component: HealthClaimComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimRoutingModule { }
