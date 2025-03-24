import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerDetailsDialogComponent } from './seller-details-dialog.component';

describe('SellerDetailsDialogComponent', () => {
  let component: SellerDetailsDialogComponent;
  let fixture: ComponentFixture<SellerDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerDetailsDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
