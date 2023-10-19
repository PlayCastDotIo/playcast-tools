import { expect, test } from 'vitest';
import { PlaycastVector } from "../lib/core";
import { PlaycastStreamDimensions, PlaycastMessageStreamSetDimensions } from '../lib/stream'

describe('PlaycastMessageStreamSetDimensions type', () => {
    test('stream has correct form', () => {
        const streamSetDimension: PlaycastMessageStreamSetDimensions = {
            target: 'stream',
            action: 'setDimensions',
            message: {
                name: 'Jonathan',
                size: { x: 6, y: 6 },
                aspectRatio: 'sample'
            },
            isReply: false
        }

        if(streamSetDimension.target=='stream') {
            expect(streamSetDimension.target).toBeTruthy();
        }
        else throw new Error('Invalid value for target. Expected value: stream');

        if(streamSetDimension.action=='setDimensions') {
            expect(streamSetDimension.action).toBeTruthy();
        }
        else throw new Error('Invalid value for action. Expected value: setDimensions');

        expect(typeof streamSetDimension.message.name).toBe('string');
        expect(typeof streamSetDimension.message.size.x).toBe('number');
        expect(typeof streamSetDimension.message.size.y).toBe('number');
        expect(typeof streamSetDimension.message.aspectRatio).toBe('string');
        expect(streamSetDimension.isReply).toBe(false);
    })
})