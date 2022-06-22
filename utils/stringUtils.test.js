const {repeatNTimesWithSpace, capitalizeFirstLetter} = require('./stringUtils');

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
});

describe('take a string and capitalize the first letter', () => {

    it("handles an empty string", () => {
        expect(capitalizeFirstLetter("")).toBe("");
    });

    it("can capitalize the first letter of words", () => {
        expect(capitalizeFirstLetter('ana')).toBe('Ana');
    });

    it('handles strings with 1 character', () => {
        expect(capitalizeFirstLetter('a')).toBe('A');
    });
});