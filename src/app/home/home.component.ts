import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import {MatTableDataSource} from '@angular/material/table';
export interface Records {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: Records[] = [
  {position: 1, name: 'Johncel Gonzaga', weight: 'Barangay Clearance', symbol: 'School'},
  {position: 2, name: 'Allen Uy', weight: 'Certificate of Indigency', symbol: 'School'},
  {position: 3, name: 'Ranny Edejer', weight: 'Certificate of Indigency', symbol: 'Job Application'},
  {position: 4, name: 'Ayn Uson', weight: 'Barangay Clearance', symbol: 'School'},
  {position: 5, name: 'Mitchell Alop', weight: 'Certificate of Indigency', symbol: 'Job Application'},
  {position: 6, name: 'Ryunosuke Fujii', weight: 'Certificate of Indigency', symbol: 'School'},
  {position: 7, name: 'Austin Aranda', weight: 'Barangay Clearance', symbol: 'School'},
  {position: 8, name: 'Mark Fabro', weight: 'Certificate of Indigency', symbol: 'Job Application'},
  {position: 9, name: 'Levi Ackerman', weight: 'Certificate of Indigency', symbol: 'School'},
  {position: 10, name: 'Eren Yeager', weight: 'Barangay Clearance', symbol: 'Job Application'},
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor(private breakpointObserver: BreakpointObserver) {}
}
