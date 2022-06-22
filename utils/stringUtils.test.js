const {repeatNTimesWithSpace} = require('./stringUtils');

describe('take a string and a number and repeat string same number of times, with spaces', () => {

    it('handles empty string', () => {
        expect(repeatNTimesWithSpace('', 0)).toBe('');
        // expect(repeatNTimesWithSpace('', 0)).toBe('')
    });

    it('handles a string with 1 or more character', () => {
        expect(repeatNTimesWithSpace('a', 1)).toBe('a');
        expect(repeatNTimesWithSpace('a', 5)).toBe('a a a a a');
        expect(repeatNTimesWithSpace('abc', 3)).toBe('abc abc abc');
    })
})