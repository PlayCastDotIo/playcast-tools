import { expect, test } from 'vitest'
import { PlaycastKeyDetail, PlaycastKey, PlaycastKeyboardState, PlaycastKeyboardMessages, PlaycastMessageKeyboardSetState,
         PlaycastMessageKeyboardDown, PlaycastMessageKeyboardUp, PlaycastKeyboardEvent,  } from '../lib/keyboard'

const keyDetail: PlaycastKeyDetail = {
    keyCode: 'sampleCode',
    scanCode: 123456,
    displayName: 'key detail'
}

const castKey: PlaycastKey = {
    isPressed: true,
    wasPressed: true,
    wasReleased: false,
    keyCode: 'codeRed',
    scanCode: 54323,
    displayName: 'cast key'
}

const keyboardState: PlaycastKeyboardState = {
    keys: [{
        isPressed: false,
        wasPressed: true,
        wasReleased: false,
        keyCode: 'codeBlack',
        scanCode: 665446,
        displayName: 'keyboardState'
    }]
}

const keyboardMessages: PlaycastKeyboardMessages = {
    target: 'keyboard',
    action: 'down',
    isReply: false,
    message: {
        keyCode: 'sampleCode',
        scanCode: 123456,
        displayName: 'messageKeyboardDown'
    }
}

const messageKeyboardSetState: PlaycastMessageKeyboardSetState = {
    target: 'keyboard',
    action: 'setState',
    isReply: false,
    message: {
        keys: [{
            isPressed: false,
            wasPressed: false,
            wasReleased: false,
            keyCode: 'code4356',
            scanCode: 998672,
            displayName: 'messageKeyboardSetState'
        }]
    }
}

const messageKeyboardDowm: PlaycastMessageKeyboardDown = {
    target: 'keyboard',
    action: 'down',
    isReply: false,
    message: {
        keyCode: 'sampleCode',
        scanCode: 123456,
        displayName: 'messageKeyboardDown'
    }
}

const messageKeyboardUp: PlaycastMessageKeyboardUp = {
    target: 'keyboard',
    action: 'up',
    isReply: false,
    message: {
        keyCode: 'sampleCode25',
        scanCode: 5656423,
        displayName: 'messageKeyboardUp'
    }
}

const keyboardEvent: PlaycastKeyboardEvent = {
    target: 'keyboard',
    action: 'up',
    isReply: false,
    message: {
        keyCode: 'sampleCode66',
        scanCode: 4453,
        displayName: 'keyboardEvent'
    }
}

test('key detail has correct form', () => {
    expect(keyDetail).toMatchObject<PlaycastKeyDetail>({
        keyCode: expect.any(String),
        scanCode: expect.any(Number),
        displayName: expect.any(String)
    })
})

test('cast key has correct form', () => {
    expect(castKey).toMatchObject<PlaycastKey>({
        isPressed: expect.any(Boolean),
        wasPressed: expect.any(Boolean),
        wasReleased: expect.any(Boolean),
        keyCode: expect.any(String),
        scanCode: expect.any(Number),
        displayName: expect.any(String)
    })
})

test('keyboard state has correct form', () => {
    expect(keyboardState).toMatchObject<PlaycastKeyboardState>({
        keys: [{
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean),
            keyCode: expect.any(String),
            scanCode: expect.any(Number),
            displayName: expect.any(String)
        }]
    })
})

test('keyboard message has correct sample form', () => {
    expect(keyboardMessages).toMatchObject<PlaycastKeyboardMessages>({
        target: expect.any(String),
        action: expect.any(String),
        isReply: expect.any(Boolean),
        message: {
            keyCode: expect.any(String),
            scanCode: expect.any(Number),
            displayName: expect.any(String)
        }
    })
})

test('message keyboard set state has correct form', () => {
    expect(messageKeyboardSetState).toMatchObject<PlaycastMessageKeyboardSetState>({
        target: expect.any(String),
        action: expect.any(String),
        isReply: expect.any(Boolean),
        message: {
            keys: [{
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean),
                keyCode: expect.any(String),
                scanCode: expect.any(Number),
                displayName: expect.any(String)
            }]
        }
    })
})

test('message keyboard down has correct form', () => {
    expect(messageKeyboardDowm).toMatchObject<PlaycastMessageKeyboardDown>({
        target: expect.any(String),
        action: expect.any(String),
        isReply: expect.any(Boolean),
        message: {
            keyCode: expect.any(String),
            scanCode: expect.any(Number),
            displayName: expect.any(String)
        }
    })
})

test('message keyboard up has correct form', () => {
    expect(messageKeyboardUp).toMatchObject<PlaycastMessageKeyboardUp>({
        target: expect.any(String),
        action: expect.any(String),
        isReply: expect.any(Boolean),
        message: {
            keyCode: expect.any(String),
            scanCode: expect.any(Number),
            displayName: expect.any(String)
        }
    })
})

test('keyboard event has correct form', () => {
    expect(keyboardEvent).toMatchObject<PlaycastKeyboardEvent>({
        target: expect.any(String),
        action: expect.any(String),
        isReply: expect.any(Boolean),
        message: {
            keyCode: expect.any(String),
            scanCode: expect.any(Number),
            displayName: expect.any(String)
        }
    })
})