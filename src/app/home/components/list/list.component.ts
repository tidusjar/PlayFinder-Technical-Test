import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';

import {select, Store} from '@ngrx/store';
import {HomePageState} from '../../store/data/reducers';
import * as fromDataReducers from '../../store/data/reducers';
import {PlayData, PlayDataRoot} from '../../models/playfinder.model';

@Component({
    selector: 'app-list-template',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit, OnDestroy {
    public playData$: Observable<any>;
    public playData: PlayData[] = [];
    public playDataSubscription: Subscription;

    constructor(
        private store: Store<HomePageState>,
    ) {}

    ngOnInit() {
        this.setPlayData();
        this.setPlayDataSubscription();
    }

    ngOnDestroy() {
        this.playDataSubscription.unsubscribe();
    }

    setPlayData() {
        this.playData$ = this.store.pipe(
            select(fromDataReducers.getAllPlayFinderData)
        );
    }

    setPlayDataSubscription() {
        this.playDataSubscription = this.playData$.subscribe((data: PlayDataRoot) => {
            if (data.data) {
                this.playData = data.data || [];
            }
        })
    }
}

