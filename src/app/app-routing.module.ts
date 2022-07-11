import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartNumberComponent } from './components/part-number.component';
import { PartDetailComponent } from './components/partNo-detail.component';
import { AuthGuard } from './helper/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';


const routes: Routes = [
  { path: 'part-detail/:partNo', component: PartDetailComponent },
  { path: 'part-numbers', component: PartNumberComponent, canActivate:[AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'part-numbers', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
