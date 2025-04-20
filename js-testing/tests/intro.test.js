import { describe, test, it, expect } from 'vitest';
import { max } from './src/intro';
import { calculateAverage, factorial, fizzBuzz } from '../src/intro';

describe('max', () => {
  it('should return first argument if it is greater', () => {
    //* AAA (Arrange, Act, Assert) pattern
    /* 
         Arrange: turn on the TV
         Act: Press the power button
         Assert: Verify TV is off
        */

    //* Arrange
    const a = 2;
    const b = 1;

    //* Act
    const result = max(a, b);

    //* Assert
    expect(result).toBe(2);
  });
});

describe('max', () => {
  it('should return second argument if it is greater', () => {
    expect(max(1, 2)).toBe(2);
  });
});

describe('max', () => {
  it('should return first argument if arguments are equal', () => {
    expect(max(2, 2)).toBe(2);
  });
});

describe('fizzBuzz', () => {
  it('should return FizzBuzz if it is divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
});

describe('fizzBuzz', () => {
  it('should return Fizz if it is divisible by 3', () => {
    expect(fizzBuzz(9)).toBe('Fizz');
  });
});

describe('fizzBuzz', () => {
  it('should return Buzz if it is divisible by 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });
});

describe('fizzBuzz', () => {
  it('should return argument as string if not divisible by 3 and 5', () => {
    expect(fizzBuzz(1)).toBe('1');
  });
});

describe('calculateAverage', () => {
  it('should return NAN if given an empty array', () => {
    expect(calculateAverage([])).toBe(NaN);
  });

  it('should calculate average of an array with a single element', () => {
    expect(calculateAverage([1])).toBe(1);
  });

  it('should calculate average of an array with two element', () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });
});

describe('factorial', () => {
  it('should return 1 if arg is 0', () => {
    expect(factorial(0)).toBe(1);
  });

  it('should return 1 if arg is 1', () => {
    expect(factorial(1)).toBe(1);
  });

  it('should return 6 if arg is 3', () => {
    expect(factorial(3)).toBe(6);
  });

  it('should return 24 if arg is 4', () => {
    expect(factorial(4)).toBe(24);
  });

  it('should return undefined if arg is -ve number', () => {
    expect(factorial(-1)).toBeUndefined
  });
});
