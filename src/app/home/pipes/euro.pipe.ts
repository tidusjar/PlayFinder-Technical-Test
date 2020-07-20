import {Pipe, PipeTransform} from '@angular/core';
import {environment} from '../../../environments/environment';

@Pipe({
    name: 'euro'
})

export class EuroPipe implements PipeTransform {
    transform(value: string): number {
        if (value) {
            const conversion = (parseFloat(value) * environment.euroConversionRate);

            return Number(conversion.toFixed(2));
        }
    }
}
