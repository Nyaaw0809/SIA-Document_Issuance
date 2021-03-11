import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { BrgyClearanceComponent } from './brgy-clearance/brgy-clearance.component';
import { IndigencyComponent } from './indigency/indigency.component';
import { ResidencyCertComponent } from './residency-cert/residency-cert.component';
import { LoginComponent } from './login/login.component';
import { BarangayClearancePdfComponent } from './barangay-clearance-pdf/barangay-clearance-pdf.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
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
    path: 'indigency',
    component: IndigencyComponent
  }
  ,
  {
    path: 'residency',
    component: ResidencyCertComponent
  } ,
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'brgyclearanceView',
    component: BarangayClearancePdfComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
