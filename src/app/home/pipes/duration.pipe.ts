import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'duration'
})

export class DurationPipe implements PipeTransform {
    transform(start: string, args: string): string {
        const end = args || '';

        if (start && end) {
            const momentStart = moment(start);
            const momentEnd = moment(end);

            const duration = momentEnd.diff(momentStart);

            return moment.utc(duration).format('HH:mm');
        }
    }
}
