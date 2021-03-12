import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {MatTableModule} from '@angular/material/table';

import { DocumentService } from '../document.service';



@Component({
  selector: 'app-barangay-clearance-pdf',
  templateUrl: './barangay-clearance-pdf.component.html',
  styleUrls: ['./barangay-clearance-pdf.component.css']
})
export class BarangayClearancePdfComponent implements OnInit {
  name:string="Yowwwww";
  lastn: string;
  firstn: string;
  midn: string;


  ngOnInit() {
    this.document.currentLast.subscribe(message => this.lastn = message);
    this.document.currentFirst.subscribe(message => this.firstn = message);
    this.document.currentMid.subscribe(message => this.midn = message);
  }

  title = 'html-to-pdf-angular-application';
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
pdf.save('new-file.pdf'); // Generated PDF
});
}

  constructor(private document : DocumentService) { }


}
