import { expect, test } from "vitest";
import { PlaycastTrigger, PlaycastStick, PlaycastGamepadInputFromWebGL, PlaycastGamepadsInputFromWebGL,
         PlaycastGamepad, PlaycastGamepadState, XInput, PlaycastGamepadXInput, PlaycastGamepadMessages,
         PlaycastMessageGamepadSetState, PlaycastMessageGamepadSetXInput } from '../lib/gamepad'

const trigger: PlaycastTrigger = {
    value: 28,
    isPressed: true,
    wasPressed: true,
    wasReleased: false
}

const stick: PlaycastStick = {
    stick: { x: 56, y: 22 },
    button: {
        isPressed: false,
        wasPressed: true,
        wasReleased: false
    }
}

const gamepadInputFromWebGL: PlaycastGamepadInputFromWebGL = {
    deviceId: 5123,
    buttonEast: {
        isPressed: false,
        wasPressed: false,
        wasReleased: false
    },
    buttonNorth: {
        isPressed: true,
        wasPressed: false,
        wasReleased: false
    },
    buttonSouth: {
        isPressed: false,
        wasPressed: false,
        wasReleased: false
    },
    buttonWest: {
        isPressed: false,
        wasPressed: false,
        wasReleased: true
    },
    dpadRight: {
        isPressed: true,
        wasPressed: true,
        wasReleased: true
    },
    dpadLeft: {
        isPressed: true,
        wasPressed: true,
        wasReleased: true
    },
    dpadUp: {
        isPressed: true,
        wasPressed: true,
        wasReleased: true
    },
    dpadDown: {
        isPressed: true,
        wasPressed: true,
        wasReleased: true
    },
    leftShoulder: {
        isPressed: true,
        wasPressed: true,
        wasReleased: true
    },
    leftStick: { x: 55, y: 5 },
    leftStickButton: {
        isPressed: false,
        wasPressed: false,
        wasReleased: true
    },
    leftTrigger: {
        value: 332,
        isPressed: true,
        wasPressed: true,
        wasReleased: false
    },
    rightShoulder: {
        isPressed: true,
        wasPressed: false,
        wasReleased: true
    },
    rightStick: { x: 45, y: 25 },
    rightStickButton: {
        isPressed: false,
        wasPressed: false,
        wasReleased: true
    },
    rightTrigger: {
        value: 66,
        isPressed: true,
        wasPressed: true,
        wasReleased: false
    },
    select: {
        isPressed: true,
        wasPressed: false,
        wasReleased: true
    },
    start: {
        isPressed: true,
        wasPressed: true,
        wasReleased: true
    }
}

const gamepadsInputFromWebGL: PlaycastGamepadsInputFromWebGL = {
    gamepads: [{
        deviceId: 5123,
        buttonEast: {
            isPressed: false,
            wasPressed: false,
            wasReleased: false
        },
        buttonNorth: {
            isPressed: true,
            wasPressed: false,
            wasReleased: false
        },
        buttonSouth: {
            isPressed: false,
            wasPressed: false,
            wasReleased: false
        },
        buttonWest: {
            isPressed: false,
            wasPressed: false,
            wasReleased: true
        },
        dpadRight: {
            isPressed: true,
            wasPressed: true,
            wasReleased: true
        },
        dpadLeft: {
            isPressed: true,
            wasPressed: true,
            wasReleased: true
        },
        dpadUp: {
            isPressed: true,
            wasPressed: true,
            wasReleased: true
        },
        dpadDown: {
            isPressed: true,
            wasPressed: true,
            wasReleased: true
        },
        leftShoulder: {
            isPressed: true,
            wasPressed: true,
            wasReleased: true
        },
        leftStick: { x: 55, y: 5 },
        leftStickButton: {
            isPressed: false,
            wasPressed: false,
            wasReleased: true
        },
        leftTrigger: {
            value: 332,
            isPressed: true,
            wasPressed: true,
            wasReleased: false
        },
        rightShoulder: {
            isPressed: true,
            wasPressed: false,
            wasReleased: true
        },
        rightStick: { x: 45, y: 25 },
        rightStickButton: {
            isPressed: false,
            wasPressed: false,
            wasReleased: true
        },
        rightTrigger: {
            value: 66,
            isPressed: true,
            wasPressed: true,
            wasReleased: false
        },
        select: {
            isPressed: true,
            wasPressed: false,
            wasReleased: true
        },
        start: {
            isPressed: true,
            wasPressed: true,
            wasReleased: true
        }
    }]
}

