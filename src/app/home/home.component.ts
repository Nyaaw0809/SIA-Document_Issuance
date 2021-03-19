import { Component,NgModule } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

import { ChartType, ChartOptions,ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip,Color } from 'ng2-charts';
import {DocumentService} from '../document.service';
import { Book } from '../book.model';
import { Record } from '../record.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  token:string;
  books: Book[] = [];
  books$: any;
  record: Record[] = [];

  ngOnInit(){
    //Shows database content
    return this.document.getToken()
    .subscribe(data=>{console.log(data);});
  }
  //Line Chart
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Issued Documents' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions & { annotation ?: any }) = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];


  //Pie Chart
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Barangay', 'Clearance'], ['Certificate', 'of', 'Indigency'], ['Certificate', 'of', 'Residency']];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];


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


  constructor(private breakpointObserver: BreakpointObserver, public router : Router, private document : DocumentService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
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
