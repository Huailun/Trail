import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Opentrail } from './opentrail';

@Component({
    templateUrl: './app/opentrails/opentrail-detail.component.html'
})
export class OpentrailDetailComponent implements OnInit {
    pageTitle: string = 'Opentrail Detail';
    opentrail: Opentrail;
    errorMessage: string;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.opentrail = this.route.snapshot.data['opentrail'];
    }
}

