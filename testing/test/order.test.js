import { describe, mock, test } from 'node:test';
import assert from 'node:assert';
import { processOrder } from '../app.js';

describe('Order feature', () => {
  test('that it process the order correctly', () => {
    //AAA

    const mockedProcessPayment = mock.fn((amount) => {
      // don't call any api and make any side-effects
      console.log(`I am mocked...`);
      return { id: '123', amount: amount };
    });

    const expected = { id: '123', amount: 100 };

    assert.strictEqual(mockedProcessPayment.mock.callCount(), 0);
    const result = processOrder(
      { amount: 100 },
      { processPayment: mockedProcessPayment }
    );

    // deepStrictEqual is used for objects
    assert.deepStrictEqual(expected, result);
    assert.strictEqual(mockedProcessPayment.mock.callCount(), 1);

    const call = mockedProcessPayment.mock.calls[0];
    assert.deepStrictEqual(call.arguments, [100]);
  });
});
