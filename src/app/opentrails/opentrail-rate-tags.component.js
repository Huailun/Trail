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
var router_1 = require("@angular/router");
var OpentrailRateTagsComponent = (function () {
    function OpentrailRateTagsComponent(route) {
        this.route = route;
        this.newTags = '';
    }
    OpentrailRateTagsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.data.subscribe(function (data) {
            _this.opentrail = data['opentrail'];
        });
    };
    // Add the defined tags
    OpentrailRateTagsComponent.prototype.addTags = function () {
        var tagArray = this.newTags.split(',');
        this.opentrail.tags = this.opentrail.tags ? this.opentrail.tags.concat(tagArray) : tagArray;
        this.newTags = '';
    };
    // Remove the tag from the array of tags.
    OpentrailRateTagsComponent.prototype.removeTag = function (idx) {
        this.opentrail.tags.splice(idx, 1);
    };
    return OpentrailRateTagsComponent;
}());
OpentrailRateTagsComponent = __decorate([
    core_1.Component({
        templateUrl: './app/opentrails/opentrail-rate-tags.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], OpentrailRateTagsComponent);
exports.OpentrailRateTagsComponent = OpentrailRateTagsComponent;
//# sourceMappingURL=opentrail-rate-tags.component.js.map