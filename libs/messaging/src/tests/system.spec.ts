import { expect, test } from 'vitest'
import { PlaycastVector } from '../lib/core'
import { PlaycastSystemOrigin } from '../lib/system'

describe('PlaycastSystemOrigin type', () => {
    test('has correct form', () => {
        const sysOrigin: PlaycastSystemOrigin = 'topLeft';

        if(sysOrigin=='topLeft'|| sysOrigin=='bottomLeft' || sysOrigin=='topRight' || sysOrigin=='bottomRight') {
            expect(sysOrigin).toBeTruthy();
        }
        else throw new Error('Invalid value for origin. Expected value: topLeft, topRight, bottomLeft or bottomRight');
    })
})

describe('PlaycastVector type', () => {
    test('has correct form', () => {
        const dimensions: PlaycastVector = {
            x: 2,
            y: 5
        }
        expect(typeof dimensions.x).toBe('number');
    })
})

