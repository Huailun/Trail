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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/of");
var opentrail_service_1 = require("./opentrail.service");
var OpentrailResolver = (function () {
    function OpentrailResolver(opentrailService, router) {
        this.opentrailService = opentrailService;
        this.router = router;
    }
    OpentrailResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var id = route.params['id'];
        //id = parseInt(id);
        //let id = route.paramMap.get('id');
        if (isNaN(+id)) {
            console.log("Opentrail id was not a number: " + id);
            this.router.navigate(['/opentrails']);
            return Observable_1.Observable.of(null);
        }
        return this.opentrailService.getOpentrail(+id)
            .map(function (opentrail) {
            if (opentrail) {
                return opentrail;
            }
            console.log("Opentrail was not found: " + id);
            _this.router.navigate(['/opentrails']);
            return null;
        })
            .catch(function (error) {
            console.log("Retrieval error: " + error);
            _this.router.navigate(['/opentrails']);
            return Observable_1.Observable.of(null);
        });
    };
    return OpentrailResolver;
}());
OpentrailResolver = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [opentrail_service_1.OpentrailService,
        router_1.Router])
], OpentrailResolver);
exports.OpentrailResolver = OpentrailResolver;
//# sourceMappingURL=opentrail-resolver.service.js.map