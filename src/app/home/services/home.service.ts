import {Injectable} from '@angular/core';

import {Store} from '@ngrx/store';
import {HomePageState} from '../store';

import * as fromDataActions from './../store/data/actions'
import {FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Injectable()
export class HomeService {
    public searchForm = new FormGroup({});

    constructor(
        private store: Store<HomePageState>,
        private router: Router,
    ) {
        this.searchForm = new FormGroup({
            pitchId: new FormControl('32990', Validators.required),
            startDate: new FormControl('2018-01-09', Validators.required),
            endDate: new FormControl('2018-01-15', Validators.required)
        });
    }

    // FORMS

    public setControl(key: string, value: any) {
        this.searchForm.controls[key].patchValue(value);
    }

    public onSearchSubmit(form: FormGroupDirective) {
        if (this.searchForm.valid) {
            // LOG
            console.log('VALID');

            const controls = this.searchForm.controls;

            this.fetchUsingHttpAndNGRX(controls.pitchId.value, controls.startDate.value, controls.endDate.value);
            this.router.navigate([`/home/${controls.pitchId.value}/${controls.startDate.value}/${controls.endDate.value}`]);
        } else {
            // LOG
            console.log('NOT VALID');
        }
    }

    // FETCH DATA

    public fetchUsingHttpAndNGRX(id: string, start: string, end: string) {
        this.store.dispatch(new fromDataActions.LoadPlayFinderData({
            url: `https://api-v2.pfstaging.xyz/pitches/${id}/slots?filter[starts]=${start}&filter[ends]=${end}`
        }));
    }

    public removeFromNGRX() {
        this.router.navigate([`/home`]);
        this.store.dispatch(new fromDataActions.ResetPlayFinderData());
    }
}
