import { expect, test } from 'vitest'
import { PlaycastHubEcho, PlaycastMessageHubEcho} from '../lib/hub'

describe('PlaycastHubEcho type', () => {
    test('hub echo has correct form', () => {
        const hubEcho: PlaycastHubEcho = {
            target: 'home',
            action: 'start',
            enabled: false
        }

        expect(hubEcho.target).toBe('home');
        expect(hubEcho.action).toBe('start');
        expect(hubEcho.enabled).toBe(false);
    });
});

describe('PlaycastMessageHubEcho type', () => {
    test('message hub echo has correct form', () => {
        const messageHubEcho: PlaycastMessageHubEcho = {
            target: 'hub',
            action: 'echo',
            isReply: false,
            message: {
                target: 'home',
                action: 'start',
                enabled: false
            }
        };

        expect(messageHubEcho.target).toBe('hub');
        expect(messageHubEcho.action).toBe('echo');
        expect(messageHubEcho.isReply).toBe(false);   

        const innerMessage = messageHubEcho.message;
        expect(innerMessage.target).toBe('home');
        expect(innerMessage.action).toBe('start');
        expect(innerMessage.enabled).toBe(false);
        
    });
});
    