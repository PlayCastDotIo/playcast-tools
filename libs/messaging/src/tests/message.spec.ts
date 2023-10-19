import exp = require('constants')
import _ = require('lodash')
import { type } from 'os'
import { expect, test } from 'vitest'
import {    PlaycastMessageSource, PlaycastMessageTarget, 
            PlaycastMessageHeader, PlaycastMessage 
        } from '../lib/message'

describe('PlaycastMessageSource type', () => {
    test('message source has correct form', () => {
        const messageSrc: PlaycastMessageSource = "player";

        if(messageSrc == 'player' || messageSrc == 'host' || messageSrc == 'playjector') {
            expect(messageSrc).toBeTruthy();
        }
        else {
            throw new Error('Invalid value for message source. Expected values: player,host or playjector');
        }
    })
})

describe('PlaycastMessageTarget type', () => {
    test('message target has correct sample form', () => {
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

        expect(messageTarget.target).toBe('stream');
        expect(messageTarget.action).toBe('setDimensions');
        expect(messageTarget.isReply).toBe(false);
        const message = messageTarget.message;
        expect(typeof message.name).toBe('string');
        expect(typeof message.size.x).toBe('number');
        expect(typeof message.size.y).toBe('number');
        expect(typeof message.aspectRatio).toBe('string');
    })
})

describe('PlaycastMessageHeader type', () => {
    test('message header has correct form', () => {
        const messageHeader: PlaycastMessageHeader = {
            tag: 'any',
            source: 'player',
            schemaVersion: 5,
            timestamp: 56343,
            user: { id: 'jonathan', auth: 'test'}
        }

        expect(typeof messageHeader.tag).toBe('string');
        expect(typeof messageHeader.source).toBe('string');
        expect(messageHeader.schemaVersion).toBe(5);
        expect(typeof messageHeader.timestamp).toBe('number');

        const user = messageHeader.user;
        expect(typeof user.id).toBe('string');
        expect(typeof user.auth).toBe('string');
    })
})

describe('PlaycastMessageTarget type',() => {
    test('message has correct sample form', () => {
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

        expect(typeof message.signature).toBe('string');
        const header = message.header;
        expect(typeof header.tag).toBe('string');

        if(header.source == 'player' || header.source == 'host' || header.source == 'playjector') {
            expect(header.source).toBeTruthy();
        }
        else { 
            throw new Error('Invalid value for message source. Expected values: player,host or playjector');
        }

        if(header.schemaVersion == 5) {
            expect(header.schemaVersion).toBeTruthy();
        }
        else {
            throw new Error('Invalid value for schemaVersion. Expected value: 5');
        }
        
        expect(typeof header.timestamp).toBe('number');
        expect(typeof header.user.id).toBe('string');
        expect(typeof header.user.auth).toBe('string');

        if(header.target == 'gamepad' || header.target == 'mouse' || header.target == 'camera' || header.target == 'hub'
            || header.target ==  'stream' || header.target == 'system') {
                expect(header.target).toBeTruthy();
        }
        else {
            throw new Error('Invalid value for target. Expected value: gamepad, mouse, camera, hub, stream or system');
        }

        if(header.action == 'setResolution' || header.action == 'setState' || header.action == 'setXInput' || header.action == 'initialize'
            || header.action == 'remove' || header.action == 'echo' || header.action == 'down' || header.action == 'up'
            || header.action == 'setMode' || header.action == 'setLocation' || header.action == 'move'
            || header.action == 'wheel' || header.action == 'setDimensions' || header.action == 'getSchemas' || header.action == 'die'
            || header.action == 'setDeviceChange') {

                expect(header.action).toBeTruthy();
        }
        else {
            throw new Error('Invalid value for action. Expected value: setResolution, setState, setXInput, initialize, ' +
                            'remove, echo, down, up, setMode, setLocation, move, wheel, setLocation, move, wheel, ' +
                            'setDimensions, getSchemas, die or setDeviceChange');
        }

        expect(header.isReply).toBe(false);
    })
})
