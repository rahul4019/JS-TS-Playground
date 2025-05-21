import { test, suite, describe } from 'node:test';
import assert from 'node:assert';
import { greet, greetInHindi } from '../app.js';

//** suite and describe are same */

// suite('Greeting functions', () => {
describe('Greeting functions', () => {
  test('greet returns the correct greeting', () => {
    /* 
        AAA 
        Arrange
        Act
        Assert
    */

    const expected = `Hello, World!`;
    const actual = greet('World');

    assert.strictEqual(actual, expected);
  });

  test('greet returns the correct greeting in Hindi', () => {
    const expected = `नमस्ते, World!`;
    const actual = greetInHindi('World');

    assert.strictEqual(actual, expected);
  });
});
