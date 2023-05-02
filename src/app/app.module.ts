import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { SideNavComponent } from './core/components/side-nav/side-nav.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import { demoService } from './core/services/demo.service';
import { HttpClientModule } from '@angular/common/http';
import { QuoteComponent } from './shared/components/quote/quote.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [demoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
