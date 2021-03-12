import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import {HttpClient} from '@angular/common/http';
import { ResidentRecord } from './resident-record';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private lastName = new BehaviorSubject<string>("Last Name");
  private firstName = new BehaviorSubject<string>("First Name");
  private midName = new BehaviorSubject<string>("Middle Name");
  currentLast = this.lastName.asObservable();
  currentFirst = this.firstName.asObservable();
  currentMid = this.midName.asObservable();



  // _url = ''
  constructor(private _http: HttpClient) { }

  changeMessage(lastn: string,firstn: string,midn: string){
    this.lastName.next(lastn);
    this.firstName.next(firstn);
    this.midName.next(midn);
  }

  // pass(resRec: ResidentRecord){
  //  return this._http.post<any>(this._url, resRec);
 // }
  }

