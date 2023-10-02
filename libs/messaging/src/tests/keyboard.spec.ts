import { expect, test } from 'vitest'
import { PlaycastKeyDetail, PlaycastKey, PlaycastKeyboardState, PlaycastKeyboardMessages, PlaycastMessageKeyboardSetState,
         PlaycastMessageKeyboardDown, PlaycastMessageKeyboardUp, PlaycastKeyboardEvent,  } from '../lib/keyboard'

const keyDetail: PlaycastKeyDetail = {
    keyCode: 12,
    location: 'standard',
    source: {
        type: 'abc',
        code: 123
    },
    modifiers: {
        ctrl: true,
        alt: true,
        shift: true,
        meta: false
    },
    displayName: 'key detail'
}

const castKey: PlaycastKey = {
    isPressed: true,
    wasPressed: true,
    wasReleased: false,
    keyCode: 2,
    location: 'standard',
    source: {
        type: 'abc',
        code: 54
    },
    modifiers: {
        ctrl: true,
        alt: true,
        shift: true,
        meta: true
    },
    displayName: 'cast key'
}

const keyboardState: PlaycastKeyboardState = {
    keys: [{
        isPressed: true,
        wasPressed: true,
        wasReleased: false,
        keyCode: 22,
        location: 'numpad',
        source: {
            type: 'qwerty',
            code: 79
        },
        modifiers: {
            ctrl: true,
            alt: true,
            shift: true,
            meta: true
        },
        displayName: 'keyboard state'
    }]
}

const keyboardMessages: PlaycastKeyboardMessages = {
    target: 'keyboard',
    action: 'down',
    isReply: false,
    message: {
        keyCode: 6,
        location: 'left',
        source: {
            type: 'abc',
            code: 66
        },
        modifiers: {
            ctrl: true,
            alt: true,
            shift: true,
            meta: true
        },
        displayName: 'keyboard message'
    }
}

const messageKeyboardSetState: PlaycastMessageKeyboardSetState = {
    target: 'keyboard',
    action: 'setState',
    isReply: false,
    message: {
        keys: [{
            isPressed: true,
            wasPressed: true,
            wasReleased: true,
            keyCode: 11,
            location: 'numpad',
            source: {
                type: 'qwerty',
                code: 232
            },
            modifiers: {
                ctrl: true,
                alt: true,
                shift: true,
                meta: true
            },
            displayName: 'messag keyboard set state'
        }]
    }
}

const messageKeyboardDowm: PlaycastMessageKeyboardDown = {
    target: 'keyboard',
    action: 'down',
    isReply: false,
    message: {
        keyCode: 45,
        location: 'standard',
        source: {
            type: 'abc',
            code: 12345
        },
        modifiers: {
            ctrl: true,
            alt: true,
            shift: true,
            meta: false
        },
        displayName: 'message keyboard down'
    }
}

const messageKeyboardUp: PlaycastMessageKeyboardUp = {
    target: 'keyboard',
    action: 'up',
    isReply: false,
    message: {
        keyCode: 16,
        location: 'standard',
        source: {
            type: 'abc',
            code: 226
        },
        modifiers: {
            ctrl: true,
            alt: true,
            shift: true,
            meta: false
        },
        displayName: 'message keyboard up'
    }
}

const keyboardEvent: PlaycastKeyboardEvent = {
    target: 'keyboard',
    action: 'up',
    isReply: false,
    message: {
        keyCode: 99,
        location: 'standard',
        source: {
            type: 'abc',
            code: 57
        },
        modifiers: {
            ctrl: true,
            alt: true,
            shift: true,
            meta: true
        },
        displayName: 'keyboard event'
    }
}

test('key detail has correct form', () => {
    expect(keyDetail).toMatchObject<PlaycastKeyDetail>({
        keyCode: expect.any(Number),
        location: expect.any(String),
        source: {
            type: expect.any(String),
            code: expect.any(Number)
        },
        modifiers: {
            ctrl: expect.any(Boolean),
            alt:  expect.any(Boolean),
            shift:  expect.any(Boolean),
            meta:  expect.any(Boolean)
        },
        displayName:  expect.any(String)
    })
})

test('cast key has correct form', () => {
    expect(castKey).toMatchObject<PlaycastKey>({
        isPressed: expect.any(Boolean),
        wasPressed: expect.any(Boolean),
        wasReleased: expect.any(Boolean),
        keyCode: expect.any(Number),
        location: expect.any(String),
        source: {
            type: expect.any(String),
            code: expect.any(Number)
        },
        modifiers: {
            ctrl: expect.any(Boolean),
            alt: expect.any(Boolean),
            shift: expect.any(Boolean),
            meta: expect.any(Boolean)
        },
        displayName: expect.any(String)
    })
})

test('keyboard state has correct form', () => {
    expect(keyboardState).toMatchObject<PlaycastKeyboardState>({
        keys: [{
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean),
            keyCode: expect.any(Number),
            location: expect.any(String),
            source: {
                type: expect.any(String),
                code: expect.any(Number)
            },
            modifiers: {
                ctrl: expect.any(Boolean),
                alt: expect.any(Boolean),
                shift: expect.any(Boolean),
                meta: expect.any(Boolean)
            },
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
            keyCode: expect.any(Number),
            location: expect.any(String),
            source: {
                type: expect.any(String),
                code: expect.any(Number)
            },
            modifiers: {
                ctrl: expect.any(Boolean),
                alt: expect.any(Boolean),
                shift: expect.any(Boolean),
                meta: expect.any(Boolean)
            },
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
                keyCode: expect.any(Number),
                location: expect.any(String),
                source: {
                    type: expect.any(String),
                    code: expect.any(Number)
                },
                modifiers: {
                    ctrl: expect.any(Boolean),
                    alt: expect.any(Boolean),
                    shift: expect.any(Boolean),
                    meta: expect.any(Boolean)
                },
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
            keyCode: expect.any(Number),
            location: expect.any(String),
            source: {
                type: expect.any(String),
                code: expect.any(Number)
            },
            modifiers: {
                ctrl: expect.any(Boolean),
                alt: expect.any(Boolean),
                shift: expect.any(Boolean),
                meta: expect.any(Boolean)
            },
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
            keyCode: expect.any(Number),
            location: expect.any(String),
            source: {
                type: expect.any(String),
                code: expect.any(Number)
            },
            modifiers: {
                ctrl: expect.any(Boolean),
                alt: expect.any(Boolean),
                shift: expect.any(Boolean),
                meta: expect.any(Boolean)
            },
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
            keyCode: expect.any(Number),
            location: expect.any(String),
            source: {
                type: expect.any(String),
                code: expect.any(Number)
            },
            modifiers: {
                ctrl: expect.any(Boolean),
                alt: expect.any(Boolean),
                shift: expect.any(Boolean),
                meta: expect.any(Boolean)
            },
            displayName: expect.any(String)
        }
    })
})