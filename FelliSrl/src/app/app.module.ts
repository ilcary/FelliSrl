import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/shared/layout/header/header.component';
import { FullLayoutComponent } from './modules/shared/layout/full-layout/full-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FullLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
