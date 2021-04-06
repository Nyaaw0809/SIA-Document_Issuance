import { Component, OnInit, ViewChild } from '@angular/core';

import { DocumentService } from '../document.service';

import {MatTableDataSource} from '@angular/material/table';

import {MatPaginator} from '@angular/material/paginator';
@Component({
  selector: 'app-document-record-view',
  templateUrl: './document-record-view.component.html',
  styleUrls: ['./document-record-view.component.css']
})
export class DocumentRecordViewComponent implements OnInit {
  ELEMENT_DATA: any[] = [];
  displayedColumns: string[] = ['id', 'doctype', 'purpose','trans_date'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  lname: string;
  res_id:string;
  fname: string;
  mname: string;
  houseN: string;
  street: string;
  city: string;
  brgy: string;
  province: string;
  purpose: string;
  bday:string;
  name:string;
  address:string;
  gender:string;
  genderString:string;
  age:any;
  dob = new Date();
  valToCheck: any[] = [];
  constructor(private document : DocumentService) { }
  selectedData: any[];
  myDate = Date.now();

  public getRecords(){
    this.document.getRecords(btoa("getrecords"))
    .subscribe(result=>{
      this.dataSource.data=result;
      this.dataSource.paginator= this.paginator;
      console.log(result)
      console.log(this.dataSource.data)
  });
  }

  calculateAge(){
    this.dob = new Date(this.bday);
    var monthdiff = Date.now() - this.dob.getTime();
    var age_dt = new Date(monthdiff);
    var year = age_dt.getUTCFullYear();
    this.age = Math.abs(year - 1970);
    console.log(this.age);
  }

  stringifyGender(){
    console.log(this.gender)
    if(Number(this.gender) == 0){
      this.genderString = "Male";
    }else{
      this.genderString = "Female";
    }
  }
  ngOnInit() {
    this.getRecords();
    this.document.getRecords(btoa("getrecords"))
    .subscribe(result=>this.valToCheck = result)
    this.document.currentResId.subscribe(message => this.res_id = message);
    this.document.currentLast.subscribe(message => this.lname = message);
    this.document.currentFirst.subscribe(message => this.fname = message);
    this.document.currentMid.subscribe(message => this.mname = message);
    this.document.currentHouseN.subscribe(message => this.houseN = message);
    this.document.currentStreet.subscribe(message => this.street = message);
    this.document.currentCity.subscribe(message => this.city = message);
    this.document.currentProvince.subscribe(message => this.province = message);
    this.document.currentPurpose.subscribe(message => this.purpose = message);
    this.document.currentBrgy.subscribe(message => this.brgy = message);
    this.document.currentBday.subscribe(message => this.bday = message);
    this.document.currentGender.subscribe(message => this.gender = message);
    this.name = this.lname +", "+this.fname+" "+ this.mname;
    this.address=this.houseN+" "+this.street+" "+this.city+" "+this.province
    this.stringifyGender()
    this.findResident();
    this.calculateAge();
  }
numm:number = 0;

  findResident(){
    console.log("FUCKK")
    console.log(this.valToCheck)
    for (let res of this.valToCheck){
      console.log(res.trans_id)
      if( this.fname == res.res_fname
        &&  this.lname == res.res_lname
        && this.mname  == res.res_mname )
        {
          this.name = res.res_fname+ " " + res.res_mname + " " + res.res_lname;
          console.log(this.name)
      }else{
        console.log("cant find");
      }
    }
  }


  public getRecordsDocu(){
    this.document.getRecords(btoa("checkres"))
    .subscribe((result:any[])=>this.valToCheck = result)


  }





}