const gamePad: PlaycastGamepad = {
    deviceId: 1234,
    buttons: {
        east: {
            isPressed: true,
            wasPressed: true,
            wasReleased: true
        },
        north: {
            isPressed: true,
            wasPressed: true,
            wasReleased: true
        },
        south: {
            isPressed: true,
            wasPressed: true,
            wasReleased: true
        },
        west: {
            isPressed: true,
            wasPressed: true,
            wasReleased: true
        },
        leftShoulder: {
            isPressed: true,
            wasPressed: true,
            wasReleased: true
        },
        rightShoulder: {
            isPressed: true,
            wasPressed: true,
            wasReleased: true
        },
        select: {
            isPressed: true,
            wasPressed: true,
            wasReleased: true
        },
        start: {
            isPressed: true,
            wasPressed: true,
            wasReleased: true
        },
        dpadUp: {
            isPressed: true,
            wasPressed: true,
            wasReleased: true
        },
        dpadDown: {
            isPressed: true,
            wasPressed: true,
            wasReleased: true
        },
        dpadLeft: {
            isPressed: true,
            wasPressed: true,
            wasReleased: true
        },
        dpadRight: {
            isPressed: true,
            wasPressed: true,
            wasReleased: true
        }
    },
    triggers: {
        left: {
            value: 6,
            isPressed: true,
            wasPressed: true,
            wasReleased: true
        },
        right: {
            value: 7,
            isPressed: true,
            wasPressed: true,
            wasReleased: true
        }
    },
    sticks: {
        left: {
            stick: { x: 786, y: 2 },
            button: {
                isPressed: false,
                wasPressed: true,
                wasReleased: false
            }
        },
        right: {
            stick: { x: 6, y: 66 },
            button: {
                isPressed: false,
                wasPressed: true,
                wasReleased: false
            }
        }
    }
}

const gamepadState: PlaycastGamepadState = {
    playerCoordinates: {
        origin: 'topLeft',
        dimensions: {
            x: 2,
            y: 6
        }
    },
    gamepads: [{
        deviceId: 1234,
        buttons: {
            east: {
                isPressed: true,
                wasPressed: true,
                wasReleased: true
            },
            north: {
                isPressed: true,
                wasPressed: true,
                wasReleased: true
            },
            south: {
                isPressed: true,
                wasPressed: true,
                wasReleased: true
            },
            west: {
                isPressed: true,
                wasPressed: true,
                wasReleased: true
            },
            leftShoulder: {
                isPressed: true,
                wasPressed: true,
                wasReleased: true
            },
            rightShoulder: {
                isPressed: true,
                wasPressed: true,
                wasReleased: true
            },
            select: {
                isPressed: true,
                wasPressed: true,
                wasReleased: true
            },
            start: {
                isPressed: true,
                wasPressed: true,
                wasReleased: true
            },
            dpadUp: {
                isPressed: true,
                wasPressed: true,
                wasReleased: true
            },
            dpadDown: {
                isPressed: true,
                wasPressed: true,
                wasReleased: true
            },
            dpadLeft: {
                isPressed: true,
                wasPressed: true,
                wasReleased: true
            },
            dpadRight: {
                isPressed: true,
                wasPressed: true,
                wasReleased: true
            }
        },
        triggers: {
            left: {
                value: 6,
                isPressed: true,
                wasPressed: true,
                wasReleased: true
            },
            right: {
                value: 7,
                isPressed: true,
                wasPressed: true,
                wasReleased: true
            }
        },
        sticks: {
            left: {
                stick: { x: 786, y: 2 },
                button: {
                    isPressed: false,
                    wasPressed: true,
                    wasReleased: false
                }
            },
            right: {
                stick: { x: 6, y: 66 },
                button: {
                    isPressed: false,
                    wasPressed: true,
                    wasReleased: false
                }
            }
        }
    }]
}

