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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
require("rxjs/add/observable/of");
var OpentrailService = (function () {
    function OpentrailService(http) {
        this.http = http;
        this.baseUrl = 'api/opentrails.json';
    }
    OpentrailService.prototype.getOpentrails = function () {
        return this.http.get(this.baseUrl)
            .map(this.extractData)
            .do(function (data) { return console.log('getOpentrails: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    OpentrailService.prototype.getOpentrail = function (id) {
        if (id === 0) {
            return Observable_1.Observable.of(this.initializeOpentrail());
        }
        ;
        var url = this.baseUrl + "/" + id;
        return this.http.get(url)
            .map(this.extractData)
            .do(function (data) { return console.log('getOpentrail: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    OpentrailService.prototype.deleteOpentrail = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var url = this.baseUrl + "/" + id;
        return this.http.delete(url, options)
            .do(function (data) { return console.log('deleteOpentrail: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    OpentrailService.prototype.saveOpentrail = function (opentrail) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        if (opentrail.id === 0) {
            return this.createOpentrail(opentrail, options);
        }
        return this.updateOpentrail(opentrail, options);
    };
    OpentrailService.prototype.createOpentrail = function (opentrail, options) {
        opentrail.id = undefined;
        return this.http.post(this.baseUrl, opentrail, options)
            .map(this.extractData)
            .do(function (data) { return console.log('createOpentrail: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    OpentrailService.prototype.updateOpentrail = function (opentrail, options) {
        var url = this.baseUrl + "/" + opentrail.id;
        return this.http.put(url, opentrail, options)
            .map(function () { return opentrail; })
            .do(function (data) { return console.log('updateOpentrail: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    OpentrailService.prototype.extractData = function (response) {
        var body = response.json();
        return body.data || {};
    };
    OpentrailService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    OpentrailService.prototype.initializeOpentrail = function () {
        // Return an initialized object
        return {
            id: 0,
            name: null,
            bicycle: null,
            foot: null,
            horse: null,
            wheelchair: null,
            comment: null,
            tags: [],
            starRating: null,
            map: null
        };
    };
    return OpentrailService;
}());
OpentrailService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], OpentrailService);
exports.OpentrailService = OpentrailService;
//# sourceMappingURL=opentrail.service.js.map