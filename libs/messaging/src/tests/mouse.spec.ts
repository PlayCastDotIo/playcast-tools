import { PlaycastMouseMode, PlaycastCursorLockState, PlaycastTargetButton, PlaycastMouseButtonState, 
         PlaycastCursorState, PlaycastMouseInputFromWebGL, PlaycastMouseLocation, PlaycastMouseState,
         PlaycastMouseButton, PlaycastMouseWheel, PlaycastMessageMouseSetMode, PlaycastMessageMouseSetLocation,
         PlaycastMessageMouseMove, PlaycastMessageMouseDown, PlaycastMessageMouseUp, PlaycastMessageMouseWheel,
         PlaycastMessageMouseSetState, PlaycastMouseEvent, 
        } from '../lib/mouse'

function isOfTypeMouseMode(value: string): value is PlaycastMouseMode {
    return ['none', 'absolute', 'relative', 'move'].includes(value);
}

function isOfTypeCursorLockState(value: string): value is PlaycastCursorLockState {
    return ['none', 'locked', 'confined', 'unknown'].includes(value);
}

function isOfTypeTargetButton(value: string): value is PlaycastTargetButton {
    return ['left', 'middle', 'right', 'back', 'forward'].includes(value);
}

const cursorState: PlaycastCursorState = {
    lockState: 'locked'
}

const mouseButtonState: PlaycastMouseButtonState = {
    back: {
        isPressed: true,
        wasPressed: false,
        wasReleased: true     
    },
    forward: {
        isPressed: true,
        wasPressed: true,
        wasReleased: true     
    },
    left: {
        isPressed: false,
        wasPressed: false,
        wasReleased: true     
    },
    middle: {
        isPressed: true,
        wasPressed: false,
        wasReleased: true     
    },
    right: {
        isPressed: true,
        wasPressed: false,
        wasReleased: false     
    },
    clickCount: 7
}

const mouseInputFromWebGL: PlaycastMouseInputFromWebGL = {
    position: {x: 5, y:7},
    delta: {x:2, y:4},
    buttons:
            {  
                back: {
                isPressed: true,
                wasPressed: false,
                wasReleased: true     
                },
                forward: {
                    isPressed: true,
                    wasPressed: true,
                    wasReleased: true     
                },
                left: {
                    isPressed: false,
                    wasPressed: false,
                    wasReleased: true     
                },
                middle: {
                    isPressed: true,
                    wasPressed: false,
                    wasReleased: true     
                },
                right: {
                    isPressed: true,
                    wasPressed: false,
                    wasReleased: false     
                },
                clickCount: 7
            },
    scroll: {x:8, y:1},
    cursor: {
       lockState: 'locked' 
    }
}

const mouseLocation: PlaycastMouseLocation = {
    position: {x: 56, y:21},
    delta: {x:22, y:45},
}

const mouseState: PlaycastMouseState = {
    buttons:
            {  
                back: {
                isPressed: true,
                wasPressed: false,
                wasReleased: true     
                },
                forward: {
                    isPressed: true,
                    wasPressed: true,
                    wasReleased: true     
                },
                left: {
                    isPressed: false,
                    wasPressed: false,
                    wasReleased: true     
                },
                middle: {
                    isPressed: true,
                    wasPressed: false,
                    wasReleased: true     
                },
                right: {
                    isPressed: true,
                    wasPressed: false,
                    wasReleased: false     
                },
                clickCount: 7
            },
    scroll: {x: 5, y:21},
    position: {x: 56, y:21},
    delta: {x:22, y:45},
}

const mouseButton: PlaycastMouseButton = {
    button: 'right',
    clickCount: 67,
    position: {x: 66, y:2},
    delta: {x:22, y:25},
}

const mouseWheel: PlaycastMouseWheel = {
    position: { x: 23, y: 28},
    scroll: { x: 19, y: 26}
}

const messageMouseSetMode: PlaycastMessageMouseSetMode = { 
    target: 'mouse',
    action: 'setMode',
    message: 'absolute'
}

const messageMouseSetLocation: PlaycastMessageMouseSetLocation = {
    target: 'mouse',
    action: 'setLocation',
    message: { position: {x: 66, y:2}, delta: {x:22, y:25} }
}

const messageMouseMove: PlaycastMessageMouseMove = { 
    target: 'mouse',
    action: 'move',
    message: { position: {x: 56, y:21}, delta: {x:22, y:45}, }
}

