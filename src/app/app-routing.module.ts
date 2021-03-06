import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { BrgyClearanceComponent } from './brgy-clearance/brgy-clearance.component';
import { BusinessPermitComponent } from './business-permit/business-permit.component';
import { IndigencyComponent } from './indigency/indigency.component';
import { ResidencyCertComponent } from './residency-cert/residency-cert.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },{
    path: 'home',
    component: HomeComponent
  },{
    path: 'nav',
    component: NavComponent
  },
  {
    path: 'brgy-clearance',
    component: BrgyClearanceComponent
  }
  ,
  {
    path: 'business-permit',
    component: BusinessPermitComponent
  }
  ,
  {
    path: 'indigency',
    component: IndigencyComponent
  }
  ,
  {
    path: 'residency',
    component: ResidencyCertComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
