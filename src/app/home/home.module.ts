import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HomeRoutingModule} from './home-routing.module';
import {HomePageComponent} from './pages/home/home.page';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {dataReducers, dataEffects} from './store';

import {HomeService} from './services/home.service';
import {InputComponent} from './components/input/input.component';
import {SearchComponent} from './components/search/search.component';
import {ListComponent} from './components/list/list.component';
import {DateComponent} from './components/date/date.component';
import {TableComponent} from './components/table/table.component';

import {DatePipe} from './pipes/date.pipe';
import {DurationPipe} from './pipes/duration.pipe';
import {EuroPipe} from './pipes/euro.pipe';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        StoreModule.forFeature('data', dataReducers),
        EffectsModule.forFeature(dataEffects),
        FormsModule,
        ReactiveFormsModule,

    ],
    declarations: [
        HomePageComponent,

        InputComponent,
        DateComponent,
        SearchComponent,
        ListComponent,
        TableComponent,

        DatePipe,
        DurationPipe,
        EuroPipe
    ],
    exports: [
        DatePipe,
        DurationPipe,
        EuroPipe
    ],
    providers: [
        HomeService
    ],
})

export class HomeModule {}
