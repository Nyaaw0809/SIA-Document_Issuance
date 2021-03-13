import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

import { DocumentService } from '../document.service';
import { Indigency } from '../indigency';

@Component({
  selector: 'app-indigency',
  templateUrl: './indigency.component.html',
  styleUrls: ['./indigency.component.css']
})
export class IndigencyComponent {
  addressForm = this.fb.group({

    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    midName: [null, Validators.required],
    gender: [null, Validators.required],
    age: [null, Validators.required],
    status: [null, Validators.required]
  });

  hasUnitNumber = false;

  states = [
    {name: 'Alabama', abbreviation: 'AL'},
    {name: 'Alaska', abbreviation: 'AK'},
    {name: 'American Samoa', abbreviation: 'AS'},
    {name: 'Arizona', abbreviation: 'AZ'},
    {name: 'Arkansas', abbreviation: 'AR'},
    {name: 'California', abbreviation: 'CA'},
    {name: 'Colorado', abbreviation: 'CO'},
    {name: 'Connecticut', abbreviation: 'CT'}

  ];


  residentModel = new Indigency('Uson','Ayn','Viloria','21','Male','Single');

//To document preview
  onSubmit(){
    //Insert Record IssuedDocs_tbl and Payment_tbl
      // HERE


    //pass input value to service to another component
    this.document.changeMessageIndigency(this.residentModel.lastName,this.residentModel.firstName,this.residentModel.midName,this.residentModel.age,this.residentModel.gender,this.residentModel.status);
    this.router.navigate(["/indigencyView"]);

  }

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
  constructor(private fb: FormBuilder,public router : Router, private document : DocumentService) {}

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
