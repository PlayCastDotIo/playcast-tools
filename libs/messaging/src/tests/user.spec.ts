import { expect, test } from 'vitest'
import { PlaycastUser } from '../lib/user'

const user: unknown = {
  id: '123',
  auth: 'abc',
};

test('user has correct form', () => {
  expect(user).toMatchObject<PlaycastUser>({
    id: expect.any(String),
    auth: expect.any(String),
  });
});