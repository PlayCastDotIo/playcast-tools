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
    isReply: false,
    message: { 
        target: 'home',
        action: 'start',
        enabled: true
    }
}

test('hub echo has correct form', () => {
    expect(hubEcho).toMatchObject<PlaycastHubEcho>({
      target: expect.any(String),
      action: expect.any(String),
      enabled: expect.any(Boolean)
    });
});

test('message hub echo has correct form', () => {
    expect(messageHubEcho).toMatchObject<PlaycastMessageHubEcho>({
        target: expect.any(String),
        action: expect.any(String),
        isReply: expect.any(Boolean),
        message: {
            target: expect.any(String),
            action: expect.any(String),
            enabled: expect.any(Boolean)
        }
    })
})