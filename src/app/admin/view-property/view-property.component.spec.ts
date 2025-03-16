import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminViewPropertyComponent } from './view-property.component';

// import { ViewPropertyComponent } from './view-property.component';

describe('ViewPropertyComponent', () => {
  let component: AdminViewPropertyComponent;
  let fixture: ComponentFixture<AdminViewPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminViewPropertyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
