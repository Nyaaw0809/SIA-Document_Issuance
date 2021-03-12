import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import {HttpClient} from '@angular/common/http';
import { ResidentRecord } from './resident-record';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private lastName = new BehaviorSubject<string>("");
  private firstName = new BehaviorSubject<string>("");
  private midName = new BehaviorSubject<string>("");
  private houseNum = new BehaviorSubject<string>("");
  private street = new BehaviorSubject<string>("");
  private purpose = new BehaviorSubject<string>("");
  currentLast = this.lastName.asObservable();
  currentFirst = this.firstName.asObservable();
  currentMid = this.midName.asObservable();
  currentHouseN = this.houseNum.asObservable();
  currentStreet = this.street.asObservable();
  currentPurpose = this.purpose.asObservable();



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

  // pass(resRec: ResidentRecord){
  //  return this._http.post<any>(this._url, resRec);
 // }
  }

