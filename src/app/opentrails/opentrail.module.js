"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var pagination_module_1 = require("../shared/pagination/pagination.module");
var opentrail_list_component_1 = require("./opentrail-list.component");
var opentrail_detail_component_1 = require("./opentrail-detail.component");
var opentrail_rate_component_1 = require("./opentrail-rate.component");
var opentrail_rate_info_component_1 = require("./opentrail-rate-info.component");
var opentrail_rate_tags_component_1 = require("./opentrail-rate-tags.component");
var opentrail_filter_pipe_1 = require("./opentrail-filter.pipe");
var sanitizer_pipe_1 = require("../shared/sanitizer.pipe");
var opentrail_service_1 = require("./opentrail.service");
var opentrail_resolver_service_1 = require("./opentrail-resolver.service");
var opentrail_guard_service_1 = require("./opentrail-guard.service");
var shared_module_1 = require("../shared/shared.module");
var table_sorting_component_1 = require("../shared/table-sorting.component");
var table_sorting_directive_1 = require("../shared/table-sorting.directive");
var OpentrailModule = (function () {
    function OpentrailModule() {
    }
    return OpentrailModule;
}());
OpentrailModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            pagination_module_1.NgxPaginationModule,
            common_1.CommonModule,
            router_1.RouterModule.forChild([
                {
                    path: '',
                    component: opentrail_list_component_1.OpentrailListComponent
                },
                {
                    path: ':id',
                    component: opentrail_detail_component_1.OpentrailDetailComponent,
                    resolve: { opentrail: opentrail_resolver_service_1.OpentrailResolver }
                },
                {
                    path: ':id/edit',
                    component: opentrail_rate_component_1.OpentrailRateComponent,
                    resolve: { opentrail: opentrail_resolver_service_1.OpentrailResolver },
                    canDeactivate: [opentrail_guard_service_1.OpentrailRateGuard],
                    children: [
                        {
                            path: '',
                            redirectTo: 'info',
                            pathMatch: 'full'
                        },
                        {
                            path: 'info',
                            component: opentrail_rate_info_component_1.OpentrailRateInfoComponent
                        },
                        {
                            path: 'tags',
                            component: opentrail_rate_tags_component_1.OpentrailRateTagsComponent
                        }
                    ]
                }
            ])
        ],
        declarations: [
            opentrail_list_component_1.OpentrailListComponent,
            opentrail_detail_component_1.OpentrailDetailComponent,
            opentrail_rate_component_1.OpentrailRateComponent,
            opentrail_rate_info_component_1.OpentrailRateInfoComponent,
            opentrail_rate_tags_component_1.OpentrailRateTagsComponent,
            table_sorting_component_1.NgTableComponent,
            opentrail_filter_pipe_1.OpentrailFilterPipe,
            table_sorting_directive_1.NgTableSortingDirective,
            sanitizer_pipe_1.SafePipe,
        ],
        providers: [
            opentrail_service_1.OpentrailService,
            opentrail_resolver_service_1.OpentrailResolver,
            opentrail_guard_service_1.OpentrailRateGuard,
        ],
    })
], OpentrailModule);
exports.OpentrailModule = OpentrailModule;
//# sourceMappingURL=opentrail.module.js.map