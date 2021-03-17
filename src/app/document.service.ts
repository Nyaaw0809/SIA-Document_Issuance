import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import {HttpClient} from '@angular/common/http';
import { ResidentRecord } from './resident-record';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  apiUrl = "http://localhost/sia-documentissuance/SIA-DocumentIssuance/docissuance-api/Z2V0Ym9va3M=";

  getToken(){
    return this._http.get(this.apiUrl);
  }

  private lastName = new BehaviorSubject<string>("");
  private firstName = new BehaviorSubject<string>("");
  private midName = new BehaviorSubject<string>("");
  private houseNum = new BehaviorSubject<string>("");
  private street = new BehaviorSubject<string>("");
  private purpose = new BehaviorSubject<string>("");
  private age = new BehaviorSubject<string>("");
  private gender = new BehaviorSubject<string>("");
  private status = new BehaviorSubject<string>("");
  currentLast = this.lastName.asObservable();
  currentFirst = this.firstName.asObservable();
  currentMid = this.midName.asObservable();
  currentHouseN = this.houseNum.asObservable();
  currentStreet = this.street.asObservable();
  currentPurpose = this.purpose.asObservable();
  currentAge = this.age.asObservable();
  currentGender = this.gender.asObservable();
  currentStatus = this.status.asObservable();




  // _url = ''
  constructor(private _http: HttpClient) { }

  changeMessage(lastn: string,firstn: string,midn: string,houseN: string,street: string,purpose: string){
    this.lastName.next(lastn);
    this.firstName.next(firstn);
    this.midName.next(midn);
    this.houseNum.next(houseN);
    this.street.next(street);
    this.purpose.next(purpose);
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

