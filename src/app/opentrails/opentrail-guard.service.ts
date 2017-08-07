import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { OpentrailRateComponent } from './opentrail-rate.component';

@Injectable()
export class OpentrailRateGuard implements CanDeactivate<OpentrailRateComponent> {

    canDeactivate(component: OpentrailRateComponent): boolean {
        if (component.isDirty) {
            let opentrailName = component.opentrail.starRating || 'New Rating';
            return confirm(`Leave this page and lose all changes to ${opentrailName}?`);
        }
        return true;
    }
}