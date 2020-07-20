import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {TableComponent} from './table.component';
import {HomeService} from '../../services/home.service';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {PlayData} from '../../models/playfinder.model';

describe('TableComponent', () => {
    let component: TableComponent;
    let fixture: ComponentFixture<TableComponent>;

    const mockData: PlayData[] = [
        {
            "type": "slots",
            "id": "446269",
            "attributes": {
                "starts": "2018-01-09T06:40:00+00:00",
                "ends": "2018-01-09T07:20:00+00:00",
                "price": "12.05",
                "admin_fee": "0.00",
                "currency": "GBP",
                "availabilities": 0
            }
        },
        {
            "type": "slots",
            "id": "446270",
            "attributes": {
                "starts": "2018-01-09T07:20:00+00:00",
                "ends": "2018-01-09T08:00:00+00:00",
                "price": "9.90",
                "admin_fee": "0.00",
                "currency": "GBP",
                "availabilities": 0
            }
        },
        {
            "type": "slots",
            "id": "446271",
            "attributes": {
                "starts": "2018-01-09T08:00:00+00:00",
                "ends": "2018-01-09T08:40:00+00:00",
                "price": "9.90",
                "admin_fee": "0.00",
                "currency": "GBP",
                "availabilities": 0
            }
        },
        {
            "type": "slots",
            "id": "446272",
            "attributes": {
                "starts": "2018-01-09T08:40:00+00:00",
                "ends": "2018-01-09T09:20:00+00:00",
                "price": "9.90",
                "admin_fee": "0.00",
                "currency": "GBP",
                "availabilities": 4
            }
        },
        {
            "type": "slots",
            "id": "446273",
            "attributes": {
                "starts": "2018-01-09T09:20:00+00:00",
                "ends": "2018-01-09T10:00:00+00:00",
                "price": "9.90",
                "admin_fee": "0.00",
                "currency": "GBP",
                "availabilities": 4
            }
        },
        {
            "type": "slots",
            "id": "446274",
            "attributes": {
                "starts": "2018-01-09T10:00:00+00:00",
                "ends": "2018-01-09T10:40:00+00:00",
                "price": "9.90",
                "admin_fee": "0.00",
                "currency": "GBP",
                "availabilities": 3
            }
        },
        {
            "type": "slots",
            "id": "446275",
            "attributes": {
                "starts": "2018-01-09T10:40:00+00:00",
                "ends": "2018-01-09T11:20:00+00:00",
                "price": "9.90",
                "admin_fee": "0.00",
                "currency": "GBP",
                "availabilities": 3
            }
        },
        {
            "type": "slots",
            "id": "446276",
            "attributes": {
                "starts": "2018-01-09T11:20:00+00:00",
                "ends": "2018-01-09T12:00:00+00:00",
                "price": "9.90",
                "admin_fee": "0.00",
                "currency": "GBP",
                "availabilities": 4
            }
        },
        {
            "type": "slots",
            "id": "446277",
            "attributes": {
                "starts": "2018-01-09T12:00:00+00:00",
                "ends": "2018-01-09T12:40:00+00:00",
                "price": "12.05",
                "admin_fee": "0.00",
                "currency": "GBP",
                "availabilities": 0
            }
        },
        {
            "type": "slots",
            "id": "446278",
            "attributes": {
                "starts": "2018-01-09T12:40:00+00:00",
                "ends": "2018-01-09T13:20:00+00:00",
                "price": "12.05",
                "admin_fee": "0.00",
                "currency": "GBP",
                "availabilities": 0
            }
        },
        {
            "type": "slots",
            "id": "446279",
            "attributes": {
                "starts": "2018-01-09T13:20:00+00:00",
                "ends": "2018-01-09T14:00:00+00:00",
                "price": "12.05",
                "admin_fee": "0.00",
                "currency": "GBP",
                "availabilities": 1
            }
        },
        {
            "type": "slots",
            "id": "446280",
            "attributes": {
                "starts": "2018-01-09T14:00:00+00:00",
                "ends": "2018-01-09T14:40:00+00:00",
                "price": "12.05",
                "admin_fee": "0.00",
                "currency": "GBP",
                "availabilities": 4
            }
        },
        {
            "type": "slots",
            "id": "446281",
            "attributes": {
                "starts": "2018-01-09T14:40:00+00:00",
                "ends": "2018-01-09T15:20:00+00:00",
                "price": "9.90",
                "admin_fee": "0.00",
                "currency": "GBP",
                "availabilities": 4
            }
        },
        {
            "type": "slots",
            "id": "446282",
            "attributes": {
                "starts": "2018-01-09T15:20:00+00:00",
                "ends": "2018-01-09T16:00:00+00:00",
                "price": "9.90",
                "admin_fee": "0.00",
                "currency": "GBP",
                "availabilities": 4
            }
        },
        {
            "type": "slots",
            "id": "446283",
            "attributes": {
                "starts": "2018-01-09T16:00:00+00:00",
                "ends": "2018-01-09T16:40:00+00:00",
                "price": "9.90",
                "admin_fee": "0.00",
                "currency": "GBP",
                "availabilities": 3
            }
        }
    ]

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                BrowserModule,
                FormsModule,
                ReactiveFormsModule
            ],
            declarations: [
                TableComponent,
            ],
            providers: [
                HomeService
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TableComponent);
        component = fixture.componentInstance;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('data defaults to empty', () => {
        expect(component.data).toEqual([]);
    });

    it('pagedData defaults to empty', () => {
        expect(component.pagedData).toEqual([]);
    });

    it('pageNumber defaults to 1', () => {
        expect(component.pageNumber).toEqual(1);
    });
    it('itemsPerPage defaults to 10', () => {
        expect(component.itemsPerPage).toEqual(10);
    });
    it('paginationRangeStart defaults to 0', () => {
        expect(component.paginationRangeStart).toEqual(0);
    });
    it('paginationRangeEnd defaults to 10', () => {
        expect(component.paginationRangeEnd).toEqual(10);
    });
    it('itemsOnPage defaults to 10', () => {
        expect(component.itemsOnPage).toEqual(10);
    });

    it('reset sets variables to default', () => {
        component.pageNumber = null;
        component.itemsPerPage = null;
        component.ngOnChanges();
        expect(component.pageNumber).toEqual(1);
        expect(component.itemsPerPage).toEqual(10);
    });

    it('pagedData sets initial data count to 10', () => {
        component.data = mockData;
        component.ngOnChanges();
        expect(component.pagedData.length).toEqual(component.itemsPerPage);
        expect(component.itemsOnPage).toEqual(component.itemsPerPage);
    });

    it('setPaginationRange() sets range correct values', () => {
        component.data = mockData;
        component.ngOnChanges();
        component.paginationRangeStart = null;
        component.paginationRangeEnd = null;
        component.setPaginationRange();
        expect(component.paginationRangeStart).toEqual(0);
        expect(component.paginationRangeEnd).toEqual(10);
    });

    it('onNext() sets page count to next page', () => {
        component.data = mockData;
        component.ngOnChanges();
        component.paginationRangeStart = null;
        component.paginationRangeEnd = null;
        component.onNext();
        expect(component.pageNumber).toEqual(2);
        expect(component.paginationRangeStart).toEqual(10);
        expect(component.paginationRangeEnd).toEqual(20);
    });

    it('onNext() does not go further than end page', () => {
        component.data = mockData;
        component.ngOnChanges();
        component.onNext();
        component.onNext();
        expect(component.pageNumber).toEqual(2);
        expect(component.itemsOnPage).toEqual(5);
    });

    it('onPrevious() sets page count to previous page', () => {
        component.data = mockData;
        component.ngOnChanges();
        component.paginationRangeStart = 10;
        component.paginationRangeEnd = 20;
        component.pageNumber = 2;
        component.onPrevious();
        expect(component.pageNumber).toEqual(1);
        expect(component.paginationRangeStart).toEqual(0);
        expect(component.paginationRangeEnd).toEqual(10);
    });

    it('onPrevious() does not go further than start page', () => {
        component.data = mockData;
        component.ngOnChanges();
        component.onPrevious();
        expect(component.pageNumber).toEqual(1);
        expect(component.paginationRangeStart).toEqual(0);
        expect(component.paginationRangeEnd).toEqual(10);
    });
});
