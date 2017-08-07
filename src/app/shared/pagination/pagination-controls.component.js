"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var template_1 = require("./template");
/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new core_1.EventEmitter();
        this._directionLinks = true;
        this._autoHide = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = !!value && value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = !!value && value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    return PaginationControlsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PaginationControlsComponent.prototype, "id", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PaginationControlsComponent.prototype, "maxSize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], PaginationControlsComponent.prototype, "directionLinks", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], PaginationControlsComponent.prototype, "autoHide", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PaginationControlsComponent.prototype, "previousLabel", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PaginationControlsComponent.prototype, "nextLabel", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PaginationControlsComponent.prototype, "screenReaderPaginationLabel", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PaginationControlsComponent.prototype, "screenReaderPageLabel", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PaginationControlsComponent.prototype, "screenReaderCurrentLabel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], PaginationControlsComponent.prototype, "pageChange", void 0);
PaginationControlsComponent = __decorate([
    core_1.Component({
        selector: 'pagination-controls',
        template: template_1.DEFAULT_TEMPLATE,
        styles: [template_1.DEFAULT_STYLES],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        encapsulation: core_1.ViewEncapsulation.None
    })
], PaginationControlsComponent);
exports.PaginationControlsComponent = PaginationControlsComponent;
//# sourceMappingURL=pagination-controls.component.js.map