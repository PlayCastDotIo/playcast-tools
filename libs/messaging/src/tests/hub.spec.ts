import { expect, test } from 'vitest'
import { PlaycastHubEcho, PlaycastMessageHubEcho} from '../lib/hub'

const hubEcho: PlaycastHubEcho = {
    target: 'home',
    action: 'start',
    enabled: false
}

const messageHubEcho: any = {
    target: 'hub',
    action: 'echo',
    message: hubEcho
}

test('hub has correct values', () => {
    expect(hubEcho).toMatchObject<PlaycastHubEcho>({
      target: expect.any(String),
      action: expect.any(String),
      enabled: expect.any(Boolean)
    });
});

test('message hub echo has correct form', () => {
    const msg = messageHubEcho
    expect(msg.target).toEqual('hub')
    expect(msg.action).toEqual('echo')
}

)

