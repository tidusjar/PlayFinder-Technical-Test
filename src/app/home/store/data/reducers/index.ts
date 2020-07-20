import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromPlayFinderData from './play-finder.reducer';

export interface HomePageState {
    playFinderData: fromPlayFinderData.PlayFinderDataState
}

export const dataReducers: ActionReducerMap<HomePageState> = {
    playFinderData: fromPlayFinderData.reducer,
};

export const getDataState = createFeatureSelector<HomePageState>('data');


// PlayFinderData state
export const getPlayFinderDataState = createSelector(getDataState, (state: HomePageState) => state.playFinderData);

export const getAllPlayFinderData = createSelector(getPlayFinderDataState, fromPlayFinderData.getPlayFinderData);
export const getPlayFinderDataLoading = createSelector(getPlayFinderDataState, fromPlayFinderData.getPlayFinderDataLoading);
export const getPlayFinderDataLoaded = createSelector(getPlayFinderDataState, fromPlayFinderData.getPlayFinderDataLoaded);
