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

test('core has correct vector', () => {
    expect(vector).toMatchObject<PlaycastVector>({
      x: expect.any(Number),
      y: expect.any(Number)
    });
});

test('core has correct button state', () => {
    expect(button).toMatchObject<PlaycastButton>({
        isPressed: expect.any(Boolean),
        wasPressed: expect.any(Boolean),
        wasReleased: expect.any(Boolean)
    });
});

test('core has correct name and value pair', () => {
    expect(nameValuePair).toMatchObject<PlaycastNameValuePair>({
        name: expect.any(String),
        value: expect.any(Number)
    });
});

test('PlaycastNameValuePair type has correct name and value is a string', () => {
    const nameValuePair1: PlaycastNameValuePair = {
        name: 'Jonathan',
        value: 'test'
    }
    expect(nameValuePair1).toMatchObject<PlaycastNameValuePair>({
        name: expect.any(String),
        value: expect.any(String)
    });
});

test('PlaycastNameValuePair type has correct name and value is a integer', () => {
    const nameValuePair1: PlaycastNameValuePair = {
        name: 'Jonathan',
        value: 663
    }
    expect(nameValuePair1).toMatchObject<PlaycastNameValuePair>({
        name: expect.any(String),
        value: expect.any(Number)
    });
});

test('PlaycastNameValuePair type has correct name and value is a boolean', () => {
    const nameValuePair1: PlaycastNameValuePair = {
        name: 'Jonathan',
        value: false
    }
    expect(nameValuePair1).toMatchObject<PlaycastNameValuePair>({
        name: expect.any(String),
        value: expect.any(Boolean)
    });
});