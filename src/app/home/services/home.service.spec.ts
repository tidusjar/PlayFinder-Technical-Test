import {TestBed, async, inject} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Store, StoreModule} from '@ngrx/store';

import {HomeService} from './home.service';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {Router} from '@angular/router';

describe('HomeService', () => {
    let service: HomeService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                StoreModule.forRoot({}),
                BrowserModule,
                FormsModule,
                ReactiveFormsModule
            ],
            declarations: [],
            providers: [
                HomeService
            ]
        }).compileComponents();

        service = TestBed.inject(HomeService);
    }));

    it('should create the component', () => {
        expect(service).toBeTruthy();
    });


    it('searchForm defaults to set preset values', () => {
        expect(service.searchForm.value).toEqual({
            pitchId: '32990',
            startDate: '2018-01-09',
            endDate: '2018-01-15',
        });
    });

    it('setControl() sets to form value', () => {
        expect(service.searchForm.controls.pitchId.value).toEqual('32990');
        service.setControl('pitchId', '');
        expect(service.searchForm.controls.pitchId.value).toEqual('');
    });


    it('onSearchSubmit() doesnt trigger fetchUsingHttpAndNGRX if pitchId is empty', () => {
        service.setControl('pitchId', '');
        spyOn(service, 'fetchUsingHttpAndNGRX').and.stub();
        service.onSearchSubmit(null);
        expect(service.fetchUsingHttpAndNGRX).not.toHaveBeenCalled();
    });
    it('onSearchSubmit() doesnt trigger fetchUsingHttpAndNGRX if startDate is empty', () => {
        service.setControl('startDate', '');
        spyOn(service, 'fetchUsingHttpAndNGRX').and.stub();
        service.onSearchSubmit(null);
        expect(service.fetchUsingHttpAndNGRX).not.toHaveBeenCalled();
    });
    it('onSearchSubmit() doesnt trigger fetchUsingHttpAndNGRX if endDate is empty', () => {
        service.setControl('endDate', '');
        spyOn(service, 'fetchUsingHttpAndNGRX').and.stub();
        service.onSearchSubmit(null);
        expect(service.fetchUsingHttpAndNGRX).not.toHaveBeenCalled();
    });


    it('onSearchSubmit() triggers fetchUsingHttpAndNGRX', () => {
        spyOn(service, 'fetchUsingHttpAndNGRX').and.stub();
        service.onSearchSubmit(null);
        expect(service.fetchUsingHttpAndNGRX).toHaveBeenCalled();
    });
    it('onSearchSubmit() triggers store', inject([Store], (store: Store) => {
        spyOn(store, 'dispatch').and.stub();
        service.onSearchSubmit(null);
        expect(store.dispatch).toHaveBeenCalled();
    }));
    it('onSearchSubmit() triggers router', inject([Router], (router: Router) => {
        spyOn(router, 'navigate').and.stub();
        service.onSearchSubmit(null);
        expect(router.navigate).toHaveBeenCalled();
    }));
    it('removeFromNGRX() triggers router', inject([Router], (router: Router) => {
        spyOn(router, 'navigate').and.stub();
        service.removeFromNGRX();
        expect(router.navigate).toHaveBeenCalled();
    }));
    it('removeFromNGRX() triggers store', inject([Store], (store: Store) => {
        spyOn(store, 'dispatch').and.stub();
        service.removeFromNGRX();
        expect(store.dispatch).toHaveBeenCalled();
    }));
});
