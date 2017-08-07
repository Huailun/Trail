"use strict";
var pagination_service_1 = require("./pagination.service");
describe('PaginationService:', function () {
    var service;
    var instance;
    var ID = 'test';
    beforeEach(function () {
        service = new pagination_service_1.PaginationService();
        instance = {
            id: ID,
            itemsPerPage: 8,
            totalItems: 30,
            currentPage: 1
        };
    });
    it('should register the instance', function () {
        service.register(instance);
        expect(service.getInstance(ID)).toEqual(instance);
    });
    it('getInstance() should return a clone of the instance', function () {
        service.register(instance);
        expect(service.getInstance(ID)).not.toBe(instance);
    });
    it('setCurrentPage() should work for valid page number', function () {
        service.register(instance);
        service.setCurrentPage(ID, 3);
        expect(service.getCurrentPage(ID)).toBe(3);
    });
    it('setCurrentPage() should work for max page number', function () {
        service.register(instance);
        service.setCurrentPage(ID, 10);
        expect(service.getCurrentPage(ID)).toBe(10);
    });
    it('setCurrentPage() should not change page if new page is too high', function () {
        service.register(instance);
        service.setCurrentPage(ID, 11);
        expect(service.getCurrentPage(ID)).toBe(1);
    });
    it('setCurrentPage() should not change page if new page is less than 1', function () {
        service.register(instance);
        service.setCurrentPage(ID, 0);
        expect(service.getCurrentPage(ID)).toBe(1);
    });
    it('setTotalItems() should work for valid input', function () {
        service.register(instance);
        service.setTotalItems(ID, 500);
        expect(service.getInstance(ID).totalItems).toBe(500);
    });
    it('setTotalItems() should not work for negative values', function () {
        service.register(instance);
        service.setTotalItems(ID, -8);
        expect(service.getInstance(ID).totalItems).toBe(100);
    });
});
//# sourceMappingURL=pagination.service.spec.js.map