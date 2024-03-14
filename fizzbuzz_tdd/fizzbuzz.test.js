const fizzBuzz = require('./fizzbuzz');

describe('fizzBuzz', () => {
    it('fizzBuzz', () => {
        expect(fizzBuzz(18)).toBe('Fizz');
    });
    it('fizzBuzz', () => {
        expect(fizzBuzz(20)).toBe('Buzz');
    });
    it('fizzBuzz', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });
    it('fizzBuzz', () => {
        expect(fizzBuzz(8)).toBe(8);
    });
});