const xInput: XInput = {
    wButtons: 2,
    bLeftTrigger: 56,
    bRightTrigger: 5,
    sThumbLX: 45,
    sThumbLY: 55,
    sThumbRX: 77,
    sThumbRY: 9
}

const gamepadXInput: PlaycastGamepadXInput = {
    deviceId: 5,
    playerCoordinates: {
        origin: 'topLeft',
        dimensions: {
            x: 2,
            y: 6
        }
    },
    xInput: {
        wButtons: 267,
        bLeftTrigger: 656,
        bRightTrigger: 65,
        sThumbLX: 475,
        sThumbLY: 5,
        sThumbRX: 787,
        sThumbRY: 97
    }
}

const messageGamepadSetState: PlaycastMessageGamepadSetState = {
    target: 'gamepad',
    action: 'setState',
    isReply: false,
    message: {
        playerCoordinates: {
            origin: 'topLeft',
            dimensions: {
                x: 2,
                y: 6
            }
        },
        gamepads: [{
            deviceId: 1234,
            buttons: {
                east: {
                    isPressed: true,
                    wasPressed: true,
                    wasReleased: true
                },
                north: {
                    isPressed: true,
                    wasPressed: true,
                    wasReleased: true
                },
                south: {
                    isPressed: true,
                    wasPressed: true,
                    wasReleased: true
                },
                west: {
                    isPressed: true,
                    wasPressed: true,
                    wasReleased: true
                },
                leftShoulder: {
                    isPressed: true,
                    wasPressed: true,
                    wasReleased: true
                },
                rightShoulder: {
                    isPressed: true,
                    wasPressed: true,
                    wasReleased: true
                },
                select: {
                    isPressed: true,
                    wasPressed: true,
                    wasReleased: true
                },
                start: {
                    isPressed: true,
                    wasPressed: true,
                    wasReleased: true
                },
                dpadUp: {
                    isPressed: true,
                    wasPressed: true,
                    wasReleased: true
                },
                dpadDown: {
                    isPressed: true,
                    wasPressed: true,
                    wasReleased: true
                },
                dpadLeft: {
                    isPressed: true,
                    wasPressed: true,
                    wasReleased: true
                },
                dpadRight: {
                    isPressed: true,
                    wasPressed: true,
                    wasReleased: true
                }
            },
            triggers: {
                left: {
                    value: 6,
                    isPressed: true,
                    wasPressed: true,
                    wasReleased: true
                },
                right: {
                    value: 7,
                    isPressed: true,
                    wasPressed: true,
                    wasReleased: true
                }
            },
            sticks: {
                left: {
                    stick: { x: 786, y: 2 },
                    button: {
                        isPressed: false,
                        wasPressed: true,
                        wasReleased: false
                    }
                },
                right: {
                    stick: { x: 6, y: 66 },
                    button: {
                        isPressed: false,
                        wasPressed: true,
                        wasReleased: false
                    }
                }
            }
        }]
    }
}

const messageGamepadSetXInput: PlaycastMessageGamepadSetXInput = {
    target: 'gamepad',
    action: 'setXInput',
    isReply: false,
    message: {
        deviceId: 5,
        playerCoordinates: {
            origin: 'topLeft',
            dimensions: {
                x: 2,
                y: 6
            }
        },
        xInput: {
            wButtons: 267,
            bLeftTrigger: 656,
            bRightTrigger: 65,
            sThumbLX: 475,
            sThumbLY: 5,
            sThumbRX: 787,
            sThumbRY: 97
        }
    }
}

const gamepadMessages: PlaycastGamepadMessages = {
    target: 'gamepad',
    action: 'setXInput',
    isReply: false,
    message: {
        deviceId: 5,
        playerCoordinates: {
            origin: 'topLeft',
            dimensions: {
                x: 2,
                y: 6
            }
        },
        xInput: {
            wButtons: 267,
            bLeftTrigger: 656,
            bRightTrigger: 65,
            sThumbLX: 475,
            sThumbLY: 5,
            sThumbRX: 787,
            sThumbRY: 97
        }
    }
}

test('trigger has correct form', () => {
    expect(trigger).toMatchObject<PlaycastTrigger>({
        value: expect.any(Number),
        isPressed: expect.any(Boolean),
        wasPressed: expect.any(Boolean),
        wasReleased: expect.any(Boolean)
    })
})

