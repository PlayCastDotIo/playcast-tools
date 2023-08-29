import { send } from './messaging';

describe('send', () => {
  it('should work', () => {
    expect(send('message')).toEqual('Your message was: message');
  });
});
