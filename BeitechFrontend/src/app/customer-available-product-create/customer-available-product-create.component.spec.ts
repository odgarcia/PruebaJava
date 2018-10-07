import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAvailableProductCreateComponent } from './customer-available-product-create.component';

describe('CustomerAvailableProductCreateComponent', () => {
  let component: CustomerAvailableProductCreateComponent;
  let fixture: ComponentFixture<CustomerAvailableProductCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAvailableProductCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAvailableProductCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
