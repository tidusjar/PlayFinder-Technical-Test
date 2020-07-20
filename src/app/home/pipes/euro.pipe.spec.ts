import {EuroPipe} from './euro.pipe';

describe('EuroPipe', () => {
    let component: EuroPipe;

    beforeEach(() => {
        component = new EuroPipe();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should convert sterling to a euro', () => {
        expect(component.transform('12.05')).toBe(13.62);
    });
});