test('stick has correct form', () => {
    expect(stick).toMatchObject<PlaycastStick>({
        stick: { x: expect.any(Number), y: expect.any(Number)},
        button: {
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean)
        }
    })
})

test('gamepad input from WebGL has correct form', () => {
    expect(gamepadInputFromWebGL).toMatchObject<PlaycastGamepadInputFromWebGL>({
        deviceId: expect.any(Number),
        buttonEast: {
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean)
        },
        buttonNorth: {
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean)
        },
        buttonSouth: {
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean)
        },
        buttonWest: {
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean)
        },
        dpadRight: {
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean)
        },
        dpadLeft: {
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean)
        },
        dpadUp: {
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean)
        },
        dpadDown: {
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean)
        },
        leftShoulder: {
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean)
        },
        leftStick: { x: expect.any(Number), y: expect.any(Number) },
        leftStickButton: {
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean)
        },
        leftTrigger: {
            value: expect.any(Number),
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean)
        },
        rightShoulder: {
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean)
        },
        rightStick: { x: expect.any(Number), y: expect.any(Number) },
        rightStickButton: {
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean)
        },
        rightTrigger: {
            value: expect.any(Number),
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean)
        },
        select: {
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean)
        },
        start: {
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean)
        }
    })  
})

test('game pads input from WebGL has correct form', () => {
    expect(gamepadsInputFromWebGL).toMatchObject<PlaycastGamepadsInputFromWebGL>({
        gamepads: [{
            deviceId: expect.any(Number),
            buttonEast: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            buttonNorth: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            buttonSouth: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            buttonWest: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            dpadRight: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            dpadLeft: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            dpadUp: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            dpadDown: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            leftShoulder: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            leftStick: { x: expect.any(Number), y: expect.any(Number) },
            leftStickButton: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            leftTrigger: {
                value: expect.any(Number),
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            rightShoulder: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            rightStick: { x: expect.any(Number), y: expect.any(Number) },
            rightStickButton: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            rightTrigger: {
                value: expect.any(Number),
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            select: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            start: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            }
        }]
    })
})

test('game pad has correct form', () => {
    expect(gamePad).toMatchObject<PlaycastGamepad>({
        deviceId: expect.any(Number),
        buttons: {
            east: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            north: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            south: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            west: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            leftShoulder: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            rightShoulder: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            select: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            start: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            dpadUp: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            dpadDown: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            dpadLeft: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            dpadRight: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            }
        },
        triggers: {
            left: {
                value: expect.any(Number),
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            },
            right: {
                value: expect.any(Number),
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean)
            }
        },
        sticks: {
            left: {
                stick: { x: expect.any(Number), y: expect.any(Number) },
                button: {
                    isPressed: expect.any(Boolean),
                    wasPressed: expect.any(Boolean),
                    wasReleased: expect.any(Boolean)
                }
            },
            right: {
                stick: { x: expect.any(Number), y: expect.any(Number) },
                button: {
                    isPressed: expect.any(Boolean),
                    wasPressed: expect.any(Boolean),
                    wasReleased: expect.any(Boolean)
                }
            }
        }
    })
})

