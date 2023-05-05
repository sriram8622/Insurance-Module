import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import {  RouterModule } from '@angular/router';
import { SignUpModuleComponent } from './components/header/sign-up-module/sign-up-module.component';
import { SignInModuleComponent } from './components/header/sign-in-module/sign-in-module.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent,
    LayoutComponent,
    SignUpModuleComponent,
    SignInModuleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    LayoutComponent,
    SideNavComponent,
  ],
})
export class CoreModule { }
