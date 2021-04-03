import { Component, OnInit ,Inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

import { DocumentService } from '../document.service';
import { ResidentRecord } from '../resident-record';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import Swal from 'sweetalert2'
import {Document} from '../document.model';


@Component({
  selector: 'app-brgy-clearance',
  templateUrl: './brgy-clearance.component.html',
  styleUrls: ['./brgy-clearance.component.css']
})
export class BrgyClearanceComponent {

  docu = new Document( 0,0,'');
  residentModel = new ResidentRecord('','','','','','','');
  isValid: boolean = false;
  isResident: boolean = false;
  valToCheck: any[] = [];
  condition: string;
  ngOnInit() {


  }


  public getRecords(){
    this.document.getRecords(btoa("checkres"))
          .subscribe((result:any[])=>{
              this.valToCheck = result;
              console.log(this.valToCheck);
        });

  }
  public addRecords(){
    this.document.newRecord(btoa("newrecord"), this.docu)
          .subscribe((result:any[])=>{
              this.valToCheck = result;
              console.log(this.valToCheck);
        });

  }

  public getRecordsDocu(){
    this.document.getRecords(btoa("getrecords"))
    .subscribe(result=>{
      console.log(result)
  });
  }

  clearFields(){
    this.residentModel.firstName = '';
    this.residentModel.midName = '';
    this.residentModel.lastName = '';
    this.residentModel.purpose = '';
    this.residentModel.houseNum = '';
    this.residentModel.street = '';
  }

  emptyRec(){
    this.docu.trans_purpose='';
    this.docu.docu_id=0;
    this.docu.res_id = 0;
    this.residentModel.firstName = '';
    this.residentModel.midName = '';
    this.residentModel.lastName = '';
    this.residentModel.purpose = '';
    this.residentModel.houseNum = '';
    this.residentModel.street = '';
  }

  resident: any = {};
//To document preview
  onSubmit(data){
    // add na lang ung barangay field pag may final db na
    this.inputCheck();

    if (this.isValid){
      this.getRecords();
      //insert to db
      // this.document.newRecord(btoa("newrecord"),data).subscribe((data: any) =>{console.log(data);});
      this.residentModel.brgy="Barangay Cabalan";
      //pass input value to service to another component

      for (let res of this.valToCheck){
        if( this.residentModel.firstName == res.res_fname
          &&  this.residentModel.lastName == res.res_lname
          && this.residentModel.midName  == res.res_mname )
          {
            this.docu.res_id = res.res_id;
            this.docu.docu_id = 1;
            this.docu.trans_purpose = this.residentModel.purpose;
          console.log(this.docu);
          console.log("match!")
          Swal.fire({
            title: 'Success!',
            text: "Document generated!",
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'View Document'
          }).then((result) => {
            if (result.isConfirmed) {
              this.addRecords();

              this.document.changeMessage(this.residentModel.lastName,this.residentModel.firstName,this.residentModel.midName,this.residentModel.houseNum,this.residentModel.street,this.residentModel.purpose,this.residentModel.brgy);

            //  this.router.navigate(["/brgyclearanceView"]);
            this.emptyRec();
            }
          })
          break;
        }else{
          //THERE IS A BUG HAHAHA
          // (this.residentModel.firstName != res.res_fname
          //   &&  this.residentModel.lastName != res.res_lname
          //   && this.residentModel.midName  != res.res_mname)
          console.log("not a resident!")
          Swal.fire(
            'Not a Resident!',
            'Please regiester or contact an authorized person.',
            'warning'
          )

        }
      }

    }else{
      Swal.fire(
        'Missing fields!',
        'Fill all the fields.',
        'warning'
      )

    }
  }

    //select from res_tbl to verify if the resident has records, can create another select function sa global.php, or magreturn ng new variable sa payload na nirereturn ng basic select
    //if so, proceed
    // Fields to be inserted to tbl_docissuance issueddoc_id	res_id	payment_id	doc_type	doc_purpose	doc_date_issued


    //else alert "Not a resident"

    //Insert Record IssuedDocs_tbl, transac_tbl and Payment_tbl
      // HERE




  //Chekck field values
  inputCheck(){
    if(this.residentModel.firstName && this.residentModel.lastName && this.residentModel.houseNum && this.residentModel.street && this.residentModel.midName && this.residentModel.purpose){
      this.isValid = true;
    }else{
      this.isValid = false;
    }
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


  isSidebarOpen=true;

  openSidebar() {
    this.isSidebarOpen = true;
  }
  closeSidebar() {
    this.isSidebarOpen = false;
  }


  logout(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to leave the system?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Log out'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Logged out',
          'Successfully logged out.',
          'success'
        )
        this.router.navigate(["/login"]);
      }
    })
  }
}

