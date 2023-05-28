import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaimRoutingModule } from './claim-routing.module';
import { ClaimComponent } from './container/claim.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarClaimComponent } from './components/car-claim/car-claim.component';
import { BikeClaimComponent } from './components/bike-claim/bike-claim.component';


@NgModule({
  declarations: [
    ClaimComponent,
    CarClaimComponent,
    BikeClaimComponent
  ],
  imports: [
    CommonModule,
    ClaimRoutingModule,
    SharedModule
  ]
})
export class ClaimModule { }
