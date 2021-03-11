import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarangayClearancePdfComponent } from './barangay-clearance-pdf.component';

describe('BarangayClearancePdfComponent', () => {
  let component: BarangayClearancePdfComponent;
  let fixture: ComponentFixture<BarangayClearancePdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarangayClearancePdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarangayClearancePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
