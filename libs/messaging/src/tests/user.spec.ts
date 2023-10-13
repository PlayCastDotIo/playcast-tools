import { expect, test } from 'vitest'
import { PlaycastUser } from '../lib/user'


describe('PlaycastUser type', () => {
  test('user has correct form', () => {
    const user: PlaycastUser = {
      id: '123',
      auth: 'abc',
    };

    expect(typeof user.id).toBe('string');
    expect(typeof user.auth).toBe('string');
  });
});