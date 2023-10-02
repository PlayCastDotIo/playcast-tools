import { expect, test } from 'vitest'
import {    PlaycastMessageSource, PlaycastMessageTarget, 
            PlaycastMessageHeader, PlaycastMessage 
        } from '../lib/message'

function isOfTypeMessageSource(value: string): value is PlaycastMessageSource {
    return ['player', 'host', 'playjector'].includes(value);
}

const messageTarget: PlaycastMessageTarget = {
    target: 'stream',
    action: 'setDimensions',
    message: {
        name: 'Jonathan',
        size: { x: 62, y: 66 },
        aspectRatio: 'sample'
    },
    isReply: false
}

const messageHeader: PlaycastMessageHeader = {
    tag: 'any',
    source: 'player',
    schemaVersion: 5,
    timestamp: 56343,
    user: { id: 'jonathan', auth: 'test'}
}

const message: PlaycastMessage<PlaycastMessageTarget> = {
    signature: 'jonathancalag',
    header:{
        tag: 'any',
        source: 'player',
        schemaVersion: 5,
        timestamp: 56343,
        user: { id: 'jonathan', auth: 'test'},

        target: 'stream',
        action: 'move',
        isReply: false    
    },
    body: {
        message: {
            target: 'stream',
            action: 'up',
            enabled: true
        },
        timings: [{name:'jonathan', value: 5}], 
        stats:  [{name:'ethan', value: true}],
        echo: true
    }
}

test('message source has correct form', () => {
    expect(isOfTypeMessageSource('player')).toBeTruthy();
    expect(isOfTypeMessageSource('host')).toBeTruthy();
    expect(isOfTypeMessageSource('playjector')).toBeTruthy();
})

test('message target has correct sample form', () => {
    expect(messageTarget).toMatchObject<PlaycastMessageTarget>({
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

test('message header has correct form', () => {
    expect(messageHeader).toMatchObject<PlaycastMessageHeader>({
        tag: expect.any(String),
        source: expect.any(String),
        schemaVersion: expect.any(Number),
        timestamp: expect.any(Number),
        user: { 
            id: expect.any(String),
            auth: expect.any(String)
        }
    })
})

test('message has correct sample form', () => {
    expect(message).toMatchObject<PlaycastMessage<PlaycastMessageTarget>>({
        signature: expect.any(String),
        header: {
            tag: expect.any(String),
            source: expect.any(String),
            schemaVersion: expect.any(Number),
            timestamp: expect.any(Number),
            user: {
                id: expect.any(String),
                auth: expect.any(String)
            },
            target: expect.any(String),
            action: expect.any(String),
            isReply: expect.any(Boolean)
        },
        body: {
            message: {
                target: expect.any(String),
                action: expect.any(String),
                enabled: expect.any(Boolean)
            },
            timings: [{name: expect.any(String), value: expect.any(Number)}],
            stats: [{name: expect.any(String), value: expect.any(Boolean)}],
            echo: expect.any(Boolean)
        }
    })
})