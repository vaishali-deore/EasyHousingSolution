import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPropertyRegionComponent } from './view-property-region.component';

describe('ViewPropertyRegionComponent', () => {
  let component: ViewPropertyRegionComponent;
  let fixture: ComponentFixture<ViewPropertyRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPropertyRegionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPropertyRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