test('gamepad state has correct form', () => {
    expect(gamepadState).toMatchObject<PlaycastGamepadState>({
        playerCoordinates: {
            origin: expect.any(String),
            dimensions: {
                x: expect.any(Number),
                y: expect.any(Number)
            }
        },
        gamepads: [{
            deviceId: expect.any(Number),
            buttons: {
                east: {
                    isPressed: expect.any(Boolean),
                    wasPressed: expect.any(Boolean),
                    wasReleased: expect.any(Boolean)
                },
                north: {
                    isPressed: expect.any(Boolean),
                    wasPressed: expect.any(Boolean),
                    wasReleased: expect.any(Boolean)
                },
                south: {
                    isPressed: expect.any(Boolean),
                    wasPressed: expect.any(Boolean),
                    wasReleased: expect.any(Boolean)
                },
                west: {
                    isPressed: expect.any(Boolean),
                    wasPressed: expect.any(Boolean),
                    wasReleased: expect.any(Boolean)
                },
                leftShoulder: {
                    isPressed: expect.any(Boolean),
                    wasPressed: expect.any(Boolean),
                    wasReleased: expect.any(Boolean)
                },
                rightShoulder: {
                    isPressed: expect.any(Boolean),
                    wasPressed: expect.any(Boolean),
                    wasReleased: expect.any(Boolean)
                },
                select: {
                    isPressed: expect.any(Boolean),
                    wasPressed: expect.any(Boolean),
                    wasReleased: expect.any(Boolean)
                },
                start: {
                    isPressed: expect.any(Boolean),
                    wasPressed: expect.any(Boolean),
                    wasReleased: expect.any(Boolean)
                },
                dpadUp: {
                    isPressed: expect.any(Boolean),
                    wasPressed: expect.any(Boolean),
                    wasReleased: expect.any(Boolean)
                },
                dpadDown: {
                    isPressed: expect.any(Boolean),
                    wasPressed: expect.any(Boolean),
                    wasReleased: expect.any(Boolean)
                },
                dpadLeft: {
                    isPressed: expect.any(Boolean),
                    wasPressed: expect.any(Boolean),
                    wasReleased: expect.any(Boolean)
                },
                dpadRight: {
                    isPressed: expect.any(Boolean),
                    wasPressed: expect.any(Boolean),
                    wasReleased: expect.any(Boolean)
                }
            },
            triggers: {
                left: {
                    value: expect.any(Number),
                    isPressed: expect.any(Boolean),
                    wasPressed: expect.any(Boolean),
                    wasReleased: expect.any(Boolean)
                },
                right: {
                    value: expect.any(Number),
                    isPressed: expect.any(Boolean),
                    wasPressed: expect.any(Boolean),
                    wasReleased: expect.any(Boolean)
                }
            },
            sticks: {
                left: {
                    stick: { x: expect.any(Number), y: expect.any(Number) },
                    button: {
                        isPressed: expect.any(Boolean),
                        wasPressed: expect.any(Boolean),
                        wasReleased: expect.any(Boolean)
                    }
                },
                right: {
                    stick: { x: expect.any(Number), y: expect.any(Number) },
                    button: {
                        isPressed: expect.any(Boolean),
                        wasPressed: expect.any(Boolean),
                        wasReleased: expect.any(Boolean)
                    }
                }
            }
        }]
    })
})

test('x input has correct form', () => {
    expect(xInput).toMatchObject<XInput>({
        wButtons: expect.any(Number),
        bLeftTrigger: expect.any(Number),
        bRightTrigger: expect.any(Number),
        sThumbLX: expect.any(Number),
        sThumbLY: expect.any(Number),
        sThumbRX: expect.any(Number),
        sThumbRY: expect.any(Number)
    })
})

test('gamepad x input has correct form', () => {
    expect(gamepadXInput).toMatchObject<PlaycastGamepadXInput>({
        deviceId: expect.any(Number),
        playerCoordinates: {
            origin: expect.any(String),
            dimensions: {
                x: expect.any(Number),
                y: expect.any(Number)
            }
        },
        xInput: {
            wButtons: expect.any(Number),
            bLeftTrigger: expect.any(Number),
            bRightTrigger: expect.any(Number),
            sThumbLX: expect.any(Number),
            sThumbLY: expect.any(Number),
            sThumbRX: expect.any(Number),
            sThumbRY: expect.any(Number)
        }
    })
})

