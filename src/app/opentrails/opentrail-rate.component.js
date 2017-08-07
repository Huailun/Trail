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
var message_service_1 = require("../messages/message.service");
var opentrail_service_1 = require("./opentrail.service");
var OpentrailRateComponent = (function () {
    function OpentrailRateComponent(route, router, opentrailService, messageService) {
        this.route = route;
        this.router = router;
        this.opentrailService = opentrailService;
        this.messageService = messageService;
        this.pageTitle = 'Rate Opentrail';
        this.dataIsValid = {};
    }
    Object.defineProperty(OpentrailRateComponent.prototype, "isDirty", {
        get: function () {
            return JSON.stringify(this.originalOpentrail) !== JSON.stringify(this.currentOpentrail);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpentrailRateComponent.prototype, "opentrail", {
        get: function () {
            return this.currentOpentrail;
        },
        set: function (value) {
            this.currentOpentrail = value;
            // Clone the object to retain a copy
            this.originalOpentrail = Object.assign({}, value);
        },
        enumerable: true,
        configurable: true
    });
    OpentrailRateComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Watch for changes to the resolve data
        this.route.data.subscribe(function (data) {
            _this.onOpentrailRetrieved(data['opentrail']);
        });
    };
    OpentrailRateComponent.prototype.onOpentrailRetrieved = function (opentrail) {
        this.opentrail = opentrail;
        // Adjust the title
        if (this.opentrail.id === 0) {
            this.pageTitle = 'Rate Opentrail';
        }
        else {
            this.pageTitle = "Rate Opentrail: " + this.opentrail.name;
        }
    };
    OpentrailRateComponent.prototype.deleteOpentrail = function () {
        var _this = this;
        if (this.opentrail.id === 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete(this.opentrail.name + " was deleted");
        }
        else {
            if (confirm("Really delete the opentrail: " + this.opentrail.name + "?")) {
                this.opentrailService.deleteOpentrail(this.opentrail.id)
                    .subscribe(function () { return _this.onSaveComplete(_this.opentrail.name + " was deleted"); }, function (error) { return _this.errorMessage = error; });
            }
        }
    };
    OpentrailRateComponent.prototype.isValid = function (path) {
        var _this = this;
        this.validate();
        if (path) {
            return this.dataIsValid[path];
        }
        return (this.dataIsValid &&
            Object.keys(this.dataIsValid).every(function (d) { return _this.dataIsValid[d] === true; }));
    };
    OpentrailRateComponent.prototype.saveOpentrail = function () {
        var _this = this;
        if (this.isValid(null)) {
            this.opentrailService.saveOpentrail(this.currentOpentrail)
                .subscribe(function () { return _this.onSaveComplete(_this.opentrail.name + " was saved"); }, function (error) { return _this.errorMessage = error; });
        }
        else {
            this.errorMessage = 'Please correct the validation errors.';
        }
    };
    OpentrailRateComponent.prototype.onSaveComplete = function (message) {
        if (message) {
            this.messageService.addMessage(message);
        }
        this.reset();
        // Navigate back to the opentrail list
        this.router.navigate(['/opentrails']);
    };
    // Reset the data
    // Required after a save so the data is no longer seen as dirty.
    OpentrailRateComponent.prototype.reset = function () {
        this.dataIsValid = null;
        this.currentOpentrail = null;
        this.originalOpentrail = null;
    };
    OpentrailRateComponent.prototype.validate = function () {
        // Clear the validation object
        this.dataIsValid = {};
        // 'rate' tab
        if (this.opentrail.comment.length >= 3) {
            this.dataIsValid['rate'] = true;
        }
        else {
            this.dataIsValid['rate'] = false;
        }
        // 'tags' tab
        if (this.opentrail.foot &&
            this.opentrail.foot.length >= 3) {
            this.dataIsValid['tags'] = true;
        }
        else {
            this.dataIsValid['tags'] = false;
        }
    };
    return OpentrailRateComponent;
}());
OpentrailRateComponent = __decorate([
    core_1.Component({
        templateUrl: './app/opentrails/opentrail-rate.component.html',
        styleUrls: ['./app/opentrails/opentrail-rate.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        opentrail_service_1.OpentrailService,
        message_service_1.MessageService])
], OpentrailRateComponent);
exports.OpentrailRateComponent = OpentrailRateComponent;
//# sourceMappingURL=opentrail-rate.component.js.map