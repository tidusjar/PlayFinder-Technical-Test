
import * as fromPlayFinderData from '../actions/play-finder.action';
import {PlayDataRoot} from '../../../models/playfinder.model';

export interface PlayFinderDataState {
    data: PlayDataRoot,
    loaded: boolean,
    loading: boolean,
}

export const initialState: PlayFinderDataState = {
    data: {
        meta: null,
        data: []
    },
    loaded: false,
    loading: false,
};

export function reducer(
    state: PlayFinderDataState = initialState,
    action: fromPlayFinderData.PlayFinderDataAction
): PlayFinderDataState {
    switch (action.type) {
        case fromPlayFinderData.LOAD_PLAYFINDERDATA: {
            return {
                ...state,
                loading: true,
            }
        }

        case fromPlayFinderData.LOAD_PLAYFINDERDATA_SUCCESS: {
            const data = action.payload;

            return {
                ...state,
                loading: false,
                loaded: true,
                data,
            }
        }

        case fromPlayFinderData.LOAD_PLAYFINDERDATA_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false,
                data: {
                    meta: null,
                    data: []
                },
            }
        }

        case fromPlayFinderData.RESET_PLAYFINDERDATA: {
            return initialState;
        }

        default: {
            return state;
        }
    }
}

export const getPlayFinderDataLoading = (state: PlayFinderDataState) => state.loading;
export const getPlayFinderDataLoaded = (state: PlayFinderDataState) => state.loaded;
export const getPlayFinderData = (state: PlayFinderDataState) => state.data;

