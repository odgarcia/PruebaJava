import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAvailableProductListComponent } from './customer-available-product-list.component';

describe('CustomerAvailableProductListComponent', () => {
  let component: CustomerAvailableProductListComponent;
  let fixture: ComponentFixture<CustomerAvailableProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAvailableProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAvailableProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
