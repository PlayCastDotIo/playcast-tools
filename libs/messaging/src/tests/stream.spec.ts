import { expect, test } from 'vitest';
import { PlaycastVector } from "../lib/core";
import { PlaycastStreamDimensions, PlaycastMessageStreamSetDimensions } from '../lib/stream'

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

test('stream has correct form', () => {
    expect(streamSetDimension).toMatchObject<PlaycastMessageStreamSetDimensions>({
        target: expect.any(String),
        action: expect.any(String),
        message: {
            name: expect.any(String),
            size: { x: expect.any(Number), y: expect.any(Number) },
            aspectRatio: expect.any(String)
        },
        isReply: expect.any(Boolean)
    })
})