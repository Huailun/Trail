import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

import { Opentrail } from './opentrail';


@Injectable()
export class OpentrailService {
    private baseUrl = 'api/opentrails.json';

    constructor(private http: Http){}


    getOpentrails(): Observable<Opentrail[]> {
        return this.http.get(this.baseUrl)
            .map(this.extractData)
            .do(data => console.log('getOpentrails: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getOpentrail(id: number): Observable<Opentrail> {
        if (id === 0) {
            return Observable.of(this.initializeOpentrail());
        };
        const url = `${this.baseUrl}/${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .do(data => console.log('getOpentrail: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    deleteOpentrail(id: number): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        const url = `${this.baseUrl}/${id}`;
        return this.http.delete(url, options)
            .do(data => console.log('deleteOpentrail: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    saveOpentrail(opentrail: Opentrail): Observable<Opentrail> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (opentrail.id === 0) {
            return this.createOpentrail(opentrail, options);
        }
        return this.updateOpentrail(opentrail, options);
    }

    
    private createOpentrail(opentrail: Opentrail, options: RequestOptions): Observable<Opentrail> {
        opentrail.id = undefined;
        return this.http.post(this.baseUrl, opentrail, options)
            .map(this.extractData)
            .do(data => console.log('createOpentrail: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private updateOpentrail(opentrail: Opentrail, options: RequestOptions): Observable<Opentrail> {
        const url = `${this.baseUrl}/${opentrail.id}`;
        return this.http.put(url, opentrail, options)
            .map(() => opentrail)
            .do(data => console.log('updateOpentrail: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

        private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }

        private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
        }
    

        initializeOpentrail(): Opentrail {
        // Return an initialized object
        return {
            id: 0,
            name: null,
            bicycle: null,
            foot: null,
            horse: null,
            wheelchair: null,
            comment: null,
            tags: [],
            starRating: null,
            map: null
        };
    }
}

