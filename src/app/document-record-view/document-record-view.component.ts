import { Component, OnInit } from '@angular/core';

import { DocumentService } from '../document.service';
@Component({
  selector: 'app-document-record-view',
  templateUrl: './document-record-view.component.html',
  styleUrls: ['./document-record-view.component.css']
})
export class DocumentRecordViewComponent implements OnInit {
  lname: string;
  fname: string;
  mname: string;
  houseN: string;
  street: string;
  city: string;
  brgy: string;
  province: string;
  purpose: string
  bday:string;
  name:string;
  address:string;
  valToCheck: any[] = [];
  constructor(private document : DocumentService) { }
  selectedData: any[];



  ngOnInit() {
    this.document.getRecords(btoa("getrecords"))
    .subscribe(result=>this.valToCheck = result)
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
    this.name = this.lname +", "+this.fname+" "+ this.mname;
    this.address=this.houseN+" "+this.street+" "+this.city+" "+this.province
    console.log(this.purpose);
    this.findResident();
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
