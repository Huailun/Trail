import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { NgxPaginationModule } from '../shared/pagination/pagination.module';
import { OpentrailData }  from './opentrail-data';

import { OpentrailListComponent } from './opentrail-list.component';
import { OpentrailDetailComponent } from './opentrail-detail.component';
import { OpentrailRateComponent } from './opentrail-rate.component';
import { OpentrailRateInfoComponent } from './opentrail-rate-info.component';
import { OpentrailRateTagsComponent } from './opentrail-rate-tags.component';

import { OpentrailFilterPipe} from './opentrail-filter.pipe';
import { SafePipe} from '../shared/sanitizer.pipe';
import { OpentrailService } from './opentrail.service';
import { OpentrailResolver } from './opentrail-resolver.service';
import { OpentrailRateGuard } from './opentrail-guard.service';

import { SharedModule } from '../shared/shared.module';
import { NgTableComponent } from '../shared/table-sorting.component';
import { NgTableSortingDirective } from '../shared/table-sorting.directive';

@NgModule({
  imports: [
    SharedModule,
    NgxPaginationModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: OpentrailListComponent
      },
      {
        path: ':id',
        component: OpentrailDetailComponent,
        resolve: { opentrail: OpentrailResolver }
      },
      {
        path: ':id/edit',
        component: OpentrailRateComponent,
        resolve: { opentrail: OpentrailResolver },
        canDeactivate: [OpentrailRateGuard],
        children: [
          {
            path: '',
            redirectTo: 'info',
            pathMatch: 'full'
          },
          {
            path: 'info',
            component: OpentrailRateInfoComponent
          },
          {
            path: 'tags',
            component: OpentrailRateTagsComponent
          }
        ]
      }
    ])
  ],
  declarations: [
    OpentrailListComponent,
    OpentrailDetailComponent,
    OpentrailRateComponent,
    OpentrailRateInfoComponent,
    OpentrailRateTagsComponent,
    NgTableComponent,
    OpentrailFilterPipe,
    NgTableSortingDirective,
    SafePipe,
  ],
  providers: [
    OpentrailService,
    OpentrailResolver,
    OpentrailRateGuard,
  ],
})
export class OpentrailModule { 
  
}