import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartNumberComponent } from './components/part-number.component';
import { PartDetailComponent } from './components/partNo-detail.component';

@NgModule({
  declarations: [
    AppComponent, PartNumberComponent, PartDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