test('message gamepad set state has correct form', () => {
    expect(messageGamepadSetState).toMatchObject<PlaycastMessageGamepadSetState>({
        target: expect.any(String),
        action: expect.any(String),
        isReply: expect.any(Boolean),
        message: {
            playerCoordinates: {
                origin: expect.any(String),
                dimensions: {
                    x: expect.any(Number),
                    y: expect.any(Number)
                }
            },
            gamepads: [{
                deviceId: expect.any(Number),
                buttons: {
                    east: {
                        isPressed: expect.any(Boolean),
                        wasPressed: expect.any(Boolean),
                        wasReleased: expect.any(Boolean)
                    },
                    north: {
                        isPressed: expect.any(Boolean),
                        wasPressed: expect.any(Boolean),
                        wasReleased: expect.any(Boolean)
                    },
                    south: {
                        isPressed: expect.any(Boolean),
                        wasPressed: expect.any(Boolean),
                        wasReleased: expect.any(Boolean)
                    },
                    west: {
                        isPressed: expect.any(Boolean),
                        wasPressed: expect.any(Boolean),
                        wasReleased: expect.any(Boolean)
                    },
                    leftShoulder: {
                        isPressed: expect.any(Boolean),
                        wasPressed: expect.any(Boolean),
                        wasReleased: expect.any(Boolean)
                    },
                    rightShoulder: {
                        isPressed: expect.any(Boolean),
                        wasPressed: expect.any(Boolean),
                        wasReleased: expect.any(Boolean)
                    },
                    select: {
                        isPressed: expect.any(Boolean),
                        wasPressed: expect.any(Boolean),
                        wasReleased: expect.any(Boolean)
                    },
                    start: {
                        isPressed: expect.any(Boolean),
                        wasPressed: expect.any(Boolean),
                        wasReleased: expect.any(Boolean)
                    },
                    dpadUp: {
                        isPressed: expect.any(Boolean),
                        wasPressed: expect.any(Boolean),
                        wasReleased: expect.any(Boolean)
                    },
                    dpadDown: {
                        isPressed: expect.any(Boolean),
                        wasPressed: expect.any(Boolean),
                        wasReleased: expect.any(Boolean)
                    },
                    dpadLeft: {
                        isPressed: expect.any(Boolean),
                        wasPressed: expect.any(Boolean),
                        wasReleased: expect.any(Boolean)
                    },
                    dpadRight: {
                        isPressed: expect.any(Boolean),
                        wasPressed: expect.any(Boolean),
                        wasReleased: expect.any(Boolean)
                    }
                },
                triggers: {
                    left: {
                        value: expect.any(Number),
                        isPressed: expect.any(Boolean),
                        wasPressed: expect.any(Boolean),
                        wasReleased: expect.any(Boolean)
                    },
                    right: {
                        value: expect.any(Number),
                        isPressed: expect.any(Boolean),
                        wasPressed: expect.any(Boolean),
                        wasReleased: expect.any(Boolean)
                    }
                },
                sticks: {
                    left: {
                        stick: { x: expect.any(Number), y: expect.any(Number) },
                        button: {
                            isPressed: expect.any(Boolean),
                            wasPressed: expect.any(Boolean),
                            wasReleased: expect.any(Boolean)
                        }
                    },
                    right: {
                        stick: { x: expect.any(Number), y: expect.any(Number) },
                        button: {
                            isPressed: expect.any(Boolean),
                            wasPressed: expect.any(Boolean),
                            wasReleased: expect.any(Boolean)
                        }
                    }
                }
            }]
        }
    })
})

test('message gamepad set x input has correct form', () => {
    expect(messageGamepadSetXInput).toMatchObject<PlaycastMessageGamepadSetXInput>({
        target: expect.any(String),
        action: expect.any(String),
        isReply: expect.any(Boolean),
        message: {
            deviceId: expect.any(Number),
            playerCoordinates: {
                origin: expect.any(String),
                dimensions: {
                    x: expect.any(Number),
                    y: expect.any(Number)
                }
            },
            xInput: {
                wButtons: expect.any(Number),
                bLeftTrigger: expect.any(Number),
                bRightTrigger: expect.any(Number),
                sThumbLX: expect.any(Number),
                sThumbLY: expect.any(Number),
                sThumbRX: expect.any(Number),
                sThumbRY: expect.any(Number)
            }
        }
    })
})

test('gamepad messages has correct sample form', () => {
    expect(gamepadMessages).toMatchObject<PlaycastGamepadMessages>({
        target: expect.any(String),
        action: expect.any(String),
        isReply: expect.any(Boolean),
        message: {
            deviceId: expect.any(Number),
            playerCoordinates: {
                origin: expect.any(String),
                dimensions: {
                    x: expect.any(Number),
                    y: expect.any(Number)
                }
            },
            xInput: {
                wButtons: expect.any(Number),
                bLeftTrigger: expect.any(Number),
                bRightTrigger: expect.any(Number),
                sThumbLX: expect.any(Number),
                sThumbLY: expect.any(Number),
                sThumbRX: expect.any(Number),
                sThumbRY: expect.any(Number)
            }
        }
    })
})