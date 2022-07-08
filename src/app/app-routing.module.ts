import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartNumberComponent } from './components/part-number.component';
import { PartDetailComponent } from './components/partNo-detail.component';
import { AuthGuard } from './helper/auth.guard';


const routes: Routes = [
  { path: 'part-detail/:partNo', component: PartDetailComponent },
  { path: 'part-numbers', component: PartNumberComponent, canActivate:[AuthGuard] },
  { path: '', redirectTo: '/part-numbers', pathMatch: 'full' },
  // { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
