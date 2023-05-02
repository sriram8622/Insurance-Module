import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import {  RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent,
    LayoutComponent
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
