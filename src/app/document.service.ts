import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import {HttpClient} from '@angular/common/http';
import { ResidentRecord } from './resident-record';
import { Observable } from 'rxjs';
import { Book } from './book.model';
import { Record } from './record.model';



@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  baseUrl="http://localhost/SIA-DocumentIssuanceSystem/docissuance-api/";
  // convert decrypt endpoints btoa

  getRecords(endpoint: any, condition?: any){
    //getRecords
    console.log(condition);
    return this._http.post<any[]>(this.baseUrl + endpoint, btoa(JSON.stringify(condition)));
  }


  check(endpoint: any, condition?: any){
    //getRecords
    condition = btoa(condition)
    return this._http.post<any[]>(this.baseUrl + endpoint,btoa(condition));
  }

  newrecord: any={};

  newRecord(endpoint:any, data:any){
   this.newrecord = JSON.stringify(data);
   console.log(data);
    return <any>(this._http.post(this.baseUrl + endpoint, JSON.stringify(data)));
  }



  private lastName = new BehaviorSubject<string>("");
  private firstName = new BehaviorSubject<string>("");
  private midName = new BehaviorSubject<string>("");
  private houseNum = new BehaviorSubject<string>("");
  private street = new BehaviorSubject<string>("");
  private purpose = new BehaviorSubject<string>("");
  private brgy = new BehaviorSubject<string>("");
  private age = new BehaviorSubject<string>("");
  private gender = new BehaviorSubject<string>("");
  private status = new BehaviorSubject<string>("");
  currentLast = this.lastName.asObservable();
  currentFirst = this.firstName.asObservable();
  currentMid = this.midName.asObservable();
  currentHouseN = this.houseNum.asObservable();
  currentStreet = this.street.asObservable();
  currentPurpose = this.purpose.asObservable();
  currentBrgy = this.brgy.asObservable();
  currentAge = this.age.asObservable();
  currentGender = this.gender.asObservable();
  currentStatus = this.status.asObservable();

  constructor(private _http: HttpClient) { }

  //pass form values to components
  changeMessage(lastn: string,firstn: string,midn: string,houseN: string,street: string,purpose: string,brgy: string){
    this.lastName.next(lastn);
    this.firstName.next(firstn);
    this.midName.next(midn);
    this.houseNum.next(houseN);
    this.street.next(street);
    this.purpose.next(purpose);
    this.brgy.next(brgy);
  }
//pass form values to components
  changeMessageIndigency(lastn: string,firstn: string,midn: string,age: string,gender: string,status: string, purpose:string){
    this.lastName.next(lastn);
    this.firstName.next(firstn);
    this.midName.next(midn);
    this.age.next(age);
    this.gender.next(gender);
    this.status.next(status);
    this.purpose.next(purpose);
  }
//pass form values to components
  changeMessageResidency(lastn: string,firstn: string,midn: string,houseN: string,street: string, purpose:string){
    this.lastName.next(lastn);
    this.firstName.next(firstn);
    this.midName.next(midn);
    this.houseNum.next(houseN);
    this.street.next(street);
    this.purpose.next(purpose);
  }

  }

