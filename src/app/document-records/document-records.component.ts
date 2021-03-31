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


@Component({
  selector: 'app-document-records',
  templateUrl: './document-records.component.html',
  styleUrls: ['./document-records.component.css']
})
export class DocumentRecordsComponent implements OnInit{
  ELEMENT_DATA: any[] = [];
  displayedColumns: string[] = ['id', 'lastName', 'firstName',  'middleName', 'doctype', 'houseNum', 'street', 'purpose','action'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  records: any;

  ngOnInit() {
    this.getRecords();

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
