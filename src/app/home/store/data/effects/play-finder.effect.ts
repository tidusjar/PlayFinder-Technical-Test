import {Injectable} from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';
import * as playFinderDataActions from '../actions/play-finder.action';

import {switchMap, map, catchError} from 'rxjs/operators';
import {of} from 'rxjs';

import {DataService} from '../../../../services/data.service';

@Injectable()
export class PlayFinderDataEffects {
    constructor(
        private actions$: Actions,
        public dataService: DataService
    ) { }

    @Effect()
    loadPlayFinderData$ = this.actions$.pipe(
        ofType(playFinderDataActions.LOAD_PLAYFINDERDATA),
        switchMap((action: any) => {
            return this.dataService.get(action.payload.url).pipe(
                map(playFinderData => new playFinderDataActions.LoadPlayFinderDataSuccess(playFinderData)),
                catchError((error) => of(new playFinderDataActions.LoadPlayFinderDataFail(error)))
            )
        })
    )
}
