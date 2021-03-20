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
  apiUrlSelect = "http://localhost/sia-documentissuance/SIA-DocumentIssuance/docissuance-api/Z2V0cmVjb3Jkcw==";
  apiUrlInsert = "http://localhost/sia-documentissuance/SIA-DocumentIssuance/docissuance-api/bmV3cmVjb3Jk";
  apiUrlUpdate = "http://localhost/sia-documentissuance/SIA-DocumentIssuance/docissuance-api/dXBkYXRlcmVjb3Jk";

  getToken(){
    //getRecords
    return this._http.get<Record[]>(this.apiUrlSelect);
  }

  newrecord: any={};
  newRecord(data:any){
    //notWorking pa
   this.newrecord = JSON.stringify(data);
   console.log("Raw: ",(data));
    console.log("Stringify: ",JSON.stringify(data));

    return <any>(this._http.post(this.apiUrlInsert, JSON.stringify(data)));
  }



  getBooks(){
    return this._http.get<Book[]>(this.apiUrlSelect);
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




  // _url = ''
  constructor(private _http: HttpClient) { }

  changeMessage(lastn: string,firstn: string,midn: string,houseN: string,street: string,purpose: string,brgy: string){
    this.lastName.next(lastn);
    this.firstName.next(firstn);
    this.midName.next(midn);
    this.houseNum.next(houseN);
    this.street.next(street);
    this.purpose.next(purpose);
    this.brgy.next(brgy);
  }

  changeMessageIndigency(lastn: string,firstn: string,midn: string,age: string,gender: string,status: string){
    this.lastName.next(lastn);
    this.firstName.next(firstn);
    this.midName.next(midn);
    this.age.next(age);
    this.gender.next(gender);
    this.status.next(status);
  }

  changeMessageResidency(lastn: string,firstn: string,midn: string,houseN: string,street: string){
    this.lastName.next(lastn);
    this.firstName.next(firstn);
    this.midName.next(midn);
    this.houseNum.next(houseN);
    this.street.next(street);
  }

  // pass(resRec: ResidentRecord){
  //  return this._http.post<any>(this._url, resRec);
 // }
  }