const messageMouseDown: PlaycastMessageMouseDown = {
    target: 'mouse',
    action: 'down',
    message: {  
        button: 'right',
        clickCount: 22,
        position: {x: 452, y:245},
        delta: {x:222, y:215} 
    }   
}

const messageMouseUp: PlaycastMessageMouseUp = {
    target: 'mouse',
    action: 'up',
    message: {  
        button: 'left',
        clickCount: 7,
        position: {x: 26, y:25},
        delta: {x:76, y:99} 
    }   
}

const messageMouseWheel: PlaycastMessageMouseWheel = {
    target: 'mouse',
    action: 'wheel',
    message: {
        position: { x: 23, y: 28}, scroll: { x: 19, y: 26}
    }
}

const messageMouseSetState: PlaycastMessageMouseSetState = {
    target: 'mouse',
    action: 'setState',
    message: {
        buttons:
            {  
                back: {
                isPressed: true,
                wasPressed: false,
                wasReleased: true     
                },
                forward: {
                    isPressed: true,
                    wasPressed: true,
                    wasReleased: true     
                },
                left: {
                    isPressed: false,
                    wasPressed: false,
                    wasReleased: true     
                },
                middle: {
                    isPressed: true,
                    wasPressed: false,
                    wasReleased: true     
                },
                right: {
                    isPressed: true,
                    wasPressed: false,
                    wasReleased: false     
                },
                clickCount: 7
            },
        scroll: {x: 345, y:213},
        position: {x: 6, y:251},
        delta: {x:12, y:465},
    }
}

const mouseEvent: PlaycastMouseEvent = {
    target: 'mouse',
    action: 'up',
    message: {  
        button: 'left',
        clickCount: 7,
        position: {x: 26, y:25},
        delta: {x:76, y:99} 
    }   
}

test('mouse mode has correct form', () => {
    expect(isOfTypeMouseMode('none')).toBeTruthy();
    expect(isOfTypeMouseMode('absolute')).toBeTruthy();
    expect(isOfTypeMouseMode('relative')).toBeTruthy();
    expect(isOfTypeMouseMode('move')).toBeTruthy();
})

test('cursor lock state has correct form', () => {
    expect(isOfTypeCursorLockState('none')).toBeTruthy();
    expect(isOfTypeCursorLockState('confined')).toBeTruthy();
    expect(isOfTypeCursorLockState('locked')).toBeTruthy();
    expect(isOfTypeCursorLockState('unknown')).toBeTruthy();
})

test('target button has correct form', () => {
    expect(isOfTypeTargetButton('left')).toBeTruthy();
    expect(isOfTypeTargetButton('middle')).toBeTruthy();
    expect(isOfTypeTargetButton('right')).toBeTruthy();
    expect(isOfTypeTargetButton('back')).toBeTruthy();
    expect(isOfTypeTargetButton('forward')).toBeTruthy();
})


test('mouse button state has correct form', () => {
    expect(mouseButtonState).toMatchObject<PlaycastMouseButtonState>({
        back: {
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean)
        },
        forward: {
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean)
        },
        left: {
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean)
        },
        middle: {
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean)
        },
        right: {
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean)
        },
        clickCount: expect.any(Number)
    })
})

test('cursor state has correct form', () => {
    expect(cursorState).toMatchObject<PlaycastCursorState>({
        lockState: expect.any(String)
    })
})

test('mouse input from webGL has correct form', () => {
    expect(mouseInputFromWebGL).toMatchObject<PlaycastMouseInputFromWebGL>({
        position: { x: expect.any(Number), y: expect.any(Number) },
        delta: { x: expect.any(Number), y: expect.any(Number) },
        buttons: {
            back: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            forward: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            left: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            middle: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            right: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            clickCount: expect.any(Number)
        },
        scroll: { x: expect.any(Number), y: expect.any(Number) },
        cursor: { lockState: expect.any(String)}
    })    
})
 
test('mouse location has correct form', () => {
    expect(mouseLocation).toMatchObject<PlaycastMouseLocation>({
        position: { x: expect.any(Number), y: expect.any(Number) },
        delta: { x: expect.any(Number), y: expect.any(Number) }
    })
})

test('mouse state has correct form', () => {
    expect(mouseState).toMatchObject<PlaycastMouseState>({
        buttons: {
            back: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            forward: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            left: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            middle: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            right: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            clickCount: expect.any(Number)
        },
        scroll: { x: expect.any(Number), y: expect.any(Number) },
        position: { x: expect.any(Number), y: expect.any(Number) },
        delta: { x: expect.any(Number), y: expect.any(Number) }
    })
})

