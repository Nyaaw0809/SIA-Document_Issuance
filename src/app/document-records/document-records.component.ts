import { Component, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {DocumentService} from '../document.service';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';
import { Record } from '../record.model';
import {MatPaginator} from '@angular/material/paginator';
import Swal from 'sweetalert2';

import {MatDialog} from '@angular/material/dialog';
import { DocumentRecordViewComponent } from '../document-record-view/document-record-view.component';


@Component({
  selector: 'app-document-records',
  templateUrl: './document-records.component.html',
  styleUrls: ['./document-records.component.css']
})
export class DocumentRecordsComponent implements OnInit{
  ELEMENT_DATA: any[] = [];
  displayedColumns: string[] = ['id', 'lastName', 'firstName',  'middleName', 'doctype', 'purpose','action'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  records: any;
  trans_rec: any[];
  trans_id:any;
  ngOnInit() {
    this.getRecords();
  }
  openRecordView(lname:string, fname:string, mname:string,houseN: string,street: string,brgy: string,city: string,province: string,purpose: string,bday:string) {
    this.document.passRecordView(lname,fname,mname,houseN,street,brgy,city,province,purpose,bday);
    const dialogRef = this.dialog.open(DocumentRecordViewComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Lastname: ${lname }`);
    });
  }

  public getRecords(){
    this.document.getRecords(btoa("getrecords"))
    .subscribe(result=>{
      this.dataSource.data=result;
      this.dataSource.paginator= this.paginator;
      console.log(result)
      console.log(this.dataSource.data)
  });
  }


  constructor(private breakpointObserver: BreakpointObserver, public router : Router, private document : DocumentService,public dialog: MatDialog) { }

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
