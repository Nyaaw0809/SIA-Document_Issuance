import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidencyPdfComponent } from './residency-pdf.component';

describe('ResidencyPdfComponent', () => {
  let component: ResidencyPdfComponent;
  let fixture: ComponentFixture<ResidencyPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidencyPdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidencyPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
