import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { Opentrail } from './opentrail';
import { OpentrailService } from './opentrail.service';

@Injectable()
export class OpentrailResolver implements Resolve<Opentrail> {

    constructor(private opentrailService: OpentrailService,
                private router: Router) { }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<Opentrail> {
        let id = route.params['id'];
        //id = parseInt(id);
        //let id = route.paramMap.get('id');
        if (isNaN(+id)) {
            console.log(`Opentrail id was not a number: ${id}`);
            this.router.navigate(['/opentrails']);
            return Observable.of(null);
        }
        return this.opentrailService.getOpentrail(+id)
            .map(opentrail => {
                if (opentrail) {
                    return opentrail;
                }
                console.log(`Opentrail was not found: ${id}`);
                this.router.navigate(['/opentrails']);
                return null;
            })
            .catch(error => {
                console.log(`Retrieval error: ${error}`);
                this.router.navigate(['/opentrails']);
                return Observable.of(null);
            });
    }
}
