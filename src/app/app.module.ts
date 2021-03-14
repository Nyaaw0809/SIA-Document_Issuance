import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

import { MaterialModule } from './material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrgyClearanceComponent } from './brgy-clearance/brgy-clearance.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { IndigencyComponent } from './indigency/indigency.component';
import { ResidencyCertComponent } from './residency-cert/residency-cert.component';
import { LoginComponent } from './login/login.component';
import { BarangayClearancePdfComponent } from './barangay-clearance-pdf/barangay-clearance-pdf.component';
import { IndigencyPdfComponent } from './indigency-pdf/indigency-pdf.component';
import { ResidencyPdfComponent } from './residency-pdf/residency-pdf.component';
import { DocumentRecordsComponent } from './document-records/document-records.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrgyClearanceComponent,
    IndigencyComponent,
    ResidencyCertComponent,
    LoginComponent,
    BarangayClearancePdfComponent,
    IndigencyPdfComponent,
    ResidencyPdfComponent,
    DocumentRecordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    ChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
