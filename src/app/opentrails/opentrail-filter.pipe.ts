import {  PipeTransform, Pipe } from '@angular/core';
import { Opentrail } from './opentrail';

@Pipe({
    name: 'opentrailFilter'
})
export class OpentrailFilterPipe implements PipeTransform {

    transform(value: Opentrail[], filterBy: string): Opentrail[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((opentrail: Opentrail) =>
            opentrail.name.toLocaleLowerCase().indexOf(filterBy) !== -1,
            ) : value;
    }
}
