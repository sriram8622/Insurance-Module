import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceComponent } from './container/insurance.component';
import { TwoWheelerComponent } from './components/two-wheeler/two-wheeler.component';
import { FourWheelerComponent } from './components/four-wheeler/four-wheeler.component';
import { SixWheelerComponent } from './components/six-wheeler/six-wheeler.component';

const routes: Routes = [
  {
    path: '',
    component: InsuranceComponent
  },
  {
    path: 'two-wheeler',
    component: TwoWheelerComponent  
  },
  {
    path: 'four-wheeler',
    component: FourWheelerComponent,
  },
  {
    path: 'six-wheeler',
    component: SixWheelerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsuranceRoutingModule { }
