import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';

import { Opentrail } from './opentrail';

@Component({
    templateUrl: './app/opentrails/opentrail-rate-info.component.html'
})
export class OpentrailRateInfoComponent implements OnInit {
    @ViewChild(NgForm) opentrailForm: NgForm;

    errorMessage: string;
    opentrail: Opentrail;
    duration: FormControl;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.parent.data.subscribe(data => {
            this.opentrail = data['opentrail'];

            if (this.opentrailForm) {
                this.opentrailForm.reset();
            }
        });
    }
}