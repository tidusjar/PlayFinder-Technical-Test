import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'date'
})

export class DatePipe implements PipeTransform {
    transform(date: string, args: string): string {
        const format = args || 'L';

        if (date) {
            return moment(date).format(format);
        }
    }
}