test('mouse button has correct form', () => {
    expect(mouseButton).toMatchObject<PlaycastMouseButton>({
        button: expect.any(String),
        clickCount: expect.any(Number),
        position: { x: expect.any(Number), y: expect.any(Number)},
        delta: { x: expect.any(Number), y: expect.any(Number)},
    })
})

test('mouse wheel has correct form', () => {
    expect(mouseWheel).toMatchObject<PlaycastMouseWheel>({
        position: { x: expect.any(Number), y: expect.any(Number)},
        scroll: { x: expect.any(Number), y: expect.any(Number)},
    })
})

test('message mouse set mode has correct form', () => {
    expect(messageMouseSetMode).toMatchObject<PlaycastMessageMouseSetMode>({
        target: expect.any(String),
        action: expect.any(String),
        message: expect.any(String)
    })
})

test('message mouse set location has correct form', () => {
    expect(messageMouseSetLocation).toMatchObject<PlaycastMessageMouseSetLocation>({
        target: expect.any(String),
        action: expect.any(String),
        message: {
            position: { x: expect.any(Number), y: expect.any(Number)},
            delta: { x: expect.any(Number), y: expect.any(Number)}
        }
    })
})

test('message mouse move has correct form', () => {
    expect(messageMouseMove).toMatchObject<PlaycastMessageMouseMove>({
        target: expect.any(String),
        action: expect.any(String),
        message: {
            position: { x: expect.any(Number), y: expect.any(Number)},
            delta: { x: expect.any(Number), y: expect.any(Number)}
        }
    })
})

test('message mouse down has correct form', () => {
    expect(messageMouseDown).toMatchObject<PlaycastMessageMouseDown>({
        target: expect.any(String),
        action: expect.any(String),
        message: {
            button: expect.any(String),
            clickCount: expect.any(Number),
            position: { x: expect.any(Number), y: expect.any(Number)},
            delta: { x: expect.any(Number), y: expect.any(Number)},
        } 
    })
})

test('message mouse down has correct form', () => {
    expect(messageMouseUp).toMatchObject<PlaycastMessageMouseUp>({
        target: expect.any(String),
        action: expect.any(String),
        message: {
            button: expect.any(String),
            clickCount: expect.any(Number),
            position: { x: expect.any(Number), y: expect.any(Number)},
            delta: { x: expect.any(Number), y: expect.any(Number)},
        } 
    })
})

test('message mouse wheel has correct form', () => {
    expect(messageMouseWheel).toMatchObject<PlaycastMessageMouseWheel>({
        target: expect.any(String),
        action: expect.any(String),
        message: {
            position: { x: expect.any(Number), y: expect.any(Number)},
            scroll: { x: expect.any(Number), y: expect.any(Number)}
        } 
    })
})

test('message mouse set state has correct form', () => {
    expect(messageMouseSetState).toMatchObject<PlaycastMessageMouseSetState>({
        target: expect.any(String),
        action: expect.any(String),
        message: {
            buttons: {
                back: {
                    isPressed: expect.any(Boolean),
                    wasPressed: expect.any(Boolean),
                    wasReleased: expect.any(Boolean)
                },
                forward: {
                    isPressed: expect.any(Boolean),
                    wasPressed: expect.any(Boolean),
                    wasReleased: expect.any(Boolean)
                },
                left: {
                    isPressed: expect.any(Boolean),
                    wasPressed: expect.any(Boolean),
                    wasReleased: expect.any(Boolean)
                },
                middle: {
                    isPressed: expect.any(Boolean),
                    wasPressed: expect.any(Boolean),
                    wasReleased: expect.any(Boolean)
                },
                right: {
                    isPressed: expect.any(Boolean),
                    wasPressed: expect.any(Boolean),
                    wasReleased: expect.any(Boolean)
                },
                clickCount: expect.any(Number)
            },
            scroll: { x: expect.any(Number), y: expect.any(Number)},
            position: { x: expect.any(Number), y: expect.any(Number)},
            delta: { x: expect.any(Number), y: expect.any(Number)}
        }
    })
})

test('mouse event has correct form', () => {
    expect(mouseEvent).toMatchObject<PlaycastMouseEvent>({
        target: expect.any(String),
        action: expect.any(String),
        message: {
            button: expect.any(String),
            clickCount: expect.any(Number),
            position: { x: expect.any(Number), y: expect.any(Number) },
            delta: { x: expect.any(Number), y: expect.any(Number) },
        }
    })
})