import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

import { DocumentService } from '../document.service';
import { Residency } from '../residency';

import Swal from 'sweetalert2'
@Component({
  selector: 'app-residency-cert',
  templateUrl: './residency-cert.component.html',
  styleUrls: ['./residency-cert.component.css']
})
export class ResidencyCertComponent {
  isValid: boolean;

  residentModel = new Residency('','','','','','');

  //To document preview
  onSubmit(){
    //Insert Record IssuedDocs_tbl and Payment_tbl ?? PENDING BECAUSE NO FINAL DB
      // HERE
      this.inputCheck();
      if (this.isValid){
        //insert to db???
        
        //pass input value to service to another component
        this.document.changeMessageResidency(this.residentModel.lastName,this.residentModel.firstName,this.residentModel.midName,this.residentModel.houseNum,this.residentModel.street, this.residentModel.purpose);
        Swal.fire({
          title: 'Success!',
          text: "Document generated!",
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'View Document'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(["/residencyView"]);
          }
        })

      }else{
        Swal.fire(
          'Missing fields!',
          'Fill all the fields.',
          'warning'
        )
      }



  }

  hasUnitNumber = false;

  states = [
    {name: 'Alabama', abbreviation: 'AL'},
    {name: 'Alaska', abbreviation: 'AK'},
    {name: 'American Samoa', abbreviation: 'AS'},
    {name: 'Arizona', abbreviation: 'AZ'},
    {name: 'Arkansas', abbreviation: 'AR'},
    {name: 'California', abbreviation: 'CA'}
  ];

  inputCheck(){
    if(this.residentModel.firstName && this.residentModel.lastName && this.residentModel.midName && this.residentModel.houseNum && this.residentModel.street && this.residentModel.purpose ){
      this.isValid = true;
    }else{
      this.isValid = false;
    }
  }




  //SIDENAV
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
  constructor(private fb: FormBuilder,public router : Router,  private document : DocumentService) {}

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
