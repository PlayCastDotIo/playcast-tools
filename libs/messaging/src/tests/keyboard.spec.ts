import exp = require('constants')
import { expect, test } from 'vitest'
import { PlaycastKeyDetail, PlaycastKey, PlaycastKeyboardState, PlaycastKeyboardMessages, PlaycastMessageKeyboardSetState,
         PlaycastMessageKeyboardDown, PlaycastMessageKeyboardUp, PlaycastKeyboardEvent,  } from '../lib/keyboard'

describe('PlaycastKeyDetail type', () => {
    test('has correct form', () => {
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
        
        expect(typeof keyDetail.keyCode).toBe('number');
        expect(keyDetail.location).toBe('standard');

        const src = keyDetail.source;
        expect(typeof src.type).toBe('string');
        expect(typeof src.code).toBe('number');

        const mod = keyDetail.modifiers;
        expect(typeof mod.ctrl).toBe('boolean');
        
        expect(typeof keyDetail.displayName).toBe('string');
    });
});

describe('PlaycastKey type', () => {
    test('cast key has correct form', () => {
        const castKey: PlaycastKey = {
            isPressed: false,
            wasPressed: false,
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
        expect(typeof castKey.isPressed).toBe('boolean');
        expect(typeof castKey.wasPressed).toBe('boolean');
        expect(typeof castKey.wasReleased).toBe('boolean');
        expect(typeof castKey.keyCode).toBe('number');
        expect(castKey.location).toBe('standard');
        expect(typeof castKey.source.type).toBe('string');
        expect(typeof castKey.source.code).toBe('number');
        expect(typeof castKey.modifiers.ctrl).toBe('boolean');
        expect(typeof castKey.modifiers.alt).toBe('boolean');
        expect(typeof castKey.modifiers.shift).toBe('boolean');
        expect(typeof castKey.modifiers.meta).toBe('boolean');
        expect(typeof castKey.displayName).toBe('string');
    })
})

describe('PlaycastKeyboardState type', () => {
    test('has correct form', () => {
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
        
        const keys = keyboardState.keys;
        expect(typeof keys[0].isPressed).toBe('boolean');
        expect(typeof keys[0].wasPressed).toBe('boolean');
        expect(typeof keys[0].wasReleased).toBe('boolean');
        expect(typeof keys[0].keyCode).toBe('number');
        expect(keys[0].location).toBe('numpad');
        expect(typeof keys[0].source.type).toBe('string');
        expect(typeof keys[0].source.code).toBe('number');
        expect(typeof keys[0].modifiers.ctrl).toBe('boolean');
        expect(typeof keys[0].modifiers.alt).toBe('boolean');
        expect(typeof keys[0].modifiers.shift).toBe('boolean');
        expect(typeof keys[0].modifiers.meta).toBe('boolean');
        expect(typeof keys[0].displayName).toBe('string');
    })
})

describe('PlaycastKeyboardMessages type', () => {
    test('keyboard message has correct sample form', () => {
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

        expect(keyboardMessages.target).toBe('keyboard');
        expect(keyboardMessages.action).toBe('down');
        expect(keyboardMessages.isReply).toBe(false);
        
        const message = keyboardMessages.message;
        expect(typeof message.keyCode).toBe('number');
        expect(message.location).toBe('left');
        expect(typeof message.source.type).toBe('string');
        expect(typeof message.source.type).toBe('string');
        expect(typeof message.modifiers.ctrl).toBe('boolean');
        expect(typeof message.modifiers.alt).toBe('boolean');
        expect(typeof message.modifiers.shift).toBe('boolean');
        expect(typeof message.modifiers.meta).toBe('boolean');
        expect(typeof message.displayName).toBe('string');
    })
})

describe('PlaycastMessageKeyboardSetState type', () => {
    test('message keyboard set state has correct form', () => {
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

        expect(messageKeyboardSetState.target).toBe('keyboard');
        expect(messageKeyboardSetState.action).toBe('setState');
        expect(messageKeyboardSetState.isReply).toBe(false);
        
        const message = messageKeyboardSetState.message;
        expect(typeof message.keys[0].isPressed).toBe('boolean');
        expect(typeof message.keys[0].wasPressed).toBe('boolean');
        expect(typeof message.keys[0].wasReleased).toBe('boolean');
        expect(typeof message.keys[0].keyCode).toBe('number');
        expect(message.keys[0].location).toBe('numpad');
        expect(typeof message.keys[0].source.type).toBe('string');
        expect(typeof message.keys[0].source.code).toBe('number');
        expect(typeof message.keys[0].modifiers.ctrl).toBe('boolean');
        expect(typeof message.keys[0].modifiers.alt).toBe('boolean');
        expect(typeof message.keys[0].modifiers.shift).toBe('boolean');
        expect(typeof message.keys[0].modifiers.meta).toBe('boolean');
        expect(typeof message.keys[0].displayName).toBe('string');
    })
})

describe('PlaycastMessageKeyboardDown type', () => {
    test('message keyboard down has correct form', () => {
        const messageKeyboardDown: PlaycastMessageKeyboardDown = {
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

        expect(messageKeyboardDown.target).toBe('keyboard');
        expect(messageKeyboardDown.action).toBe('down');
        expect(messageKeyboardDown.isReply).toBe(false);
        
        const message = messageKeyboardDown.message;
        expect(typeof message.keyCode).toBe('number');
        expect(message.location).toBe('standard');
        expect(typeof message.source.type).toBe('string');
        expect(typeof message.source.type).toBe('string');
        expect(typeof message.modifiers.ctrl).toBe('boolean');
        expect(typeof message.modifiers.alt).toBe('boolean');
        expect(typeof message.modifiers.shift).toBe('boolean');
        expect(typeof message.modifiers.meta).toBe('boolean');
        expect(typeof message.displayName).toBe('string');
    })
})

describe('PlaycastMessageKeyboardUp type', () => {
    test('message keyboard up has correct form', () => {
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
        
        expect(messageKeyboardUp.target).toBe('keyboard');
        expect(messageKeyboardUp.action).toBe('up');
        expect(messageKeyboardUp.isReply).toBe(false);
        
        const message = messageKeyboardUp.message;
        expect(typeof message.keyCode).toBe('number');
        expect(message.location).toBe('standard');
        expect(typeof message.source.type).toBe('string');
        expect(typeof message.source.type).toBe('string');
        expect(typeof message.modifiers.ctrl).toBe('boolean');
        expect(typeof message.modifiers.alt).toBe('boolean');
        expect(typeof message.modifiers.shift).toBe('boolean');
        expect(typeof message.modifiers.meta).toBe('boolean');
        expect(typeof message.displayName).toBe('string');
    })
})

describe('PlaycastKeyboardEven type', () => {
    test('keyboard event has correct form', () => {
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

        expect(keyboardEvent.target).toBe('keyboard');
        expect(keyboardEvent.action).toBe('up');
        expect(keyboardEvent.isReply).toBe(false);
        
        const message = keyboardEvent.message;
        expect(typeof message.keyCode).toBe('number');
        expect(message.location).toBe('standard');
        expect(typeof message.source.type).toBe('string');
        expect(typeof message.source.type).toBe('string');
        expect(typeof message.modifiers.ctrl).toBe('boolean');
        expect(typeof message.modifiers.alt).toBe('boolean');
        expect(typeof message.modifiers.shift).toBe('boolean');
        expect(typeof message.modifiers.meta).toBe('boolean');
        expect(typeof message.displayName).toBe('string');
    })
})