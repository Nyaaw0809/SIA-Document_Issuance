import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-record-view',
  templateUrl: './document-record-view.component.html',
  styleUrls: ['./document-record-view.component.css']
})
export class DocumentRecordViewComponent implements OnInit {

  constructor() { }
  selectedData: any[];
  ngOnInit(): void {
  }

}
