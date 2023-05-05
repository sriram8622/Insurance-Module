import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsuranceRoutingModule } from './insurance-routing.module';
import { InsuranceComponent } from './container/insurance.component';
import { RouterModule } from '@angular/router';
import { TwoWheelerComponent } from './components/two-wheeler/two-wheeler.component';
import { FourWheelerComponent } from './components/four-wheeler/four-wheeler.component';
import { SixWheelerComponent } from './components/six-wheeler/six-wheeler.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InsuranceComponent,
    TwoWheelerComponent,
    FourWheelerComponent,
    SixWheelerComponent
  ],
  imports: [
    CommonModule,
    InsuranceRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InsuranceModule { }
