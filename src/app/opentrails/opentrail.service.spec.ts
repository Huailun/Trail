import { OpentrailService } from './opentrail.service';
import { Opentrail } from './opentrail';
import { Observable } from 'rxjs/Rx';

describe("OpentrailService", () => {
    let opentrailService: OpentrailService,
        mockHttp : any;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete'])
        opentrailService = new OpentrailService(mockHttp);
    });

    describe('delteOpentrail', () => {
        it('should remove the opentrail from the list', () => {
            var opentrail = { id:10 };
            mockHttp.delete.and.returnValue(Observable.of(false));


            opentrailService.deleteOpentrail( 3 );
        });
});
});
