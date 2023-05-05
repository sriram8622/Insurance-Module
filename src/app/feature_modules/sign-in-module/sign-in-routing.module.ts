import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInModuleComponent } from './sign-in-module.component';

const routes: Routes = [
  {
    path: '',
    component: SignInModuleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignInRoutingModule { }
