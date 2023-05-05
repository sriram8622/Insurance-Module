import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInModuleComponent } from './sign-in-module.component';
import { SignInRoutingModule } from './sign-in-routing.module';



@NgModule({
  declarations: [
    SignInModuleComponent
  ],
  imports: [
    CommonModule,
    SignInRoutingModule
  ]
})
export class SignInModule { }
