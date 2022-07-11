import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartNumberComponent } from './components/part-number.component';
import { PartDetailComponent } from './components/partNo-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';

@NgModule({
  declarations: [AppComponent, PartNumberComponent, PartDetailComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
