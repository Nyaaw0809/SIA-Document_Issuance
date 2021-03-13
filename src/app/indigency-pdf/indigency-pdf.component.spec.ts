import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndigencyPdfComponent } from './indigency-pdf.component';

describe('IndigencyPdfComponent', () => {
  let component: IndigencyPdfComponent;
  let fixture: ComponentFixture<IndigencyPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndigencyPdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndigencyPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
