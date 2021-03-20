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
  message: any[];


  residentModel = new ResidentRecord('','','','','','','');

  ngOnInit() {

  }
  resident: any = {};
//To document preview
  onSubmit(data){
    //notWorking pa
    console.log(data);
    this.document.newRecord(data).subscribe((data: any) =>{console.log(data);});



    //Insert Record IssuedDocs_tbl and Payment_tbl
      // HERE
    //pass input value to service to another component
    this.document.changeMessage(this.residentModel.lastName,this.residentModel.firstName,this.residentModel.midName,this.residentModel.houseNum,this.residentModel.street,this.residentModel.purpose,this.residentModel.brgy);
    //this.router.navigate(["/brgyclearanceView"]);

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

