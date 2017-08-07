"use strict";
var testing_1 = require("@angular/core/testing");
var testing_helpers_1 = require("./testing/testing-helpers");
var pagination_controls_component_1 = require("./pagination-controls.component");
var pagination_service_1 = require("./pagination.service");
var paginate_pipe_1 = require("./paginate.pipe");
var pagination_controls_directive_1 = require("./pagination-controls.directive");
describe('PaginatePipe:', function () {
    var pipe;
    var paginationService;
    var collection;
    beforeEach(function () {
        paginationService = new pagination_service_1.PaginationService();
        pipe = new paginate_pipe_1.PaginatePipe(paginationService);
        collection = [];
        for (var i = 0; i < 100; i++) {
            collection.push("item " + (i + 1));
        }
    });
    it('should truncate collection', function () {
        var result = pipe.transform(collection, [{ itemsPerPage: 10, currentPage: 1 }]);
        expect(result.length).toBe(10);
        expect(result[0]).toBe('item 1');
        expect(result[9]).toBe('item 10');
    });
    it('should register with the PaginationService', function () {
        pipe.transform(collection, [{ itemsPerPage: 10, currentPage: 1 }]);
        var instance = paginationService.getInstance();
        expect(instance).toBeDefined();
        expect(instance.itemsPerPage).toBe(10);
        expect(instance.totalItems).toBe(100);
    });
    it('should modify the same instance when called multiple times', function () {
        var instance;
        pipe.transform(collection, [{ itemsPerPage: 10, currentPage: 1 }]);
        instance = paginationService.getInstance();
        expect(instance.itemsPerPage).toBe(10);
        pipe.transform(collection, [{ itemsPerPage: 50, currentPage: 1 }]);
        instance = paginationService.getInstance();
        expect(instance.itemsPerPage).toBe(50);
    });
    it('should use default id if none specified', function () {
        var config = {
            itemsPerPage: 10,
            currentPage: 1
        };
        expect(paginationService.getInstance()).toEqual({});
        pipe.transform(collection, [config]);
        expect(paginationService.getInstance()).toBeDefined();
    });
    it('should not break when totalItems is specified for in-memory paging', function () {
        var config = {
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: 100
        };
        var result = pipe.transform(collection, [config]);
        expect(result.length).toBe(10);
        expect(result[0]).toBe('item 1');
        expect(result[9]).toBe('item 10');
    });
    describe('collection modification', function () {
        it('should detect simple push or splice without insert', function () {
            var config = {
                itemsPerPage: 10,
                currentPage: 1
            };
            collection = ['1', '2', '3'];
            var result1 = pipe.transform(collection, [config]);
            expect(result1.length).toBe(3);
            collection.push('4');
            var result2 = pipe.transform(collection, [config]);
            expect(result2.length).toBe(4);
            collection.splice(3, 1); // remove 4th
            var result3 = pipe.transform(collection, [config]);
            expect(result3.length).toBe(3);
            collection.shift(); // remove 1st
            var result4 = pipe.transform(collection, [config]);
            expect(result4.length).toBe(2);
        });
        it('should detect value changes in collection', function () {
            var config = {
                itemsPerPage: 10,
                currentPage: 1
            };
            collection = ['not changed', '2', '3'];
            pipe.transform(collection, [config]);
            var changed = 'changed';
            collection[0] = changed;
            var result = pipe.transform(collection, [config]);
            expect(result[0]).toBe(changed);
        });
    });
    it('should allow independent instances by setting an id', function () {
        var config1 = {
            id: 'first_one',
            itemsPerPage: 10,
            currentPage: 1
        };
        var config2 = {
            id: 'other_one',
            itemsPerPage: 50,
            currentPage: 2
        };
        var result1 = pipe.transform(collection, [config1]);
        var result2 = pipe.transform(collection, [config2]);
        expect(result1.length).toBe(10);
        expect(result1[0]).toBe('item 1');
        expect(result1[9]).toBe('item 10');
        expect(result2.length).toBe(50);
        expect(result2[0]).toBe('item 51');
        expect(result2[49]).toBe('item 100');
    });
    describe('server-side pagination', function () {
        var config;
        beforeEach(function () {
            config = {
                itemsPerPage: 10,
                currentPage: 1,
                totalItems: 500
            };
        });
        it('should truncate collection', function () {
            collection = collection.slice(0, 10);
            var result = pipe.transform(collection, [config]);
            expect(result.length).toBe(10);
            expect(result[0]).toBe('item 1');
            expect(result[9]).toBe('item 10');
        });
        it('should display page 2', function () {
            collection = collection.slice(10, 20);
            config.currentPage = 2;
            var result = pipe.transform(collection, [config]);
            expect(result.length).toBe(10);
            expect(result[0]).toBe('item 11');
            expect(result[9]).toBe('item 20');
        });
    });
    it('should return identical array for the same input values', function () {
        var config = {
            id: 'first_one',
            itemsPerPage: 10,
            currentPage: 1
        };
        var result1 = pipe.transform(collection, [config]);
        var result2 = pipe.transform(collection, [config]);
        expect(result1 === result2).toBe(true);
    });
    describe('unexpected input:', function () {
        it('should pass through non-array inputs', function () {
            var input;
            input = '';
            expect(pipe.transform(input, { itemsPerPage: 10 })).toBe(input, 'string');
            input = 1;
            expect(pipe.transform(input, { itemsPerPage: 10 })).toBe(input, 'number');
            input = {};
            expect(pipe.transform(input, { itemsPerPage: 10 })).toBe(input, 'object');
            input = null;
            expect(pipe.transform(input, { itemsPerPage: 10 })).toBe(input, 'null');
            input = undefined;
            expect(pipe.transform(input, { itemsPerPage: 10 })).toBe(input, 'undefined');
        });
        it('should work with a string as itemsPerPage arg', function () {
            var result = pipe.transform(collection, { itemsPerPage: '10', currentPage: 2 });
            expect(result.length).toBe(10);
            expect(result[0]).toBe('item 11');
            expect(result[9]).toBe('item 20');
        });
        it('should work with a string as currentPage arg', function () {
            var result = pipe.transform(collection, { itemsPerPage: 10, currentPage: '2' });
            expect(result.length).toBe(10);
            expect(result[0]).toBe('item 11');
            expect(result[9]).toBe('item 20');
        });
        it('should work with itemsPerPage and currentPage as accessors', function () {
            var Config = (function () {
                function Config() {
                }
                Object.defineProperty(Config.prototype, "itemsPerPage", {
                    get: function () { return 1; },
                    set: function (val) { },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Config.prototype, "currentPage", {
                    get: function () { return 1; },
                    set: function (val) { },
                    enumerable: true,
                    configurable: true
                });
                return Config;
            }());
            var config = new Config();
            expect(function () { return pipe.transform(collection, config); }).not.toThrow();
        });
    });
    describe('DOM tests:', function () {
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [pagination_controls_component_1.PaginationControlsComponent, pagination_controls_directive_1.PaginationControlsDirective, testing_helpers_1.ComponentTestComponent, paginate_pipe_1.PaginatePipe],
                providers: [pagination_service_1.PaginationService],
            });
        });
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.compileComponents();
        }));
        it('should display the correct number of items per page (10)', testing_1.async(function () {
            var fixture = testing_1.TestBed.createComponent(testing_helpers_1.ComponentTestComponent);
            fixture.detectChanges();
            expect(testing_helpers_1.getListItems(fixture).length).toBe(10);
        }));
        it('should display the correct number of items per page (50)', testing_1.async(function () {
            var fixture = testing_1.TestBed.createComponent(testing_helpers_1.ComponentTestComponent);
            var instance = fixture.componentInstance;
            instance.config.itemsPerPage = 50;
            fixture.detectChanges();
            expect(testing_helpers_1.getListItems(fixture).length).toBe(50);
        }));
        it('should display the correct number of items, after itemsPerPage & currentPage change', testing_1.async(function () {
            var fixture = testing_1.TestBed.createComponent(testing_helpers_1.ComponentTestComponent);
            var instance = fixture.componentInstance;
            instance.config.itemsPerPage = 10;
            fixture.detectChanges();
            expect(testing_helpers_1.getListItems(fixture).length).toBe(10);
            var expected = ['item 4', 'item 5', 'item 6'];
            instance.config.itemsPerPage = 3;
            instance.config.currentPage = 2;
            fixture.detectChanges();
            expect(testing_helpers_1.getListItemsText(fixture)).toEqual(expected);
            expect(testing_helpers_1.getListItems(fixture).length).toBe(3);
        }));
        it('should display the correct items on init', testing_1.async(function () {
            var fixture = testing_1.TestBed.createComponent(testing_helpers_1.ComponentTestComponent);
            var instance = fixture.componentInstance;
            instance.config.itemsPerPage = 3;
            fixture.detectChanges();
            var expected = ['item 1', 'item 2', 'item 3'];
            expect(testing_helpers_1.getListItemsText(fixture)).toEqual(expected);
        }));
        it('should not mutate the collection', testing_1.async(function () {
            var fixture = testing_1.TestBed.createComponent(testing_helpers_1.ComponentTestComponent);
            var instance = fixture.componentInstance;
            expect(instance.collection.length).toBe(100);
            instance.config.itemsPerPage = 50;
            fixture.detectChanges();
            expect(instance.collection.length).toBe(100);
            instance.config.itemsPerPage = 75;
            fixture.detectChanges();
            expect(instance.collection.length).toBe(100);
        }));
        it('should default to page 1 if currentPage not set', testing_1.async(function () {
            var fixture = testing_1.TestBed.createComponent(testing_helpers_1.ComponentTestComponent);
            var instance = fixture.componentInstance;
            instance.config.itemsPerPage = 3;
            instance.config.currentPage = undefined;
            fixture.detectChanges();
            var expected = ['item 1', 'item 2', 'item 3'];
            expect(testing_helpers_1.getListItemsText(fixture)).toEqual(expected);
        }));
    });
});
//# sourceMappingURL=paginate.pipe.spec.js.map