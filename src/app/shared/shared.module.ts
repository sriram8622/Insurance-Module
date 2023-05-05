import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from './components/quote/quote.component';
import { RouterModule } from '@angular/router';
import { SharedRoutingModule } from './shared-routing.module';



@NgModule({
  declarations: [QuoteComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedRoutingModule
  ],
  exports: [
    QuoteComponent
  ],
})
export class SharedModule { }
