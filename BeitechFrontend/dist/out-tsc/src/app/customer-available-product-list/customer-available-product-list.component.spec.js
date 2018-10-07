import { async, TestBed } from '@angular/core/testing';
import { CustomerAvailableProductListComponent } from './customer-available-product-list.component';
describe('CustomerAvailableProductListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CustomerAvailableProductListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CustomerAvailableProductListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=customer-available-product-list.component.spec.js.map