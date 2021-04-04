import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrgyClearanceComponent } from './brgy-clearance/brgy-clearance.component';
import { IndigencyComponent } from './indigency/indigency.component';
import { ResidencyCertComponent } from './residency-cert/residency-cert.component';
import { LoginComponent } from './login/login.component';
import { BarangayClearancePdfComponent } from './barangay-clearance-pdf/barangay-clearance-pdf.component';
import { IndigencyPdfComponent } from './indigency-pdf/indigency-pdf.component';
import { ResidencyPdfComponent } from './residency-pdf/residency-pdf.component';
import { DocumentRecordsComponent } from './document-records/document-records.component';
import {DocumentRecordViewComponent} from './document-record-view/document-record-view.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },{
    path: 'home',
    component: HomeComponent
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
  ,
  {
    path: 'indigencyView',
    component: IndigencyPdfComponent
  }
  ,
  {
    path: 'residencyView',
    component: ResidencyPdfComponent
  }
  ,
  {
    path: 'documentRecords',
    component: DocumentRecordsComponent
  },
  {
    path: 'documentRecordView',
    component: DocumentRecordViewComponent
  }

];
IndigencyPdfComponent
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
