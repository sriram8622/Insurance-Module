import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsuranceRoutingModule } from './insurance-routing.module';
import { InsuranceComponent } from './container/insurance.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    InsuranceComponent
  ],
  imports: [
    CommonModule,
    InsuranceRoutingModule
  ]
})
export class InsuranceModule { }
