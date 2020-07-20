import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {InputComponent} from './input.component';
import {HomeService} from '../../services/home.service';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

describe('InputComponent', () => {
    let component: InputComponent;
    let fixture: ComponentFixture<InputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                BrowserModule,
                FormsModule,
                ReactiveFormsModule
            ],
            declarations: [
                InputComponent,
            ],
            providers: [
                HomeService
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InputComponent);
        component = fixture.componentInstance;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('placeholder defaults to empty', () => {
        expect(component.placeholder).toEqual('');
    });

    it('validationErrorMessage defaults to empty', () => {
        expect(component.validationErrorMessage).toEqual('');
    });

    it('input defaults to empty', () => {
        expect(component.input).toEqual('');
    });
});
