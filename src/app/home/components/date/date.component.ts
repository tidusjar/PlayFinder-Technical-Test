import {Component, forwardRef, Input} from '@angular/core';
import {FormControl, FormGroupDirective, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'app-date',
    templateUrl: './date.component.html',
    styleUrls: ['./date.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DateComponent),
        multi: true,
    }],
})

export class DateComponent {
    @Input() public placeholder = '';
    @Input() public validationErrorMessage = '';

    @Input() public form: FormGroupDirective;
    @Input() public control: FormControl = {} as FormControl;

    public input = '';

    private onChange: Function = () => {};
    private onTouched: Function = () => {};

    //

    registerOnChange(fn: Function) {
        this.onChange = fn;
    }

    registerOnTouched(fn: Function) {
        this.onTouched = fn;
    }

    writeValue(value: string) {
        this.input = value || '';
    }

    setValue() {
        this.onChange(this.input);
    }

}

