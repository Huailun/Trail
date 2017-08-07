import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Opentrail } from './opentrail';

@Component({
    templateUrl: './app/opentrails/opentrail-rate-tags.component.html'
})
export class OpentrailRateTagsComponent implements OnInit {
    errorMessage: string;
    newTags = '';
    opentrail: Opentrail;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.parent.data.subscribe(data => {
            this.opentrail = data['opentrail'];
        });
    }

    // Add the defined tags
    addTags(): void {
        let tagArray = this.newTags.split(',');
        this.opentrail.tags = this.opentrail.tags ? this.opentrail.tags.concat(tagArray) : tagArray;
        this.newTags = '';
    }

    // Remove the tag from the array of tags.
    removeTag(idx: number): void {
        this.opentrail.tags.splice(idx, 1);
    }
}