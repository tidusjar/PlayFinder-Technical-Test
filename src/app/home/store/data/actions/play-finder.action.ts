import {Action} from '@ngrx/store';
import {PlayDataRoot} from '../../../models/playfinder.model';

export const LOAD_PLAYFINDERDATA = '[Data] Load PlayFinder Data';
export const LOAD_PLAYFINDERDATA_FAIL = '[Data] Load PlayFinder Data Fail';
export const LOAD_PLAYFINDERDATA_SUCCESS = '[Data] Load PlayFinder Data Success';
export const RESET_PLAYFINDERDATA = '[Data] Reset PlayFinder Data';


export class LoadPlayFinderData implements Action {
    readonly type = LOAD_PLAYFINDERDATA;
    constructor(public payload: {
        url: string
    }) {}
}

export class LoadPlayFinderDataFail implements Action {
    readonly type = LOAD_PLAYFINDERDATA_FAIL;
    constructor(public payload: any) {}
}

export class LoadPlayFinderDataSuccess implements Action {
    readonly type = LOAD_PLAYFINDERDATA_SUCCESS;
    constructor(public payload: PlayDataRoot) {}
}

export class ResetPlayFinderData implements Action {
    readonly type = RESET_PLAYFINDERDATA
}

// action types
export type PlayFinderDataAction =
    | LoadPlayFinderData
    | LoadPlayFinderDataFail
    | LoadPlayFinderDataSuccess
    | ResetPlayFinderData
