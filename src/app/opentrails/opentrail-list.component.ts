import { Component, OnInit, Input }  from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Opentrail } from './opentrail';
import { OpentrailService } from './opentrail.service';

@Component({
    templateUrl: './app/opentrails/opentrail-list.component.html',
    styleUrls: ['./app/opentrails/opentrail-list.component.css']
})
export class OpentrailListComponent implements OnInit {
    pageTitle: string = 'Opentrail List';
    listFilter: string;
    errorMessage: string;
    opentrails: Opentrail[];

    constructor(private opentrailService: OpentrailService,
                private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.listFilter = this.route.snapshot.queryParams['filterBy'] || '';
        this.opentrailService.getOpentrails()
                .subscribe(opentrails => this.opentrails = opentrails,
                           error => this.errorMessage = <any>error);
    }
}
