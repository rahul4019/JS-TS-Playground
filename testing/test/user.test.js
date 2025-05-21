import { describe, mock, test, it } from 'node:test';
import assert from 'node:assert';
import { fetchData } from '../app.js';

describe('User feature', () => {
  // it and test are same
  it('fetches the data from the server', (t) => {
    const data = fetchData(1);

    t.assert.snapshot(data);
  });
});
