import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandForSaleComponent } from './land-for-sale.component';

describe('LandForSaleComponent', () => {
  let component: LandForSaleComponent;
  let fixture: ComponentFixture<LandForSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandForSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandForSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
