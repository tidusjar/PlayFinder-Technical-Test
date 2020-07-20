import {DurationPipe} from './duration.pipe';

describe('DurationPipe', () => {
    let component: DurationPipe;

    beforeEach(() => {
        component = new DurationPipe();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should convert duration to a readable form', () => {
        expect(component.transform('2018-01-09T06:40:00+00:00', '2018-01-09T07:20:00+00:00')).toBe('00:40');
    });
});
