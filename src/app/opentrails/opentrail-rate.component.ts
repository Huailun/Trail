import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MessageService } from '../messages/message.service';


import { Opentrail } from './opentrail';
import { OpentrailService } from './opentrail.service';


@Component({
    templateUrl: './app/opentrails/opentrail-rate.component.html',
    styleUrls: ['./app/opentrails/opentrail-rate.component.css']
})

export class OpentrailRateComponent implements OnInit {
    pageTitle: string = 'Rate Opentrail';
    errorMessage: string;

    private currentOpentrail: Opentrail;
    private originalOpentrail: Opentrail;
    private dataIsValid: { [key: string]: boolean } = {};

    get isDirty(): boolean {
        return JSON.stringify(this.originalOpentrail) !== JSON.stringify(this.currentOpentrail);
    }

    get opentrail(): Opentrail {
        return this.currentOpentrail;
    }
    set opentrail(value: Opentrail) {
        this.currentOpentrail = value;
        // Clone the object to retain a copy
        this.originalOpentrail = Object.assign({}, value);
    }

    constructor(private route: ActivatedRoute,
        private router: Router,
        private opentrailService: OpentrailService,
        private messageService: MessageService) { }

    ngOnInit(): void {
        // Watch for changes to the resolve data
        this.route.data.subscribe(data => {
             this.onOpentrailRetrieved(data['opentrail']);
        });
    }

    onOpentrailRetrieved(opentrail: Opentrail): void {
        this.opentrail = opentrail;

        // Adjust the title
        if (this.opentrail.id === 0) {
            this.pageTitle = 'Rate Opentrail';
        } else {
            this.pageTitle = `Rate Opentrail: ${this.opentrail.name}`;
        }
    }

    deleteOpentrail(): void {
        if (this.opentrail.id === 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete(`${this.opentrail.name} was deleted`);
        } else {
            if (confirm(`Really delete the opentrail: ${this.opentrail.name}?`)) {
                this.opentrailService.deleteOpentrail(this.opentrail.id)
                    .subscribe(
                        () => this.onSaveComplete(`${this.opentrail.name} was deleted`),
                        (error: any) => this.errorMessage = <any>error
                    );
            }
        }
    }

    isValid(path: string): boolean {
        this.validate();
        if (path) {
            return this.dataIsValid[path];
        }
        return (this.dataIsValid &&
            Object.keys(this.dataIsValid).every(d => this.dataIsValid[d] === true));
    }

    saveOpentrail(): void {
        if (this.isValid(null)) {
            this.opentrailService.saveOpentrail(this.currentOpentrail)
                .subscribe(
                    () => this.onSaveComplete(`${this.opentrail.name} was saved`),
                    (error: any) => this.errorMessage = <any>error
                );
        } else {
            this.errorMessage = 'Please correct the validation errors.';
        }
    }

    onSaveComplete(message?: string): void {
        if (message) {
            this.messageService.addMessage(message);
        }
        this.reset();
        // Navigate back to the opentrail list
        this.router.navigate(['/opentrails']);
    }

    // Reset the data
    // Required after a save so the data is no longer seen as dirty.
    reset(): void {
        this.dataIsValid = null;
        this.currentOpentrail = null;
        this.originalOpentrail = null;
    }

    validate(): void {
        // Clear the validation object
        this.dataIsValid = {};

        // 'rate' tab
        if (this.opentrail.comment.length >= 3 ) {
            this.dataIsValid['rate'] = true;
        } else {
            this.dataIsValid['rate'] = false;
        }

        // 'tags' tab
        if (this.opentrail.foot &&
            this.opentrail.foot.length >= 3) {
            this.dataIsValid['tags'] = true;
        } else {
            this.dataIsValid['tags'] = false;
        }
    }
}

