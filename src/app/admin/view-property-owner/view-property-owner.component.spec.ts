import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPropertyOwnerComponent } from './view-property-owner.component';

describe('ViewPropertyOwnerComponent', () => {
  let component: ViewPropertyOwnerComponent;
  let fixture: ComponentFixture<ViewPropertyOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPropertyOwnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPropertyOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
