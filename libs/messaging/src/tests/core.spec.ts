import { truncate } from 'lodash'
import { expect, test } from 'vitest'
import { PlaycastVector, PlaycastButton, PlaycastNameValuePair } from '../lib/core'

const vector: PlaycastVector = { 
    x: 5,
    y: 10
}

const button: PlaycastButton = {
    isPressed: true,
    wasPressed: false,
    wasReleased: true
}
 
const nameValuePair: PlaycastNameValuePair = {
    name: 'Jonathan',
    value: 5
}

test('vector has correct form', () => {
    expect(vector).toMatchObject<PlaycastVector>({
      x: expect.any(Number),
      y: expect.any(Number)
    });
});

test('button has correct form', () => {
    expect(button).toMatchObject<PlaycastButton>({
        isPressed: expect.any(Boolean),
        wasPressed: expect.any(Boolean),
        wasReleased: expect.any(Boolean)
    });
});

test('name value pair has correct form', () => {
    expect(nameValuePair).toMatchObject<PlaycastNameValuePair>({
        name: expect.any(String),
        value: expect.any(Number)
    });
});