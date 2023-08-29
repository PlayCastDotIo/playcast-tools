import { send } from './messaging';

describe('send', () => {
  it('should work', () => {
    expect(send('message')).toEqual('message');
  });
});
