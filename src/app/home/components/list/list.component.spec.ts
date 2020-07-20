import {TestBed, async, ComponentFixture, inject} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ListComponent} from './list.component';

import {Store, StoreModule} from '@ngrx/store';

describe('ListComponent', () => {
    let component: ListComponent;
    let fixture: ComponentFixture<ListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                StoreModule.forRoot({})
            ],
            declarations: [
                ListComponent
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListComponent);
        component = fixture.componentInstance;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('playData defaults to empty', () => {
        expect(component.playData).toEqual([]);
    });

    it('triggers store on load', inject([Store], (store: Store) => {
        spyOn(store, 'pipe').and.stub();

        component.setPlayData();

        expect(store.pipe).toHaveBeenCalled();
    }));
});
