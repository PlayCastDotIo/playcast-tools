
import { expect, test } from 'vitest'
import { PlaycastVector } from '../lib/core'
import { PlaycastSystemOrigin, PlaycastSystemCoordinates, PlaycastMessageSystemSetCoordinates } from '../lib/system'

const dimensions: PlaycastVector = {
    x: 2,
    y: 5
}

function isOfType(value: string): value is PlaycastSystemOrigin {
    return ['topLeft', 'bottomLeft', 'topRight', 'bottomRight'].includes(value);
}

const msgSysSetCoords = {
    target: 'system',
    action: 'setCoordinates'
}

test('has correct system origin', () => {
    expect(isOfType('topLeft')).toBeTruthy();
    expect(isOfType('bottomLeft')).toBeTruthy();
    expect(isOfType('topRight')).toBeTruthy();
    expect(isOfType('bottomRight')).toBeTruthy();
})

test('has correct coordinates', () => {
    expect(dimensions).toMatchObject<PlaycastVector>({
        x: expect.any(Number),
        y: expect.any(Number)
    })
})

test('has correct message for system set coordinates', () => {
    const sys = msgSysSetCoords;
    expect(sys.target).toEqual('system');
    expect(sys.action).toEqual('setCoordinates');
}) 

