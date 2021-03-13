import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentRecordsComponent } from './document-records.component';

describe('DocumentRecordsComponent', () => {
  let component: DocumentRecordsComponent;
  let fixture: ComponentFixture<DocumentRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
