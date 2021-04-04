import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentRecordViewComponent } from './document-record-view.component';

describe('DocumentRecordViewComponent', () => {
  let component: DocumentRecordViewComponent;
  let fixture: ComponentFixture<DocumentRecordViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentRecordViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentRecordViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
