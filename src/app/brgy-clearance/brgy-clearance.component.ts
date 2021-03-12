import { Component, OnInit ,Inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

import { DocumentService } from '../document.service';
import { ResidentRecord } from '../resident-record';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BarangayClearancePdfComponent } from '../barangay-clearance-pdf/barangay-clearance-pdf.component';


@Component({
  selector: 'app-brgy-clearance',
  templateUrl: './brgy-clearance.component.html',
  styleUrls: ['./brgy-clearance.component.css']
})
export class BrgyClearanceComponent {
  // addressForm = this.fb.group({
  //   firstName: [null, Validators.required],
  //   lastName: [null, Validators.required],
  //   midName: [null, Validators.required],
  //   address: [null, Validators.required],
  //   purpose: [null, Validators.required]
  // });

//services
  message: string;


  residentModel = new ResidentRecord('Uson','Ayn','Viloria','221','Paguio','School');

  ngOnInit() {
    this.document.currentLast.subscribe(message => this.residentModel.lastName = message)
    this.document.currentFirst.subscribe(message => this.residentModel.firstName = message)
    this.document.currentMid.subscribe(message => this.residentModel.midName = message)
  }


  onSubmit(){
    this.document.changeMessage(this.residentModel.lastName,this.residentModel.firstName,this.residentModel.midName);
    this.router.navigate(["/brgyclearanceView"]);

  }

  hasUnitNumber = false;

  states = [
    {name: 'Alabama', abbreviation: 'AL'},
    {name: 'Alaska', abbreviation: 'AK'},
    {name: 'American Samoa', abbreviation: 'AS'},
    {name: 'Arizona', abbreviation: 'AZ'}
  ];

  sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  constructor(private fb: FormBuilder,public router : Router, private document : DocumentService,public dialog: MatDialog) {}

  // onSubmit(): void {
  //   const dialogRef = this.dialog.open(BarangayClearancePdfComponent, {
  //     width: '1240px',
  //     height: '1754px',
  //     data: {lastname: this.residentModel.lastName, firstname: this.residentModel.firstName}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.residentModel.lastName = result;
  //   });
  //   console.log(this.residentModel)
  // }


  isSidebarOpen=true;

  openSidebar() {
    this.isSidebarOpen = true;
  }
  closeSidebar() {
    this.isSidebarOpen = false;
  }


  logout(){
    this.router.navigate(["/login"]);
  }
}

