"use strict";
var opentrail_service_1 = require("./opentrail.service");
var Rx_1 = require("rxjs/Rx");
describe("OpentrailService", function () {
    var opentrailService, mockHttp;
    beforeEach(function () {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete']);
        opentrailService = new opentrail_service_1.OpentrailService(mockHttp);
    });
    describe('delteOpentrail', function () {
        it('should remove the opentrail from the list', function () {
            var opentrail = { id: 10 };
            mockHttp.delete.and.returnValue(Rx_1.Observable.of(false));
            opentrailService.deleteOpentrail(3);
        });
    });
});
//# sourceMappingURL=opentrail.service.spec.js.map