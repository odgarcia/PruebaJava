import { async, TestBed } from '@angular/core/testing';
import { CustomerAvailableProductCreateComponent } from './customer-available-product-create.component';
describe('CustomerAvailableProductCreateComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CustomerAvailableProductCreateComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CustomerAvailableProductCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=customer-available-product-create.component.spec.js.map