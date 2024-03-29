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
var forms_1 = require("@angular/forms");
var OpentrailRateInfoComponent = (function () {
    function OpentrailRateInfoComponent(route) {
        this.route = route;
    }
    OpentrailRateInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.data.subscribe(function (data) {
            _this.opentrail = data['opentrail'];
            if (_this.opentrailForm) {
                _this.opentrailForm.reset();
            }
        });
    };
    return OpentrailRateInfoComponent;
}());
__decorate([
    core_1.ViewChild(forms_1.NgForm),
    __metadata("design:type", forms_1.NgForm)
], OpentrailRateInfoComponent.prototype, "opentrailForm", void 0);
OpentrailRateInfoComponent = __decorate([
    core_1.Component({
        templateUrl: './app/opentrails/opentrail-rate-info.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], OpentrailRateInfoComponent);
exports.OpentrailRateInfoComponent = OpentrailRateInfoComponent;
//# sourceMappingURL=opentrail-rate-info.component.js.map