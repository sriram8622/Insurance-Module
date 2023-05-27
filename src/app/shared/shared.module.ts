import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from './components/quote/quote.component';
import { RouterModule } from '@angular/router';
import { SharedRoutingModule } from './shared-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { CardNavIconComponent } from './components/card-nav-icon/card-nav-icon.component';



@NgModule({
  declarations: [
    QuoteComponent,
    VehicleComponent,
    CardNavIconComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedRoutingModule
  ],
  exports: [
    QuoteComponent,
    VehicleComponent,
    CardNavIconComponent
  ],
})
export class SharedModule { }
