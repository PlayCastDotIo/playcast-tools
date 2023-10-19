import { PlaycastMouseMode, PlaycastCursorLockState, PlaycastTargetButton, PlaycastMouseButtonState, 
        PlaycastCursorState, PlaycastMouseInputFromWebGL, PlaycastMouseLocation, PlaycastMouseState,
        PlaycastMouseButton, PlaycastMouseWheel, PlaycastMessageMouseSetMode, PlaycastMessageMouseSetLocation,
        PlaycastMessageMouseMove, PlaycastMessageMouseDown, PlaycastMessageMouseUp, PlaycastMessageMouseWheel,
        PlaycastMessageMouseSetState, PlaycastMouseEvent } from '../lib/mouse'

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
    playerCoordinates: {
        origin: 'topLeft',
        dimensions: {x:2 , y:3}
    },
    position: {x: 56, y:21},
    delta: {x:22, y:45},
}

const messageMouseSetState: PlaycastMessageMouseSetState = {
    target: 'mouse',
    action: 'setState',
    isReply: false,
    message: {
        buttons: {
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
        scroll: { x: 2, y:2 },
        position: { x: 26, y: 25 },
        delta: { x: 76, y: 99 },
        playerCoordinates: {
            origin: 'topLeft',
            dimensions: {x:2 , y:3}
        },
    }
}

describe('PlaycastMouseMode type', () => {
    test('mouse mode has correct form', () => {
        const mode: PlaycastMouseMode = 'none';

        if(mode=='none' || mode=='absolute' || mode=='relative' || mode== 'move' || mode=='location') {
            expect(mode).toBeTruthy();
        }
        else throw new Error('Invalid value for mouse mode. Expected value: none, absolute, relative, move or location');
    })
})

describe('PlaycastCursorLockState', () => {
    test('cursor lock state has correct form', () => {
        const cursorLockState: PlaycastCursorLockState = 'locked';

        if(cursorLockState == 'locked' || cursorLockState == 'confined' || cursorLockState == 'unknown' || cursorLockState == 'none') {
            expect(cursorLockState).toBeTruthy();
        }
        else throw new Error('Invalid value for cursor lock state. Expected value: none, locked, confined or unknown');
    })
})

describe('PlaycastTargetButton type', () => {
    test('target button has correct form', () => {
        const targetButton: PlaycastTargetButton = 'back';

        if(targetButton=='back' || targetButton=='middle' || targetButton =='right' || targetButton=='left' || targetButton == 'forward') {
            expect(targetButton).toBeTruthy();
        }
        else throw new Error('Invalid value for target button. Expected value: back, middle, right left or forward');
    })
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

describe('PlasycastCursorState', () => {
    test('cursor state has correct form', () => {
        const cursorState: PlaycastCursorState = {
            lockState: 'unknown'
        }
        
        if(cursorState.lockState=='unknown' || cursorState.lockState=='none' || cursorState.lockState=='locked' || cursorState.lockState=='confined') {
            expect(cursorState.lockState).toBeTruthy();
        }
        else throw new Error('Invalid value for  lock state. Expected value: none, locked, confined or unknown');
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

describe('PlaycastMouseLocation type', () => {
    test('mouse location has correct form', () => {
        const mouseLocation: PlaycastMouseLocation = {
            playerCoordinates: {
                origin: 'topLeft',
                dimensions: {x:2 , y:3}
            },
            position: {x: 56, y:21},
            delta: {x:22, y:45},
        }

        const mOrigin = mouseLocation.playerCoordinates.origin;
        if(mOrigin == 'topLeft' || mOrigin =='topRight' || mOrigin=='bottomLeft' || mOrigin=='bottomRight') {
            expect(mOrigin).toBeTruthy();
        }
        else {
            throw new Error('Invalid value for origin. Expected value: topLeft, topRight, bottomLeft or bottomRight');
        }

        expect(typeof mouseLocation.playerCoordinates.dimensions.x).toBe('number');
        expect(typeof mouseLocation.playerCoordinates.dimensions.y).toBe('number');
        expect(typeof mouseLocation.position.x).toBe('number');
        expect(typeof mouseLocation.delta.x).toBe('number');
        expect(typeof mouseLocation.delta.y).toBe('number');
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
        playerCoordinates: {
            origin: expect.any(String),
            dimensions: { x: expect.any(Number), y: expect.any(Number) }
        },
        scroll: { x: expect.any(Number), y: expect.any(Number) },
        position: { x: expect.any(Number), y: expect.any(Number) },
        delta: { x: expect.any(Number), y: expect.any(Number) }
    })
})

describe('PlaycastMouseButton type', () => {
    test('mouse button has correct form', () => {
        const mouseButton: PlaycastMouseButton = {
            button: 'right',
            clickCount: 67,
            position: {x: 66, y:2},
            delta: {x:22, y:25},
            playerCoordinates: {
                origin: 'topLeft',
                dimensions: {x:2 , y:3}
            }
        }

        if(mouseButton.button=='left' || mouseButton.button=='middle' || mouseButton.button=='right' || mouseButton.button=='back' || mouseButton.button=='forward') {
            expect(mouseButton.button).toBeTruthy();
        }
        else {
            throw new Error('Invalid value for button. Expected value: left, middle, right, back or forward');
        }
        expect(typeof mouseButton.clickCount).toBe('number');
        expect(typeof mouseButton.position.x).toBe('number');
        expect(typeof mouseButton.position.y).toBe('number');
        expect(typeof mouseButton.delta.x).toBe('number');
        expect(typeof mouseButton.delta.y).toBe('number');
        
        if(mouseButton.playerCoordinates.origin == 'topLeft' || mouseButton.playerCoordinates.origin =='topRight' || mouseButton.playerCoordinates.origin=='bottomLeft' || mouseButton.playerCoordinates.origin=='bottomRight') {
            expect(mouseButton.playerCoordinates.origin).toBeTruthy();
        }
        else throw new Error('Invalid value for origin. Expected value: topLeft, topRight, bottomLeft or bottomRight');

        expect(typeof mouseButton.playerCoordinates.dimensions.x).toBe('number');
        expect(typeof mouseButton.playerCoordinates.dimensions.y).toBe('number');
    })
})

describe('PlaycastMouseWheel type', () => {
    test('mouse wheel has correct form', () => {
        const mouseWheel: PlaycastMouseWheel = {
            playerCoordinates: {
                origin: 'topLeft',
                dimensions: {x:2 , y:3}
            },
            position: { x: 23, y: 28},
            scroll: { x: 19, y: 26}
        }

        if(mouseWheel.playerCoordinates.origin == 'topLeft' || mouseWheel.playerCoordinates.origin =='topRight' || mouseWheel.playerCoordinates.origin=='bottomLeft' || mouseWheel.playerCoordinates.origin=='bottomRight') {
            expect(mouseWheel.playerCoordinates.origin).toBeTruthy();
        }
        else throw new Error('Invalid value for origin. Expected value: topLeft, topRight, bottomLeft or bottomRight');

        expect(typeof mouseWheel.playerCoordinates.dimensions.x).toBe('number');
        expect(typeof mouseWheel.playerCoordinates.dimensions.y).toBe('number');
        expect(typeof mouseWheel.position.x).toBe('number');
        expect(typeof mouseWheel.position.y).toBe('number');
        expect(typeof mouseWheel.scroll.x).toBe('number');
        expect(typeof mouseWheel.scroll.y).toBe('number');
    })
})

describe('PlaycastMessageMouseSetMode type', () => {
    test('message mouse set mode has correct form', () => {
        const messageMouseSetMode: PlaycastMessageMouseSetMode = {
            target: 'mouse',
            action: 'setMode',
            message: 'absolute',
            isReply: false
        }

        if(messageMouseSetMode.target=='mouse') {
           expect(messageMouseSetMode.target).toBeTruthy();
        }
        else throw new Error('Invalid value for target. Expected value: mouse');

        if(messageMouseSetMode.action=='setMode') {
            expect(messageMouseSetMode.action).toBeTruthy();
        }
        else throw new Error('Invalid value for action. Expected value: setMode');

        expect(messageMouseSetMode.isReply).toBe(false);

        if(messageMouseSetMode.message=='none' || messageMouseSetMode.message=='absolute' || messageMouseSetMode.message=='relative'
            || messageMouseSetMode.message=='move' || messageMouseSetMode.message=='location') {
        
            expect(messageMouseSetMode.message).toBeTruthy();
        }
        else throw new Error('Invalid value for message. Expected value: none, absolute, relative, move, location'); 
    })
})

describe('PlaycastMessageMouseSetLocation', () => {
    test('message mouse set location has correct form', () => {
        const messageMouseSetLocation: PlaycastMessageMouseSetLocation = {
            target: 'mouse',
            action: 'setLocation',
            isReply: false,
            message: { 
                position: { x: 66, y: 2 }, 
                delta: { x: 22, y: 25 },
                playerCoordinates: {
                    origin: 'topLeft',
                    dimensions: {x:2 , y:3}
                },
            },
        }

        if(messageMouseSetLocation.target=='mouse') {
            expect(messageMouseSetLocation.target).toBeTruthy();
        }
        else throw new Error('Invalid value for target. Expected value: mouse');

        expect(messageMouseSetLocation.isReply).toBe(false);
        expect(typeof messageMouseSetLocation.message.position.x).toBe('number');
        expect(typeof messageMouseSetLocation.message.position.y).toBe('number');
        expect(typeof messageMouseSetLocation.message.delta.x).toBe('number');
        expect(typeof messageMouseSetLocation.message.delta.y).toBe('number');

        if(messageMouseSetLocation.message.playerCoordinates.origin == 'topLeft' || messageMouseSetLocation.message.playerCoordinates.origin =='topRight' 
            || messageMouseSetLocation.message.playerCoordinates.origin=='bottomLeft' || messageMouseSetLocation.message.playerCoordinates.origin=='bottomRight') {

                expect(messageMouseSetLocation.message.playerCoordinates.origin).toBeTruthy();
        }
        else throw new Error('Invalid value for origin. Expected value: topLeft, topRight, bottomLeft or bottomRight');

        expect(typeof messageMouseSetLocation.message.playerCoordinates.dimensions.x).toBe('number');
        expect(typeof messageMouseSetLocation.message.playerCoordinates.dimensions.y).toBe('number');
    })
})

describe('PlaycastMessageMouseMove type', () => {
    test('message mouse move has correct form', () => {
        const messageMouseMove: PlaycastMessageMouseMove = {
            target: 'mouse',
            action: 'move',
            isReply: false,
            message: { 
                position: { x: 66, y: 2 }, 
                delta: { x: 22, y: 25 },
                playerCoordinates: {
                    origin: 'topLeft',
                    dimensions: {x:2 , y:3}
                },
            },
        }

        if(messageMouseMove.target=='mouse') {
            expect(messageMouseMove.target).toBeTruthy();
        }
        else throw new Error('Invalid value for target. Expected value: mouse');

        if(messageMouseMove.action=='move') {
            expect(messageMouseMove.action).toBeTruthy();
        }
        else throw new Error('Invalid value for action. Expected value: move');
        
        expect(typeof messageMouseMove.message.position.x).toBe('number');
        expect(typeof messageMouseMove.message.position.y).toBe('number');
        expect(typeof messageMouseMove.message.delta.x).toBe('number');
        expect(typeof messageMouseMove.message.delta.x).toBe('number');
        
        if(messageMouseMove.message.playerCoordinates.origin == 'topLeft' || messageMouseMove.message.playerCoordinates.origin =='topRight' 
            || messageMouseMove.message.playerCoordinates.origin=='bottomLeft' || messageMouseMove.message.playerCoordinates.origin=='bottomRight') {

                expect(messageMouseMove.message.playerCoordinates.origin).toBeTruthy();
        }
        else throw new Error('Invalid value for origin. Expected value: topLeft, topRight, bottomLeft or bottomRight');

        expect(typeof messageMouseMove.message.playerCoordinates.dimensions.x).toBe('number');
        expect(typeof messageMouseMove.message.playerCoordinates.dimensions.y).toBe('number');
        expect(messageMouseMove.isReply).toBe(false);
    })
})

describe('PlaycastMessageMouseDown type', () => {
    test('message mouse down has correct form', () => {
        const messageMouseDown: PlaycastMessageMouseDown = {
            target: 'mouse',
            action: 'down',
            message: {
                button: 'right',
                clickCount: 22,
                position: { x: 66, y: 2 }, 
                delta: { x: 22, y: 25 },
                playerCoordinates: {
                    origin: 'topLeft',
                    dimensions: {x:2 , y:3}
                },
            },
            isReply: false
        }

        if(messageMouseDown.target=='mouse') {
            expect(messageMouseDown.target).toBeTruthy();
        }
        else throw new Error('Invalid value for target. Expected value: mouse');

        if(messageMouseDown.action=='down') {
            expect(messageMouseDown.action).toBeTruthy();
        }
        else throw new Error('Invalid value for action. Expected value: down');

        if(messageMouseDown.message.button=='left' || messageMouseDown.message.button=='middle' || messageMouseDown.message.button=='right' || messageMouseDown.message.button=='back' || messageMouseDown.message.button=='forward') {
            expect(messageMouseDown.message.button).toBeTruthy();
        }
        else {
            throw new Error('Invalid value for button. Expected value: left, middle, right, back or forward');
        }
        
        expect(typeof messageMouseDown.message.clickCount).toBe('number');
        expect(typeof messageMouseDown.message.position.x).toBe('number');
        expect(typeof messageMouseDown.message.position.y).toBe('number');
        expect(typeof messageMouseDown.message.delta.x).toBe('number');
        expect(typeof messageMouseDown.message.delta.x).toBe('number');
        
        if(messageMouseDown.message.playerCoordinates.origin == 'topLeft' || messageMouseDown.message.playerCoordinates.origin =='topRight' 
            || messageMouseDown.message.playerCoordinates.origin=='bottomLeft' || messageMouseDown.message.playerCoordinates.origin=='bottomRight') {

                expect(messageMouseDown.message.playerCoordinates.origin).toBeTruthy();
        }
        else throw new Error('Invalid value for origin. Expected value: topLeft, topRight, bottomLeft or bottomRight');

        expect(typeof messageMouseDown.message.playerCoordinates.dimensions.x).toBe('number');
        expect(typeof messageMouseDown.message.playerCoordinates.dimensions.y).toBe('number');
        expect(messageMouseDown.isReply).toBe(false);
    })
})

describe('PlaycastMessageMouseUp', () => {
    test('message mouse down has correct form', () => {
        const messageMouseUp: PlaycastMessageMouseUp = {
            target: 'mouse',
            action: 'up',
            message: {
                button: 'left',
                clickCount: 7,
                position: { x: 26, y: 25 },
                delta: { x: 76, y: 99 },
                playerCoordinates: {
                    origin: 'topLeft',
                    dimensions: {x:2 , y:3}
                },
            },
            isReply: false
        }

        if(messageMouseUp.target=='mouse') {
            expect(messageMouseUp.target).toBeTruthy();
        }
        else throw new Error('Invalid value for target. Expected value: mouse');

        if(messageMouseUp.action=='up') {
            expect(messageMouseUp.action).toBeTruthy();
        }
        else throw new Error('Invalid value for action. Expected value: up');

        if(messageMouseUp.message.button=='left' || messageMouseUp.message.button=='middle' || messageMouseUp.message.button=='right' || messageMouseUp.message.button=='back' || messageMouseUp.message.button=='forward') {
            expect(messageMouseUp.message.button).toBeTruthy();
        }
        else {
            throw new Error('Invalid value for button. Expected value: left, middle, right, back or forward');
        }
        
        expect(typeof messageMouseUp.message.clickCount).toBe('number');
        expect(typeof messageMouseUp.message.position.x).toBe('number');
        expect(typeof messageMouseUp.message.position.y).toBe('number');
        expect(typeof messageMouseUp.message.delta.x).toBe('number');
        expect(typeof messageMouseUp.message.delta.x).toBe('number');
        
        if(messageMouseUp.message.playerCoordinates.origin == 'topLeft' || messageMouseUp.message.playerCoordinates.origin =='topRight' 
            || messageMouseUp.message.playerCoordinates.origin=='bottomLeft' || messageMouseUp.message.playerCoordinates.origin=='bottomRight') {

                expect(messageMouseUp.message.playerCoordinates.origin).toBeTruthy();
        }
        else throw new Error('Invalid value for origin. Expected value: topLeft, topRight, bottomLeft or bottomRight');

        expect(typeof messageMouseUp.message.playerCoordinates.dimensions.x).toBe('number');
        expect(typeof messageMouseUp.message.playerCoordinates.dimensions.y).toBe('number');
        expect(messageMouseUp.isReply).toBe(false);
    })
})

describe('PlaycastMessageMouseWheel type', () => {
    test('message mouse wheel has correct form', () => {
        const messageMouseWheel: PlaycastMessageMouseWheel = {
            target: 'mouse',
            action: 'wheel',
            message: {
                position: { x: 23, y: 28 }, 
                scroll: { x: 19, y: 26 },
                playerCoordinates: {    
                    origin: 'topLeft',
                    dimensions: {x:2 , y:3}
                },
            },
            isReply: false
        }

        if(messageMouseWheel.target=='mouse') {
            expect(messageMouseWheel.target).toBeTruthy();
        }
        else throw new Error('Invalid value for target. Expected value: mouse');

        if(messageMouseWheel.action=='wheel') {
            expect(messageMouseWheel.action).toBeTruthy();
        }
        else throw new Error('Invalid value for action. Expected value: wheel');
        
        expect(typeof messageMouseWheel.message.position.x).toBe('number');
        expect(typeof messageMouseWheel.message.position.y).toBe('number');
        
        if(messageMouseWheel.message.playerCoordinates.origin == 'topLeft' || messageMouseWheel.message.playerCoordinates.origin =='topRight' 
            || messageMouseWheel.message.playerCoordinates.origin=='bottomLeft' || messageMouseWheel.message.playerCoordinates.origin=='bottomRight') {

                expect(messageMouseWheel.message.playerCoordinates.origin).toBeTruthy();
        }
        else throw new Error('Invalid value for origin. Expected value: topLeft, topRight, bottomLeft or bottomRight');

        expect(typeof messageMouseWheel.message.playerCoordinates.dimensions.x).toBe('number');
        expect(typeof messageMouseWheel.message.playerCoordinates.dimensions.y).toBe('number');
        expect(messageMouseWheel.isReply).toBe(false);
    })
})

test('message mouse set state has correct form', () => {
    expect(messageMouseSetState).toMatchObject<PlaycastMessageMouseSetState>({
        target: expect.any(String),
        action: expect.any(String),
        isReply: expect.any(Boolean),
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
            delta: { x: expect.any(Number), y: expect.any(Number)},
            playerCoordinates: {
                origin: expect.any(String),
                dimensions: { x: expect.any(Number), y: expect.any(Number) }
            },
        }
    })
})

describe('PlaycastMouseEvent type', () => {
    test('mouse event has correct form', () => {
        const mouseEvent: PlaycastMouseEvent = {
            target: 'mouse',
            action: 'up',
            message: {
                button: 'left',
                clickCount: 7,
                position: { x: 26, y: 25 },
                delta: { x: 76, y: 99 },
                playerCoordinates: {
                    origin: 'topLeft',
                    dimensions: {x:2 , y:3}
                },
            },
            isReply: false
        }

        if(mouseEvent.target=='mouse') {
            expect(mouseEvent.target).toBeTruthy();
        }
        else throw new Error('Invalid value for target. Expected value: mouse');

        if(mouseEvent.action=='up') {
            expect(mouseEvent.action).toBeTruthy();
        }
        else throw new Error('Invalid value for action. Expected value: up');

        if(mouseEvent.message.button=='left' || mouseEvent.message.button=='middle' || mouseEvent.message.button=='right' || mouseEvent.message.button=='back' || mouseEvent.message.button=='forward') {
            expect(mouseEvent.message.button).toBeTruthy();
        }
        else {
            throw new Error('Invalid value for button. Expected value: left, middle, right, back or forward');
        }
        
        expect(typeof mouseEvent.message.clickCount).toBe('number');
        expect(typeof mouseEvent.message.position.x).toBe('number');
        expect(typeof mouseEvent.message.position.y).toBe('number');
        expect(typeof mouseEvent.message.delta.x).toBe('number');
        expect(typeof mouseEvent.message.delta.x).toBe('number');
        
        if(mouseEvent.message.playerCoordinates.origin == 'topLeft' || mouseEvent.message.playerCoordinates.origin =='topRight' 
            || mouseEvent.message.playerCoordinates.origin=='bottomLeft' || mouseEvent.message.playerCoordinates.origin=='bottomRight') {

                expect(mouseEvent.message.playerCoordinates.origin).toBeTruthy();
        }
        else throw new Error('Invalid value for origin. Expected value: topLeft, topRight, bottomLeft or bottomRight');

        expect(typeof mouseEvent.message.playerCoordinates.dimensions.x).toBe('number');
        expect(typeof mouseEvent.message.playerCoordinates.dimensions.y).toBe('number');
        expect(mouseEvent.isReply).toBe(false);
    })
})
