import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {DocumentService} from '../document.service';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';
import { Record } from '../record.model';

@Component({
  selector: 'app-document-records',
  templateUrl: './document-records.component.html',
  styleUrls: ['./document-records.component.css']
})
export class DocumentRecordsComponent implements OnInit{
  ELEMENT_DATA: Record[] = [];
  displayedColumns: string[] = ['id', 'lastName', 'firstName', 'middleName', 'houseNum', 'street', 'purpose'];
  dataSource = new MatTableDataSource<Record>(this.ELEMENT_DATA);


  records: any;

  ngOnInit() {
    this.getRecords();
  }

  public getRecords(){
    //on dev pa, display the pulled data to table
    this.document.getRecords(btoa("getrecords"))
    .subscribe(result=>{this.dataSource.data=result;
    console.log(result)});
  }


  constructor(private breakpointObserver: BreakpointObserver, public router : Router, private document : DocumentService) { }

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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



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
