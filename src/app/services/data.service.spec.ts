import {TestBed, async, inject} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {DataService} from './data.service';

import {BrowserModule} from '@angular/platform-browser';

describe('DataService', () => {
    let service: DataService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientModule,
                BrowserModule
            ],
            declarations: [],
            providers: [
                DataService
            ]
        }).compileComponents();

        service = TestBed.inject(DataService);
    }));

    it('should create the component', () => {
        expect(service).toBeTruthy();
    });
});
