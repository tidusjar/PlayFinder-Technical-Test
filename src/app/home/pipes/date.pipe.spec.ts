import {DatePipe} from './date.pipe';

describe('DatePipe', () => {
    let component: DatePipe;

    beforeEach(() => {
        component = new DatePipe();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should convert date to a readable form', () => {
        expect(component.transform('2018-01-09T06:40:00+00:00', '')).toBe('01/09/2018');
    });
});
