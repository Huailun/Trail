import { InMemoryDbService, InMemoryBackendConfig, createErrorResponse, HttpMethodInterceptorArgs, createObservableResponse } from 'angular-in-memory-web-api';

import { Opentrail } from './opentrail';

export class OpentrailData implements InMemoryDbService, InMemoryBackendConfig {
    createDb() {
        let opentrails: Opentrail[] = [
            {
                id: 1,
                name: 'Foothills Trail',
                bicycle: 'yes',
                foot: 'yes',
                horse: 'yes',
                wheelchair: 'no',
                starRating: 3.8,
                tags: ["bicycle", "foot", "horse"],
                map: 'http://docs.google.com/gview?url=https://www.cabq.gov/parksandrecreation/documents/foothills_24x36.pdf&embedded=true',
                comment: ''
            },
            {
                id: 2,
                name: 'Michial Emery Trail',
                bicycle: 'yes',
                foot: 'yes',
                horse: 'yes',
                wheelchair: 'no',
                starRating: 3.8,
                tags: ["bicycle", "foot", "horse"],
                map: 'http://docs.google.com/gview?url=https://www.cabq.gov/parksandrecreation/documents/foothills-working-copper.pdf&embedded=true',
                comment: ''
            },
            {
                id: 3,
                name: 'Bear Canyon Trail',
                bicycle: 'yes',
                foot: 'yes',
                horse: 'yes',
                wheelchair: 'no',
                starRating: 3.8,
                tags: ["bicycle", "foot", "horse"],
                map: 'https://www.google.com/maps/embed/v1/streetview?key=AIzaSyDrsIpQYMjNIyCTo8_Zk0mITEC4YYIdgyI&location=35.1460386,-106.4829918',
                comment: ''
                
            },
            {
                id: 4,
                name: 'Cottonwood Springs Trail',
                bicycle: 'no',
                foot: 'yes',
                horse: 'no',
                wheelchair: 'yes',
                starRating: 3.8,
                tags: ["bicycle", "foot"],
                map: 'http://docs.google.com/gview?url=https://www.cabq.gov/parksandrecreation/documents/elena.pdf&embedded=true',
                comment: ''
                
            },
            {
                id: 5,
                name: 'Domingo Baca Trail',
                bicycle: 'no',
                foot: 'yes',
                horse: 'yes',
                wheelchair: 'no',
                starRating: 3.8,
                map: 'http://docs.google.com/gview?url=https://www.cabq.gov/parksandrecreation/documents/embudito.pdf&embedded=true',
                tags: ["foot", "horse"],
                comment: ''
                
            },
            {
                id: 6,
                name: 'Embudito Trail',
                bicycle: 'no',
                foot: 'yes',
                horse: 'yes',
                wheelchair: 'no',
                starRating: 3.8,
                tags: ["foot", "horse"],
                map: 'http://docs.google.com/gview?url=https://www.cabq.gov/parksandrecreation/documents/embudito.pdf&embedded=true',
                comment: ''
                
            },
            {
                id: 7,
                name: 'Embudo Horse Bypass',
                bicycle: 'no',
                foot: 'yes',
                horse: 'yes',
                wheelchair: 'no',
                starRating: 3.8,
                tags: ["foot", "horse"],
                map: 'http://docs.google.com/gview?url=https://www.cabq.gov/parksandrecreation/documents/embudito.pdf&embedded=true',
                comment: ''
                
            },
            {
                id: 8,
                name: 'Embudo Trail',
                bicycle: 'yes',
                foot: 'yes',
                horse: 'yes',
                wheelchair: 'no',
                starRating: 3.8,
                tags: ["foot", "horse"],
                map: 'http://docs.google.com/gview?url=https://www.cabq.gov/parksandrecreation/documents/embudito.pdf&embedded=true',
                comment: 'A good walking distance to crest.'
                
            },
            {
                id: 9,
                name: 'Hawk Watch Trail',
                bicycle: 'no',
                foot: 'yes',
                horse: 'yes',
                wheelchair: 'no',
                starRating: 4.2,
                tags: ["foot", "horse"],
                map: 'http://docs.google.com/gview?url=https://www.cabq.gov/parksandrecreation/documents/foothills-working-menaul.pdf&embedded=true',
                comment: ''
            },
            {
                id: 10,
                name: "Hilldale Trail",
                bicycle: "yes",
                foot: "yes",
                horse: "yes",
                wheelchair: "no",
                starRating: 4.5,
                tags: ["bicycle", "foot", "horse"],
                map: 'https://www.google.com/maps/embed/v1/streetview?key=AIzaSyDrsIpQYMjNIyCTo8_Zk0mITEC4YYIdgyI&location=35.073931646908946,-106.484288785043',
                comment: ''

            },
            {
                id: 11,
                name: "Menaul Trails",
                bicycle: "yes",
                foot: "yes",
                horse: "yes",
                wheelchair: "no",
                starRating: 3.1,
                tags: ["bicycle", "foot", "horse"],
                map: 'http://docs.google.com/gview?url=https://www.cabq.gov/parksandrecreation/documents/foothills-working-menaul.pdf&embedded=true',
                comment: ''
            },
            {
                id: 12,
                name: "South Lomas Channel",
                bicycle: "yes",
                foot: "yes",
                horse: "yes",
                wheelchair: "no",
                tags: ["bicycle", "foot", "horse"],
                starRating: 2.5,
                map: 'https://www.google.com/maps/embed/v1/streetview?key=AIzaSyDrsIpQYMjNIyCTo8_Zk0mITEC4YYIdgyI&location=35.08604049962519,-106.48492098049819',
                comment: ''

            },
            {
                id: 13,
                name: "Golden",
                bicycle: "unkown", 
                foot: "unkown", 
                horse: "unkown", 
                wheelchair: "unkown",
                starRating: 2.5,
                tags: [],
                map: 'http://docs.google.com/gview?url=https://www.cabq.gov/parksandrecreation/documents/Golden%20-%20hillshade%20nov.pdf&embedded=true',
                comment: ''
            },
            {
                id: 14,
                name: "San Antonio",
                bicycle: "unkown", 
                foot: "unkown", 
                horse: "unkown", 
                wheelchair: "unkown",
                starRating: 2.5,
                tags: [],
                map: 'http://docs.google.com/gview?url=https://www.cabq.gov/parksandrecreation/documents/San%20Antonito%20-%20hillshade.pdf&embedded=true',
                comment: ''

            },
            {
                id: 15,
                name: "Juan Tomas",
                bicycle: "unkown", 
                foot: "unkown", 
                horse: "unkown", 
                wheelchair: "unkown",
                starRating: 1.5,
                tags: ["unkown"],
                map: 'http://docs.google.com/gview?url=https://www.cabq.gov/parksandrecreation/documents/Juan%20Tomas%20-%20hillshade.pdf&embedded=true',
                comment: ''

            },
            {
                id: 16,
                name: 'Three Gun Springs Trail',
                bicycle: 'no',
                foot: 'yes',
                horse: 'yes',
                wheelchair: 'no',
                starRating: 3.8,
                map: 'http://docs.google.com/gview?url=https://www.cabq.gov/parksandrecreation/documents/foothills_24x36.pdf&embedded=true',
                tags: ["foot", "horse"],
                comment: ''
            },
            {
                id: 17,
                name: 'Piedra Lisa Loop',
                bicycle: 'yes',
                foot: 'yes',
                horse: 'yes',
                wheelchair: 'no',
                starRating: 3.8,
                tags: ["bicycle", "foot", "horse"],
                map: 'http://docs.google.com/gview?url=https://www.cabq.gov/parksandrecreation/documents/Piedra_lisa_standalone.pdf&embedded=true',
                comment: ''
            },
            {
                id: 18,
                name: "Placitas",
                bicycle: "unkown", 
                foot: "unkown", 
                horse: "unkown", 
                wheelchair: "unkown",
                starRating: 2.5,
                tags: [],
                map: 'http://docs.google.com/gview?url=https://www.cabq.gov/parksandrecreation/documents/Placitas%20-%20hillshade.pdf&embedded=true',
                comment: ''

            },
            {
                id: 19,
                name: 'Hilldale Loop',
                bicycle: 'yes',
                foot: 'yes',
                horse: 'yes',
                wheelchair: 'no',
                starRating: 3.8,
                tags: ["bicycle", "foot", "horse"],
                map: 'https://www.google.com/maps/embed/v1/streetview?key=AIzaSyDrsIpQYMjNIyCTo8_Zk0mITEC4YYIdgyI&location=35.07351478938495,-106.48305237209429',
                comment: ''
                
            },
            {
                id: 20,
                name: 'Pino Trail',
                bicycle: 'no',
                foot: 'yes',
                horse: 'no',
                wheelchair: 'no',
                starRating: 3.8,
                tags: ["foot"],
                map: 'https://www.google.com/maps/embed/v1/streetview?key=AIzaSyDrsIpQYMjNIyCTo8_Zk0mITEC4YYIdgyI&location=35.1634135,-106.4695971',
                comment: ''
            },
            {
                id: 21,
                name: 'Simms Road Trail',
                bicycle: 'yes',
                foot: 'yes',
                horse: 'yes',
                wheelchair: 'no',
                starRating: 3.8,
                tags: ["bicycle", "foot", "horse"],
                map: 'https://www.google.com/maps/embed/v1/streetview?key=AIzaSyDrsIpQYMjNIyCTo8_Zk0mITEC4YYIdgyI&location=35.16169829939953,-106.4738012131743',
                comment: ''
                
            },
            {
                id: 22,
                name: 'Gutierrez Canyon',
                bicycle: "unkown", 
                foot: "unkown", 
                horse: "unkown", 
                wheelchair: "unkown",
                starRating: 3.8,
                tags: [],
                map: 'https://www.google.com/maps/embed/v1/streetview?key=AIzaSyDrsIpQYMjNIyCTo8_Zk0mITEC4YYIdgyI&location=35.13195533455732,-106.36417316666709',
                comment: ''
                
            },
            {
                id: 23,
                name: '344',
                bicycle: 'yes',
                foot: 'yes',
                horse: 'yes',
                wheelchair: '',
                starRating: 3.8,
                tags: ["bicycle", "foot", "horse"],
                map: 'https://www.google.com/maps/embed/v1/streetview?key=AIzaSyDrsIpQYMjNIyCTo8_Zk0mITEC4YYIdgyI&location=35.06561630439726,-106.47982442131743',
                comment: ''
                
            },
            {
                id: 24,
                name: '141',
                bicycle: 'no',
                foot: 'yes',
                horse: 'no',
                wheelchair: '',
                starRating: 3.8,
                tags: ["foot"],
                map: 'https://www.google.com/maps/embed/v1/streetview?key=AIzaSyDrsIpQYMjNIyCTo8_Zk0mITEC4YYIdgyI&location=35.16176854965114,-106.46976941285152',
                comment: ''
            },
            {
                id: 25,
                name: '305a',
                bicycle: 'yes',
                foot: 'yes',
                horse: 'yes',
                wheelchair: 'no',
                starRating: 3.8,
                tags: ["bicycle", "foot", "horse"],
                map: 'https://www.google.com/maps/embed/v1/streetview?key=AIzaSyDrsIpQYMjNIyCTo8_Zk0mITEC4YYIdgyI&location=35.15517903961899,-106.46910751050038',
                comment: ''
            },
            {
                id: 25,
                name: '230',
                bicycle: 'yes',
                foot: 'yes',
                horse: 'yes',
                wheelchair: 'no',
                starRating: 3.8,
                tags: ["bicycle", "foot", "horse"],
                map: 'https://www.google.com/maps/embed/v1/streetview?key=AIzaSyDrsIpQYMjNIyCTo8_Zk0mITEC4YYIdgyI&location=35.16819363055737,-106.46835236618259',
                comment: ''
            },
            {
                id: 26,
                name: '66',
                bicycle: 'no',
                foot: 'yes',
                horse: 'no',
                wheelchair: 'no',
                starRating: 3.8,
                tags: ["foot"],
                map: 'https://www.google.com/maps/embed/v1/streetview?key=AIzaSyDrsIpQYMjNIyCTo8_Zk0mITEC4YYIdgyI&location=35.06609940378764,-106.48532010776846',
                comment: ''
            },
            {
                id: 27,
                name: '341',
                bicycle: 'yes',
                foot: 'yes',
                horse: 'yes',
                wheelchair: 'no',
                starRating: 3.8,
                tags: ["bicycle", "foot", "horse"],
                map: 'https://www.google.com/maps/embed/v1/streetview?key=AIzaSyDrsIpQYMjNIyCTo8_Zk0mITEC4YYIdgyI&location=35.17038523961761,-106.46647945050076',
                comment: ''
            },
            {
                id: 28,
                name: '342',
                bicycle: 'yes',
                foot: 'yes',
                horse: 'yes',
                wheelchair: 'no',
                starRating: 3.8,
                tags: ["bicycle", "foot", "horse"],
                map: 'https://www.google.com/maps/embed/v1/streetview?key=AIzaSyDrsIpQYMjNIyCTo8_Zk0mITEC4YYIdgyI&location=35.16610738585477,-106.46771175803319',
                comment: ''
            },
            {
                id: 29,
                name: '365a',
                bicycle: 'yes',
                foot: 'yes',
                horse: 'yes',
                wheelchair: 'no',
                starRating: 3.8,
                tags: ["bicycle", "foot", "horse"],
                map: 'https://www.google.com/maps/embed/v1/streetview?key=AIzaSyDrsIpQYMjNIyCTo8_Zk0mITEC4YYIdgyI&location=35.0942375079882,-106.47478031052101',
                comment: ''
            },
            {
                id: 30,
                name: '366',
                bicycle: 'yes',
                foot: 'yes',
                horse: 'yes',
                wheelchair: 'no',
                starRating: 3.8,
                tags: ["bicycle", "foot", "horse"],
                map: 'https://www.google.com/maps/embed/v1/streetview?key=AIzaSyDrsIpQYMjNIyCTo8_Zk0mITEC4YYIdgyI&location=35.155436539618975,-106.47110836050017',
                comment: ''
            },
             {
                id: 31,
                name: '375',
                bicycle: 'yes',
                foot: 'yes',
                horse: 'yes',
                wheelchair: 'no',
                starRating: 3.8,
                tags: ["bicycle", "foot", "horse"],
                map: 'https://www.google.com/maps/embed/v1/streetview?key=AIzaSyDrsIpQYMjNIyCTo8_Zk0mITEC4YYIdgyI&location=35.073055747164,-106.48249017857275',
                comment: ''
            },
            {
                id: 32,
                name: '400',
                bicycle: 'yes',
                foot: 'yes',
                horse: 'yes',
                wheelchair: 'no',
                starRating: 3.8,
                tags: ["bicycle", "foot", "horse"],
                map: 'https://www.google.com/maps/embed/v1/streetview?key=AIzaSyDrsIpQYMjNIyCTo8_Zk0mITEC4YYIdgyI&location=35.079114312744416,-106.48004617577087',
                comment: ''
            },
            {
                id: 33,
                name: '401',
                bicycle: 'yes',
                foot: 'yes',
                horse: 'yes',
                wheelchair: 'no',
                starRating: 3.8,
                tags: ["bicycle", "foot", "horse"],
                map: 'https://www.google.com/maps/embed/v1/streetview?key=AIzaSyDrsIpQYMjNIyCTo8_Zk0mITEC4YYIdgyI&location=35.11112645185345,-106.4879659389385',
                comment: ''
            },
            {
                id: 34,
                name: '402',
                bicycle: 'yes',
                foot: 'yes',
                horse: 'yes',
                wheelchair: 'no',
                starRating: 3.8,
                tags: ["bicycle", "foot", "horse"],
                map: 'https://www.google.com/maps/embed/v1/streetview?key=AIzaSyDrsIpQYMjNIyCTo8_Zk0mITEC4YYIdgyI&location=35.145790979619804,-106.48229694049886',
                comment: ''
            }
        ];
        return { opentrails };
    }
}