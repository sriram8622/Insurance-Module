import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from './components/quote/quote.component';
import { RouterModule } from '@angular/router';
import { SharedRoutingModule } from './shared-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehicleComponent } from './components/vehicle/vehicle.component';



@NgModule({
  declarations: [QuoteComponent,VehicleComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedRoutingModule
  ],
  exports: [
    QuoteComponent,
    VehicleComponent
  ],
})
export class SharedModule { }
