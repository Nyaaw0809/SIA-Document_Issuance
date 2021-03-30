import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {MatTableModule} from '@angular/material/table';

import { DocumentService } from '../document.service';

import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-indigency-pdf',
  templateUrl: './indigency-pdf.component.html',
  styleUrls: ['./indigency-pdf.component.css']
})
export class IndigencyPdfComponent implements OnInit {

  myDate = Date.now();
  lastn: string;
  firstn: string;
  midn: string;
  age: string;
  gender: string;
  status: string;

  ngOnInit() {
    this.document.currentLast.subscribe(message => this.lastn = message);
    this.document.currentFirst.subscribe(message => this.firstn = message);
    this.document.currentMid.subscribe(message => this.midn = message);
    this.document.currentAge.subscribe(message => this.age = message);
    this.document.currentGender.subscribe(message => this.gender = message);
    this.document.currentStatus.subscribe(message => this.status = message);
  }

  public convetToPDF()
{
var data = document.getElementById('contentToConvert');
html2canvas(data).then(canvas => {
// Few necessary setting options
var imgWidth = 208;
var pageHeight = 295;
var imgHeight = canvas.height * imgWidth / canvas.width;
var heightLeft = imgHeight;

const contentDataURL = canvas.toDataURL('image/png')
let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
var position = 0;
pdf.addImage(contentDataURL, 0, position, imgWidth, imgHeight)
pdf.save(this.lastn + ', '+this.firstn +'-IndigencyCertificate.pdf'); // Generated PDF
});
}

  constructor(private document : DocumentService) { }

}
