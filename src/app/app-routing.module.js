"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_guard_service_1 = require("./user/auth-guard.service");
var selective_strategy_service_1 = require("./selective-strategy.service");
var welcome_component_1 = require("./home/welcome.component");
var page_not_found_component_1 = require("./page-not-found.component");
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot([
                { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                {
                    path: 'opentrails',
                    canActivate: [auth_guard_service_1.AuthGuard],
                    data: { preload: true },
                    loadChildren: 'app/opentrails/opentrail.module#OpentrailModule'
                },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
            ], { preloadingStrategy: selective_strategy_service_1.SelectiveStrategy }) // , { enableTracing: true })
        ],
        providers: [selective_strategy_service_1.SelectiveStrategy],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map