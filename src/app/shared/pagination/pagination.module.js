"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var paginate_pipe_1 = require("./paginate.pipe");
var pagination_service_1 = require("./pagination.service");
var pagination_controls_component_1 = require("./pagination-controls.component");
var pagination_controls_directive_1 = require("./pagination-controls.directive");
var pagination_service_2 = require("./pagination.service");
exports.PaginationService = pagination_service_2.PaginationService;
var pagination_controls_component_2 = require("./pagination-controls.component");
exports.PaginationControlsComponent = pagination_controls_component_2.PaginationControlsComponent;
var pagination_controls_directive_2 = require("./pagination-controls.directive");
exports.PaginationControlsDirective = pagination_controls_directive_2.PaginationControlsDirective;
var paginate_pipe_2 = require("./paginate.pipe");
exports.PaginatePipe = paginate_pipe_2.PaginatePipe;
var NgxPaginationModule = (function () {
    function NgxPaginationModule() {
    }
    return NgxPaginationModule;
}());
NgxPaginationModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [
            paginate_pipe_1.PaginatePipe,
            pagination_controls_component_1.PaginationControlsComponent,
            pagination_controls_directive_1.PaginationControlsDirective
        ],
        providers: [pagination_service_1.PaginationService],
        exports: [paginate_pipe_1.PaginatePipe, pagination_controls_component_1.PaginationControlsComponent, pagination_controls_directive_1.PaginationControlsDirective]
    })
], NgxPaginationModule);
exports.NgxPaginationModule = NgxPaginationModule;
//# sourceMappingURL=pagination.module.js.map