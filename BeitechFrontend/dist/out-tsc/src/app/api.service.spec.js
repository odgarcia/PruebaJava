import { TestBed, inject } from '@angular/core/testing';
import { APIService } from './api.service';
describe('APIService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [APIService]
        });
    });
    it('should be created', inject([APIService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=api.service.spec.js.map