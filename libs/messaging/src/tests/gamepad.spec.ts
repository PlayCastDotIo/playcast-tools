import { expect, test } from 'vitest';
import { cloneDeep } from 'lodash';
import {
  PlaycastTrigger,
  PlaycastStick,
  PlaycastGamepadInputFromWebGL,
  PlaycastGamepadsInputFromWebGL,
  PlaycastGamepad,
  PlaycastGamepadState,
  XInput,
  PlaycastGamepadXInput,
  PlaycastGamepadMessages,
  PlaycastMessageGamepadSetState,
  PlaycastMessageGamepadSetXInput,
  toWord,
} from '../lib/gamepad';

const gamepad: PlaycastGamepad = {
  deviceId: 0,
  buttons: {
    east: {
      isPressed: false,
      wasPressed: false,
      wasReleased: false,
    },
    north: {
      isPressed: false,
      wasPressed: false,
      wasReleased: false,
    },
    south: {
      isPressed: false,
      wasPressed: false,
      wasReleased: false,
    },
    west: {
      isPressed: false,
      wasPressed: false,
      wasReleased: false,
    },
    leftShoulder: {
      isPressed: false,
      wasPressed: false,
      wasReleased: false,
    },
    rightShoulder: {
      isPressed: false,
      wasPressed: false,
      wasReleased: false,
    },
    select: {
      isPressed: false,
      wasPressed: false,
      wasReleased: false,
    },
    start: {
      isPressed: false,
      wasPressed: false,
      wasReleased: false,
    },
    dpadUp: {
      isPressed: false,
      wasPressed: false,
      wasReleased: false,
    },
    dpadDown: {
      isPressed: false,
      wasPressed: false,
      wasReleased: false,
    },
    dpadLeft: {
      isPressed: false,
      wasPressed: false,
      wasReleased: false,
    },
    dpadRight: {
      isPressed: false,
      wasPressed: false,
      wasReleased: false,
    },
  },
  triggers: {
    left: {
      isPressed: false,
      wasPressed: false,
      wasReleased: false,
      value: 0,
    },
    right: {
      isPressed: false,
      wasPressed: false,
      wasReleased: false,
      value: 0,
    },
  },
  sticks: {
    left: {
      stick: {
        x: 0,
        y: 0,
      },
      button: {
        isPressed: false,
        wasPressed: false,
        wasReleased: false,
      },
    },
    right: {
      stick: {
        x: 0,
        y: 0,
      },
      button: {
        isPressed: false,
        wasPressed: false,
        wasReleased: false,
      },
    },
  },
};

const trigger: PlaycastTrigger = {
  value: 28,
  isPressed: true,
  wasPressed: true,
  wasReleased: false,
};

const stick: PlaycastStick = {
  stick: { x: 56, y: 22 },
  button: {
    isPressed: false,
    wasPressed: true,
    wasReleased: false,
  },
};

const gamepadInputFromWebGL: PlaycastGamepadInputFromWebGL = {
  deviceId: 5123,
  buttonEast: {
    isPressed: false,
    wasPressed: false,
    wasReleased: false,
  },
  buttonNorth: {
    isPressed: true,
    wasPressed: false,
    wasReleased: false,
  },
  buttonSouth: {
    isPressed: false,
    wasPressed: false,
    wasReleased: false,
  },
  buttonWest: {
    isPressed: false,
    wasPressed: false,
    wasReleased: true,
  },
  dpadRight: {
    isPressed: true,
    wasPressed: true,
    wasReleased: true,
  },
  dpadLeft: {
    isPressed: true,
    wasPressed: true,
    wasReleased: true,
  },
  dpadUp: {
    isPressed: true,
    wasPressed: true,
    wasReleased: true,
  },
  dpadDown: {
    isPressed: true,
    wasPressed: true,
    wasReleased: true,
  },
  leftShoulder: {
    isPressed: true,
    wasPressed: true,
    wasReleased: true,
  },
  leftStick: { x: 55, y: 5 },
  leftStickButton: {
    isPressed: false,
    wasPressed: false,
    wasReleased: true,
  },
  leftTrigger: {
    value: 332,
    isPressed: true,
    wasPressed: true,
    wasReleased: false,
  },
  rightShoulder: {
    isPressed: true,
    wasPressed: false,
    wasReleased: true,
  },
  rightStick: { x: 45, y: 25 },
  rightStickButton: {
    isPressed: false,
    wasPressed: false,
    wasReleased: true,
  },
  rightTrigger: {
    value: 66,
    isPressed: true,
    wasPressed: true,
    wasReleased: false,
  },
  select: {
    isPressed: true,
    wasPressed: false,
    wasReleased: true,
  },
  start: {
    isPressed: true,
    wasPressed: true,
    wasReleased: true,
  },
};

const gamepadsInputFromWebGL: PlaycastGamepadsInputFromWebGL = {
  gamepads: [
    {
      deviceId: 5123,
      buttonEast: {
        isPressed: false,
        wasPressed: false,
        wasReleased: false,
      },
      buttonNorth: {
        isPressed: true,
        wasPressed: false,
        wasReleased: false,
      },
      buttonSouth: {
        isPressed: false,
        wasPressed: false,
        wasReleased: false,
      },
      buttonWest: {
        isPressed: false,
        wasPressed: false,
        wasReleased: true,
      },
      dpadRight: {
        isPressed: true,
        wasPressed: true,
        wasReleased: true,
      },
      dpadLeft: {
        isPressed: true,
        wasPressed: true,
        wasReleased: true,
      },
      dpadUp: {
        isPressed: true,
        wasPressed: true,
        wasReleased: true,
      },
      dpadDown: {
        isPressed: true,
        wasPressed: true,
        wasReleased: true,
      },
      leftShoulder: {
        isPressed: true,
        wasPressed: true,
        wasReleased: true,
      },
      leftStick: { x: 55, y: 5 },
      leftStickButton: {
        isPressed: false,
        wasPressed: false,
        wasReleased: true,
      },
      leftTrigger: {
        value: 332,
        isPressed: true,
        wasPressed: true,
        wasReleased: false,
      },
      rightShoulder: {
        isPressed: true,
        wasPressed: false,
        wasReleased: true,
      },
      rightStick: { x: 45, y: 25 },
      rightStickButton: {
        isPressed: false,
        wasPressed: false,
        wasReleased: true,
      },
      rightTrigger: {
        value: 66,
        isPressed: true,
        wasPressed: true,
        wasReleased: false,
      },
      select: {
        isPressed: true,
        wasPressed: false,
        wasReleased: true,
      },
      start: {
        isPressed: true,
        wasPressed: true,
        wasReleased: true,
      },
    },
  ],
};

const gamePad: PlaycastGamepad = {
  deviceId: 1234,
  buttons: {
    east: {
      isPressed: true,
      wasPressed: true,
      wasReleased: true,
    },
    north: {
      isPressed: true,
      wasPressed: true,
      wasReleased: true,
    },
    south: {
      isPressed: true,
      wasPressed: true,
      wasReleased: true,
    },
    west: {
      isPressed: true,
      wasPressed: true,
      wasReleased: true,
    },
    leftShoulder: {
      isPressed: true,
      wasPressed: true,
      wasReleased: true,
    },
    rightShoulder: {
      isPressed: true,
      wasPressed: true,
      wasReleased: true,
    },
    select: {
      isPressed: true,
      wasPressed: true,
      wasReleased: true,
    },
    start: {
      isPressed: true,
      wasPressed: true,
      wasReleased: true,
    },
    dpadUp: {
      isPressed: true,
      wasPressed: true,
      wasReleased: true,
    },
    dpadDown: {
      isPressed: true,
      wasPressed: true,
      wasReleased: true,
    },
    dpadLeft: {
      isPressed: true,
      wasPressed: true,
      wasReleased: true,
    },
    dpadRight: {
      isPressed: true,
      wasPressed: true,
      wasReleased: true,
    },
  },
  triggers: {
    left: {
      value: 6,
      isPressed: true,
      wasPressed: true,
      wasReleased: true,
    },
    right: {
      value: 7,
      isPressed: true,
      wasPressed: true,
      wasReleased: true,
    },
  },
  sticks: {
    left: {
      stick: { x: 786, y: 2 },
      button: {
        isPressed: false,
        wasPressed: true,
        wasReleased: false,
      },
    },
    right: {
      stick: { x: 6, y: 66 },
      button: {
        isPressed: false,
        wasPressed: true,
        wasReleased: false,
      },
    },
  },
};

const gamepadState: PlaycastGamepadState = {
  playerCoordinates: {
    origin: 'topLeft',
    dimensions: {
      x: 2,
      y: 6,
    },
  },
  gamepads: [
    {
      deviceId: 1234,
      buttons: {
        east: {
          isPressed: true,
          wasPressed: true,
          wasReleased: true,
        },
        north: {
          isPressed: true,
          wasPressed: true,
          wasReleased: true,
        },
        south: {
          isPressed: true,
          wasPressed: true,
          wasReleased: true,
        },
        west: {
          isPressed: true,
          wasPressed: true,
          wasReleased: true,
        },
        leftShoulder: {
          isPressed: true,
          wasPressed: true,
          wasReleased: true,
        },
        rightShoulder: {
          isPressed: true,
          wasPressed: true,
          wasReleased: true,
        },
        select: {
          isPressed: true,
          wasPressed: true,
          wasReleased: true,
        },
        start: {
          isPressed: true,
          wasPressed: true,
          wasReleased: true,
        },
        dpadUp: {
          isPressed: true,
          wasPressed: true,
          wasReleased: true,
        },
        dpadDown: {
          isPressed: true,
          wasPressed: true,
          wasReleased: true,
        },
        dpadLeft: {
          isPressed: true,
          wasPressed: true,
          wasReleased: true,
        },
        dpadRight: {
          isPressed: true,
          wasPressed: true,
          wasReleased: true,
        },
      },
      triggers: {
        left: {
          value: 6,
          isPressed: true,
          wasPressed: true,
          wasReleased: true,
        },
        right: {
          value: 7,
          isPressed: true,
          wasPressed: true,
          wasReleased: true,
        },
      },
      sticks: {
        left: {
          stick: { x: 786, y: 2 },
          button: {
            isPressed: false,
            wasPressed: true,
            wasReleased: false,
          },
        },
        right: {
          stick: { x: 6, y: 66 },
          button: {
            isPressed: false,
            wasPressed: true,
            wasReleased: false,
          },
        },
      },
    },
  ],
};

const xInput: XInput = {
  wButtons: 2,
  bLeftTrigger: 56,
  bRightTrigger: 5,
  sThumbLX: 45,
  sThumbLY: 55,
  sThumbRX: 77,
  sThumbRY: 9,
};

const gamepadXInput: PlaycastGamepadXInput = {
  deviceId: 5,
  playerCoordinates: {
    origin: 'topLeft',
    dimensions: {
      x: 2,
      y: 6,
    },
  },
  xInput: {
    wButtons: 267,
    bLeftTrigger: 656,
    bRightTrigger: 65,
    sThumbLX: 475,
    sThumbLY: 5,
    sThumbRX: 787,
    sThumbRY: 97,
  },
};

const messageGamepadSetState: PlaycastMessageGamepadSetState = {
  target: 'gamepad',
  action: 'setState',
  isReply: false,
  message: {
    playerCoordinates: {
      origin: 'topLeft',
      dimensions: {
        x: 2,
        y: 6,
      },
    },
    gamepads: [
      {
        deviceId: 1234,
        buttons: {
          east: {
            isPressed: true,
            wasPressed: true,
            wasReleased: true,
          },
          north: {
            isPressed: true,
            wasPressed: true,
            wasReleased: true,
          },
          south: {
            isPressed: true,
            wasPressed: true,
            wasReleased: true,
          },
          west: {
            isPressed: true,
            wasPressed: true,
            wasReleased: true,
          },
          leftShoulder: {
            isPressed: true,
            wasPressed: true,
            wasReleased: true,
          },
          rightShoulder: {
            isPressed: true,
            wasPressed: true,
            wasReleased: true,
          },
          select: {
            isPressed: true,
            wasPressed: true,
            wasReleased: true,
          },
          start: {
            isPressed: true,
            wasPressed: true,
            wasReleased: true,
          },
          dpadUp: {
            isPressed: true,
            wasPressed: true,
            wasReleased: true,
          },
          dpadDown: {
            isPressed: true,
            wasPressed: true,
            wasReleased: true,
          },
          dpadLeft: {
            isPressed: true,
            wasPressed: true,
            wasReleased: true,
          },
          dpadRight: {
            isPressed: true,
            wasPressed: true,
            wasReleased: true,
          },
        },
        triggers: {
          left: {
            value: 6,
            isPressed: true,
            wasPressed: true,
            wasReleased: true,
          },
          right: {
            value: 7,
            isPressed: true,
            wasPressed: true,
            wasReleased: true,
          },
        },
        sticks: {
          left: {
            stick: { x: 786, y: 2 },
            button: {
              isPressed: false,
              wasPressed: true,
              wasReleased: false,
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
    gamepadId: 0,
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
      },
    ],
  },
};

const messageGamepadSetXInput: PlaycastMessageGamepadSetXInput = {
    target: 'gamepad',
    action: 'setXInput',
    isReply: false,
    message: {
        gamepadId: 2,
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
        gamepadId: 0,
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
    wasReleased: expect.any(Boolean),
  });
});

test('stick has correct form', () => {
  expect(stick).toMatchObject<PlaycastStick>({
    stick: { x: expect.any(Number), y: expect.any(Number) },
    button: {
      isPressed: expect.any(Boolean),
      wasPressed: expect.any(Boolean),
      wasReleased: expect.any(Boolean),
    },
  });
});

test('gamepad input from WebGL has correct form', () => {
  expect(gamepadInputFromWebGL).toMatchObject<PlaycastGamepadInputFromWebGL>({
    deviceId: expect.any(Number),
    buttonEast: {
      isPressed: expect.any(Boolean),
      wasPressed: expect.any(Boolean),
      wasReleased: expect.any(Boolean),
    },
    buttonNorth: {
      isPressed: expect.any(Boolean),
      wasPressed: expect.any(Boolean),
      wasReleased: expect.any(Boolean),
    },
    buttonSouth: {
      isPressed: expect.any(Boolean),
      wasPressed: expect.any(Boolean),
      wasReleased: expect.any(Boolean),
    },
    buttonWest: {
      isPressed: expect.any(Boolean),
      wasPressed: expect.any(Boolean),
      wasReleased: expect.any(Boolean),
    },
    dpadRight: {
      isPressed: expect.any(Boolean),
      wasPressed: expect.any(Boolean),
      wasReleased: expect.any(Boolean),
    },
    dpadLeft: {
      isPressed: expect.any(Boolean),
      wasPressed: expect.any(Boolean),
      wasReleased: expect.any(Boolean),
    },
    dpadUp: {
      isPressed: expect.any(Boolean),
      wasPressed: expect.any(Boolean),
      wasReleased: expect.any(Boolean),
    },
    dpadDown: {
      isPressed: expect.any(Boolean),
      wasPressed: expect.any(Boolean),
      wasReleased: expect.any(Boolean),
    },
    leftShoulder: {
      isPressed: expect.any(Boolean),
      wasPressed: expect.any(Boolean),
      wasReleased: expect.any(Boolean),
    },
    leftStick: { x: expect.any(Number), y: expect.any(Number) },
    leftStickButton: {
      isPressed: expect.any(Boolean),
      wasPressed: expect.any(Boolean),
      wasReleased: expect.any(Boolean),
    },
    leftTrigger: {
      value: expect.any(Number),
      isPressed: expect.any(Boolean),
      wasPressed: expect.any(Boolean),
      wasReleased: expect.any(Boolean),
    },
    rightShoulder: {
      isPressed: expect.any(Boolean),
      wasPressed: expect.any(Boolean),
      wasReleased: expect.any(Boolean),
    },
    rightStick: { x: expect.any(Number), y: expect.any(Number) },
    rightStickButton: {
      isPressed: expect.any(Boolean),
      wasPressed: expect.any(Boolean),
      wasReleased: expect.any(Boolean),
    },
    rightTrigger: {
      value: expect.any(Number),
      isPressed: expect.any(Boolean),
      wasPressed: expect.any(Boolean),
      wasReleased: expect.any(Boolean),
    },
    select: {
      isPressed: expect.any(Boolean),
      wasPressed: expect.any(Boolean),
      wasReleased: expect.any(Boolean),
    },
    start: {
      isPressed: expect.any(Boolean),
      wasPressed: expect.any(Boolean),
      wasReleased: expect.any(Boolean),
    },
  });
});

test('game pads input from WebGL has correct form', () => {
  expect(gamepadsInputFromWebGL).toMatchObject<PlaycastGamepadsInputFromWebGL>({
    gamepads: [
      {
        deviceId: expect.any(Number),
        buttonEast: {
          isPressed: expect.any(Boolean),
          wasPressed: expect.any(Boolean),
          wasReleased: expect.any(Boolean),
        },
        buttonNorth: {
          isPressed: expect.any(Boolean),
          wasPressed: expect.any(Boolean),
          wasReleased: expect.any(Boolean),
        },
        buttonSouth: {
          isPressed: expect.any(Boolean),
          wasPressed: expect.any(Boolean),
          wasReleased: expect.any(Boolean),
        },
        buttonWest: {
          isPressed: expect.any(Boolean),
          wasPressed: expect.any(Boolean),
          wasReleased: expect.any(Boolean),
        },
        dpadRight: {
          isPressed: expect.any(Boolean),
          wasPressed: expect.any(Boolean),
          wasReleased: expect.any(Boolean),
        },
        dpadLeft: {
          isPressed: expect.any(Boolean),
          wasPressed: expect.any(Boolean),
          wasReleased: expect.any(Boolean),
        },
        dpadUp: {
          isPressed: expect.any(Boolean),
          wasPressed: expect.any(Boolean),
          wasReleased: expect.any(Boolean),
        },
        dpadDown: {
          isPressed: expect.any(Boolean),
          wasPressed: expect.any(Boolean),
          wasReleased: expect.any(Boolean),
        },
        leftShoulder: {
          isPressed: expect.any(Boolean),
          wasPressed: expect.any(Boolean),
          wasReleased: expect.any(Boolean),
        },
        leftStick: { x: expect.any(Number), y: expect.any(Number) },
        leftStickButton: {
          isPressed: expect.any(Boolean),
          wasPressed: expect.any(Boolean),
          wasReleased: expect.any(Boolean),
        },
        leftTrigger: {
          value: expect.any(Number),
          isPressed: expect.any(Boolean),
          wasPressed: expect.any(Boolean),
          wasReleased: expect.any(Boolean),
        },
        rightShoulder: {
          isPressed: expect.any(Boolean),
          wasPressed: expect.any(Boolean),
          wasReleased: expect.any(Boolean),
        },
        rightStick: { x: expect.any(Number), y: expect.any(Number) },
        rightStickButton: {
          isPressed: expect.any(Boolean),
          wasPressed: expect.any(Boolean),
          wasReleased: expect.any(Boolean),
        },
        rightTrigger: {
          value: expect.any(Number),
          isPressed: expect.any(Boolean),
          wasPressed: expect.any(Boolean),
          wasReleased: expect.any(Boolean),
        },
        select: {
          isPressed: expect.any(Boolean),
          wasPressed: expect.any(Boolean),
          wasReleased: expect.any(Boolean),
        },
        start: {
          isPressed: expect.any(Boolean),
          wasPressed: expect.any(Boolean),
          wasReleased: expect.any(Boolean),
        },
      },
    ],
  });
});

test('game pad has correct form', () => {
  expect(gamePad).toMatchObject<PlaycastGamepad>({
    deviceId: expect.any(Number),
    buttons: {
      east: {
        isPressed: expect.any(Boolean),
        wasPressed: expect.any(Boolean),
        wasReleased: expect.any(Boolean),
      },
      north: {
        isPressed: expect.any(Boolean),
        wasPressed: expect.any(Boolean),
        wasReleased: expect.any(Boolean),
      },
      south: {
        isPressed: expect.any(Boolean),
        wasPressed: expect.any(Boolean),
        wasReleased: expect.any(Boolean),
      },
      west: {
        isPressed: expect.any(Boolean),
        wasPressed: expect.any(Boolean),
        wasReleased: expect.any(Boolean),
      },
      leftShoulder: {
        isPressed: expect.any(Boolean),
        wasPressed: expect.any(Boolean),
        wasReleased: expect.any(Boolean),
      },
      rightShoulder: {
        isPressed: expect.any(Boolean),
        wasPressed: expect.any(Boolean),
        wasReleased: expect.any(Boolean),
      },
      select: {
        isPressed: expect.any(Boolean),
        wasPressed: expect.any(Boolean),
        wasReleased: expect.any(Boolean),
      },
      start: {
        isPressed: expect.any(Boolean),
        wasPressed: expect.any(Boolean),
        wasReleased: expect.any(Boolean),
      },
      dpadUp: {
        isPressed: expect.any(Boolean),
        wasPressed: expect.any(Boolean),
        wasReleased: expect.any(Boolean),
      },
      dpadDown: {
        isPressed: expect.any(Boolean),
        wasPressed: expect.any(Boolean),
        wasReleased: expect.any(Boolean),
      },
      dpadLeft: {
        isPressed: expect.any(Boolean),
        wasPressed: expect.any(Boolean),
        wasReleased: expect.any(Boolean),
      },
      dpadRight: {
        isPressed: expect.any(Boolean),
        wasPressed: expect.any(Boolean),
        wasReleased: expect.any(Boolean),
      },
    },
    triggers: {
      left: {
        value: expect.any(Number),
        isPressed: expect.any(Boolean),
        wasPressed: expect.any(Boolean),
        wasReleased: expect.any(Boolean),
      },
      right: {
        value: expect.any(Number),
        isPressed: expect.any(Boolean),
        wasPressed: expect.any(Boolean),
        wasReleased: expect.any(Boolean),
      },
    },
    sticks: {
      left: {
        stick: { x: expect.any(Number), y: expect.any(Number) },
        button: {
          isPressed: expect.any(Boolean),
          wasPressed: expect.any(Boolean),
          wasReleased: expect.any(Boolean),
        },
      },
      right: {
        stick: { x: expect.any(Number), y: expect.any(Number) },
        button: {
          isPressed: expect.any(Boolean),
          wasPressed: expect.any(Boolean),
          wasReleased: expect.any(Boolean),
        },
      },
    },
  });
});

test('gamepad state has correct form', () => {
  expect(gamepadState).toMatchObject<PlaycastGamepadState>({
    playerCoordinates: {
      origin: expect.any(String),
      dimensions: {
        x: expect.any(Number),
        y: expect.any(Number),
      },
    },
    gamepads: [
      {
        deviceId: expect.any(Number),
        buttons: {
          east: {
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean),
          },
          north: {
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean),
          },
          south: {
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean),
          },
          west: {
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean),
          },
          leftShoulder: {
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean),
          },
          rightShoulder: {
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean),
          },
          select: {
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean),
          },
          start: {
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean),
          },
          dpadUp: {
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean),
          },
          dpadDown: {
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean),
          },
          dpadLeft: {
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean),
          },
          dpadRight: {
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean),
          },
        },
        triggers: {
          left: {
            value: expect.any(Number),
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean),
          },
          right: {
            value: expect.any(Number),
            isPressed: expect.any(Boolean),
            wasPressed: expect.any(Boolean),
            wasReleased: expect.any(Boolean),
          },
        },
        sticks: {
          left: {
            stick: { x: expect.any(Number), y: expect.any(Number) },
            button: {
              isPressed: expect.any(Boolean),
              wasPressed: expect.any(Boolean),
              wasReleased: expect.any(Boolean),
            },
          },
          right: {
            stick: { x: expect.any(Number), y: expect.any(Number) },
            button: {
              isPressed: expect.any(Boolean),
              wasPressed: expect.any(Boolean),
              wasReleased: expect.any(Boolean),
            },
          },
        },
      },
    ],
  });
});

test('x input has correct form', () => {
  expect(xInput).toMatchObject<XInput>({
    wButtons: expect.any(Number),
    bLeftTrigger: expect.any(Number),
    bRightTrigger: expect.any(Number),
    sThumbLX: expect.any(Number),
    sThumbLY: expect.any(Number),
    sThumbRX: expect.any(Number),
    sThumbRY: expect.any(Number),
  });
});

test('gamepad x input has correct form', () => {
  expect(gamepadXInput).toMatchObject<PlaycastGamepadXInput>({
    deviceId: expect.any(Number),
    playerCoordinates: {
      origin: expect.any(String),
      dimensions: {
        x: expect.any(Number),
        y: expect.any(Number),
      },
    },
    xInput: {
      wButtons: expect.any(Number),
      bLeftTrigger: expect.any(Number),
      bRightTrigger: expect.any(Number),
      sThumbLX: expect.any(Number),
      sThumbLY: expect.any(Number),
      sThumbRX: expect.any(Number),
      sThumbRY: expect.any(Number),
    },
  });
});

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
          y: expect.any(Number),
        },
      },
      gamepads: [
        {
          deviceId: expect.any(Number),
          buttons: {
            east: {
              isPressed: expect.any(Boolean),
              wasPressed: expect.any(Boolean),
              wasReleased: expect.any(Boolean),
            },
            north: {
              isPressed: expect.any(Boolean),
              wasPressed: expect.any(Boolean),
              wasReleased: expect.any(Boolean),
            },
            south: {
              isPressed: expect.any(Boolean),
              wasPressed: expect.any(Boolean),
              wasReleased: expect.any(Boolean),
            },
            west: {
              isPressed: expect.any(Boolean),
              wasPressed: expect.any(Boolean),
              wasReleased: expect.any(Boolean),
            },
            leftShoulder: {
              isPressed: expect.any(Boolean),
              wasPressed: expect.any(Boolean),
              wasReleased: expect.any(Boolean),
            },
            rightShoulder: {
              isPressed: expect.any(Boolean),
              wasPressed: expect.any(Boolean),
              wasReleased: expect.any(Boolean),
            },
            select: {
              isPressed: expect.any(Boolean),
              wasPressed: expect.any(Boolean),
              wasReleased: expect.any(Boolean),
            },
            start: {
              isPressed: expect.any(Boolean),
              wasPressed: expect.any(Boolean),
              wasReleased: expect.any(Boolean),
            },
            dpadUp: {
              isPressed: expect.any(Boolean),
              wasPressed: expect.any(Boolean),
              wasReleased: expect.any(Boolean),
            },
            dpadDown: {
              isPressed: expect.any(Boolean),
              wasPressed: expect.any(Boolean),
              wasReleased: expect.any(Boolean),
            },
            dpadLeft: {
              isPressed: expect.any(Boolean),
              wasPressed: expect.any(Boolean),
              wasReleased: expect.any(Boolean),
            },
            dpadRight: {
              isPressed: expect.any(Boolean),
              wasPressed: expect.any(Boolean),
              wasReleased: expect.any(Boolean),
            },
          },
          triggers: {
            left: {
              value: expect.any(Number),
              isPressed: expect.any(Boolean),
              wasPressed: expect.any(Boolean),
              wasReleased: expect.any(Boolean),
            },
            right: {
              value: expect.any(Number),
              isPressed: expect.any(Boolean),
              wasPressed: expect.any(Boolean),
              wasReleased: expect.any(Boolean),
            },
          },
          sticks: {
            left: {
              stick: { x: expect.any(Number), y: expect.any(Number) },
              button: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean),
              },
            },
            right: {
              stick: { x: expect.any(Number), y: expect.any(Number) },
              button: {
                isPressed: expect.any(Boolean),
                wasPressed: expect.any(Boolean),
                wasReleased: expect.any(Boolean),
              },
            },
          },
        },
      ],
    },
  });
});

test('message gamepad set x input has correct form', () => {
  expect(
    messageGamepadSetXInput
  ).toMatchObject<PlaycastMessageGamepadSetXInput>({
    target: expect.any(String),
    action: expect.any(String),
    isReply: expect.any(Boolean),
    message: {
      deviceId: expect.any(Number),
      playerCoordinates: {
        origin: expect.any(String),
        dimensions: {
          x: expect.any(Number),
          y: expect.any(Number),
        },
      },
      xInput: {
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
        gamepadId: expect.any(Number),
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
            gamepadId: expect.any(Number),
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
            gamepadId: expect.any(Number),
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

// Test toWord function, which converts button states to a single number
test('toWord returns 0 when no buttons pressed', () => {
    expect(toWord(gamepad)).toBe(0);
});

// Press the "south" button, (A on Xbox controller, X on PS4 controller)
test('toWord returns 4096 when south button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.south.isPressed = true;
    expect(toWord(g)).toBe(4096);
});

// Press the "east" button, (B on Xbox controller, O on PS4 controller)
test('toWord returns 8192 when east button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.east.isPressed = true;
    expect(toWord(g)).toBe(8192);
});

// TODO - add tests for all buttons

// Button combinations
// Left shoulder and south button
test('toWord returns 4352 when left shoulder and south button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.leftShoulder.isPressed = true;
    g.buttons.south.isPressed = true;
    expect(toWord(g)).toBe(4352);
});

// Left shoulder and east button
test('toWord returns 8448 when left shoulder and east button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.leftShoulder.isPressed = true;
    g.buttons.east.isPressed = true;
    expect(toWord(g)).toBe(8448);
});

// Left shoulder and west button
test('toWord returns 16640 when left shoulder and west button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.leftShoulder.isPressed = true;
    g.buttons.west.isPressed = true;
    expect(toWord(g)).toBe(16640);
});

// Left  shoulder and north button
test('toWord returns 33024 when left shoulder and north button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.leftShoulder.isPressed = true;
    g.buttons.north.isPressed = true;
    expect(toWord(g)).toBe(33024);
});

// Right shoulder and south button
test('toWord returns 4608 when right shoulder and south button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.rightShoulder.isPressed = true;
    g.buttons.south.isPressed = true;
    expect(toWord(g)).toBe(4608);
});

// Right shoulder and east button
test('toWord returns 8704 when right shoulder and east button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.rightShoulder.isPressed = true;
    g.buttons.east.isPressed = true;
    expect(toWord(g)).toBe(8704);
});

// Right shoulder and west button
test('toWord returns 16896 when right shoulder and west button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.rightShoulder.isPressed = true;
    g.buttons.west.isPressed = true;
    expect(toWord(g)).toBe(16896);
});

// Right shoulder and north button
test('toWord returns 33280 when right shoulder and north button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.rightShoulder.isPressed = true;
    g.buttons.north.isPressed = true;
    expect(toWord(g)).toBe(33280);
});

// Left thumb and south button
test('toWord returns 4160 when left thumb and south button pressed', () => {
    const g = cloneDeep(gamepad);
    g.sticks.left.button.isPressed = true;
    g.buttons.south.isPressed = true;
    expect(toWord(g)).toBe(4160);
});

// Left thumb and east button
test('toWord returns 8256 when left thumb and east button pressed', () => {
    const g = cloneDeep(gamepad);
    g.sticks.left.button.isPressed = true;
    g.buttons.east.isPressed = true;
    expect(toWord(g)).toBe(8256);
});

// Left thumb and west button
test('toWord returns 16448 when left thumb and west button pressed', () => {
    const g = cloneDeep(gamepad);
    g.sticks.left.button.isPressed = true;
    g.buttons.west.isPressed = true;
    expect(toWord(g)).toBe(16448);
});

// Left thumb and north button
test('toWord returns 32832 when left thumb and north button pressed', () => {
    const g = cloneDeep(gamepad);
    g.sticks.left.button.isPressed = true;
    g.buttons.north.isPressed = true;
    expect(toWord(g)).toBe(32832);
});

// Right thumb and south button
test('toWord returns 4224 when right thumb and south button pressed', () => {
    const g = cloneDeep(gamepad);
    g.sticks.right.button.isPressed = true;
    g.buttons.south.isPressed = true;
    expect(toWord(g)).toBe(4224);
});

// Right thumb and east button
test('toWord returns 8320 when right thumb and east button pressed', () => {
    const g = cloneDeep(gamepad);
    g.sticks.right.button.isPressed = true;
    g.buttons.east.isPressed = true;
    expect(toWord(g)).toBe(8320);
});

// Right thumb and west button
test('toWord returns 16512 when right thumb and west button pressed', () => {
    const g = cloneDeep(gamepad);
    g.sticks.right.button.isPressed = true;
    g.buttons.west.isPressed = true;
    expect(toWord(g)).toBe(16512);
});

// Right thumb and north button
test('toWord returns 32896 when right thumb and north button pressed', () => {
    const g = cloneDeep(gamepad);
    g.sticks.right.button.isPressed = true;
    g.buttons.north.isPressed = true;
    expect(toWord(g)).toBe(32896);
});

// DPAD_UP and south button
test('toWord returns 4097 when dpad up and south button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadUp.isPressed = true;
    g.buttons.south.isPressed = true;
    expect(toWord(g)).toBe(4097);
});

// DPAD_UP and east button
test('toWord returns 8193 when dpad up and east button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadUp.isPressed = true;
    g.buttons.east.isPressed = true;
    expect(toWord(g)).toBe(8193);
});

// DPAD_UP and west button
test('toWord returns 16385 when dpad up and west button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadUp.isPressed = true;
    g.buttons.west.isPressed = true;
    expect(toWord(g)).toBe(16385);
});

// DPAD_UP and north button
test('toWord returns 32769 when dpad up and north button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadUp.isPressed = true;
    g.buttons.north.isPressed = true;
    expect(toWord(g)).toBe(32769);
});

// DPAD_DOWN and south button
test('toWord returns 4098 when dpad down and south button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadDown.isPressed = true;
    g.buttons.south.isPressed = true;
    expect(toWord(g)).toBe(4098);
});


// DPAD_DOWN and east button
test('toWord returns 8194 when dpad down and east button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadDown.isPressed = true;
    g.buttons.east.isPressed = true;
    expect(toWord(g)).toBe(8194);
});

// DPAD_DOWN and west button
test('toWord returns 16386 when dpad down and west button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadDown.isPressed = true;
    g.buttons.west.isPressed = true;
    expect(toWord(g)).toBe(16386);
});

// DPAD_DOWN and north button
test('toWord returns 32770 when dpad down and north button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadDown.isPressed = true;
    g.buttons.north.isPressed = true;
    expect(toWord(g)).toBe(32770);
});

// DPAD_LEFT and south button
test('toWord returns 4100 when dpad left and south button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadLeft.isPressed = true;
    g.buttons.south.isPressed = true;
    expect(toWord(g)).toBe(4100);
});

// DPAD_LEFT and east button
test('toWord returns 8196 when dpad left and east button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadLeft.isPressed = true;
    g.buttons.east.isPressed = true;
    expect(toWord(g)).toBe(8196);
});

// DPAD_LEFT and west button
test('toWord returns 16388 when dpad left and west button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadLeft.isPressed = true;
    g.buttons.west.isPressed = true;
    expect(toWord(g)).toBe(16388);
});

// DPAD_LEFT and north button
test('toWord returns 32772 when dpad left and north button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadLeft.isPressed = true;
    g.buttons.north.isPressed = true;
    expect(toWord(g)).toBe(32772);
});

// DPAD_RIGHT and south button
test('toWord returns 4104 when dpad right and south button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadRight.isPressed = true;
    g.buttons.south.isPressed = true;
    expect(toWord(g)).toBe(4104);
});

// DPAD_RIGHT and east button
test('toWord returns 8200 when dpad right and east button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadRight.isPressed = true;
    g.buttons.east.isPressed = true;
    expect(toWord(g)).toBe(8200);
});

// DPAD_RIGHT and west button
test('toWord returns 16392 when dpad right and west button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadRight.isPressed = true;
    g.buttons.west.isPressed = true;
    expect(toWord(g)).toBe(16392);
});

// DPAD_RIGHT and north button
test('toWord returns 32776 when dpad right and north button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadRight.isPressed = true;
    g.buttons.north.isPressed = true;
    expect(toWord(g)).toBe(32776);
});

// DPAD_UP and start button
test('toWord returns 17 when dpad up and start button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadUp.isPressed = true;
    g.buttons.start.isPressed = true;
    expect(toWord(g)).toBe(17);
});

// DPAD_UP and back button
test('toWord returns 33 when dpad up and select button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadUp.isPressed = true;
    g.buttons.select.isPressed = true;
    expect(toWord(g)).toBe(33);
});

// DPAD_UP and left thumb
test('toWord returns 65 when dpad up and left thumb button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadUp.isPressed = true;
    g.sticks.left.button.isPressed = true;
    expect(toWord(g)).toBe(65);
});

// DPAD_UP and right thumb
test('toWord returns 129 when dpad up and right thumb button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadUp.isPressed = true;
    g.sticks.right.button.isPressed = true;
    expect(toWord(g)).toBe(129);
});

// DPAD_UP and left shoulder
test('toWord returns 257 when dpad up and left shoulder button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadUp.isPressed = true;
    g.buttons.leftShoulder.isPressed = true;
    expect(toWord(g)).toBe(257);
});

// DPAD_UP and right shoulder
test('toWord returns 513 when dpad up and right shoulder button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadUp.isPressed = true;
    g.buttons.rightShoulder.isPressed = true;
    expect(toWord(g)).toBe(513);
});

// DPAD_DOWN and start button
test('toWord returns 18 when dpad down and start button button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadDown.isPressed = true;
    g.buttons.start.isPressed = true;
    expect(toWord(g)).toBe(18);
});

// DPAD_DOWN and select button
test('toWord returns 34 when dpad down and select button button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadDown.isPressed = true;
    g.buttons.select.isPressed = true;
    expect(toWord(g)).toBe(34);
});

// DPAD_DOWN and left thumb
test('toWord returns 66 when dpad down and left thumb button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadDown.isPressed = true;
    g.sticks.left.button.isPressed = true;
    expect(toWord(g)).toBe(66);
});

// DPAD_DOWN and right thumb
test('toWord returns 130 when dpad down and right thumb button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadDown.isPressed = true;
    g.sticks.right.button.isPressed = true;
    expect(toWord(g)).toBe(130);
});

// DPAD_DOWN and left shoulder
test('toWord returns 258 when dpad down and left shoulder button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadDown.isPressed = true;
    g.buttons.leftShoulder.isPressed = true;
    expect(toWord(g)).toBe(258);
});

// DPAD_DOWN and right shoulder
test('toWord returns 514 when dpad down and right shoulder button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadDown.isPressed = true;
    g.buttons.rightShoulder.isPressed = true;
    expect(toWord(g)).toBe(514);
});

// DPAD_LEFT and start button
test('toWord returns 20 when dpad left and start button button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadLeft.isPressed = true;
    g.buttons.start.isPressed = true;
    expect(toWord(g)).toBe(20);
});

// DPAD_LEFT and select button
test('toWord returns 36 when dpad left and select button button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadLeft.isPressed = true;
    g.buttons.select.isPressed = true;
    expect(toWord(g)).toBe(36);
});

// DPAD_LEFT and left thumb
test('toWord returns 68 when dpad left and left thumb button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadLeft.isPressed = true;
    g.sticks.left.button.isPressed = true;
    expect(toWord(g)).toBe(68);
});

// DPAD_LEFT and right thumb
test('toWord returns 132 when dpad left and right thumb button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadLeft.isPressed = true;
    g.sticks.right.button.isPressed = true;
    expect(toWord(g)).toBe(132);
});

// DPAD_LEFT and left shoulder
test('toWord returns 260 when dpad left and left shoulder button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadLeft.isPressed = true;
    g.buttons.leftShoulder.isPressed = true;
    expect(toWord(g)).toBe(260);
});

// DPAD_LEFT and right shoulder
test('toWord returns 516 when dpad left and right shoulder button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadLeft.isPressed = true;
    g.buttons.rightShoulder.isPressed = true;
    expect(toWord(g)).toBe(516);
});

// DPAD_RIGHT and start button
test('toWord returns 24 when dpad right and start button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadRight.isPressed = true;
    g.buttons.start.isPressed = true;
    expect(toWord(g)).toBe(24);
});

// DPAD_RIGHT and select button
test('toWord returns 40 when dpad right and select button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadRight.isPressed = true;
    g.buttons.select.isPressed = true;
    expect(toWord(g)).toBe(40);
});

// DPAD_RIGHT and left thumb
test('toWord returns 72 when dpad right and left thumb button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadRight.isPressed = true;
    g.sticks.left.button.isPressed = true;
    expect(toWord(g)).toBe(72);
});

// DPAD_RIGHT and right thumb
test('toWord returns 136 when dpad right and right thumb button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadRight.isPressed = true;
    g.sticks.right.button.isPressed = true;
    expect(toWord(g)).toBe(136);
});

// DPAD_RIGHT and left shoulder
test('toWord returns 264 when dpad right and left shoulder button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadRight.isPressed = true;
    g.buttons.leftShoulder.isPressed = true;
    expect(toWord(g)).toBe(264);
});

// DPAD_RIGHT and right shoulder
test('toWord returns 520 when dpad right and right shoulder button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.dpadRight.isPressed = true;
    g.buttons.rightShoulder.isPressed = true;
    expect(toWord(g)).toBe(520);
});

// Start and Select button
test('toWord returns 48 when start and select button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.start.isPressed = true;
    g.buttons.select.isPressed = true;
    expect(toWord(g)).toBe(48);
});

// Start and South
test('toWord returns 4112 when start and south button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.start.isPressed = true;
    g.buttons.south.isPressed = true;
    expect(toWord(g)).toBe(4112);
});

// Start and East
test('toWord returns 8208 when start and east button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.start.isPressed = true;
    g.buttons.east.isPressed = true;
    expect(toWord(g)).toBe(8208);
});

// Start and West
test('toWord returns 16400 when start and west button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.start.isPressed = true;
    g.buttons.west.isPressed = true;
    expect(toWord(g)).toBe(16400);
});

// Start and North
test('toWord returns 32784 when start and north button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.start.isPressed = true;
    g.buttons.north.isPressed = true;
    expect(toWord(g)).toBe(32784);
});

// Select and South
test('toWord returns 4128 when select and south button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.select.isPressed = true;
    g.buttons.south.isPressed = true;
    expect(toWord(g)).toBe(4128);
});

// Select and East
test('toWord returns 8224 when select and east button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.select.isPressed = true;
    g.buttons.east.isPressed = true;
    expect(toWord(g)).toBe(8224);
});

// Select and West
test('toWord returns 16416 when select and west button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.select.isPressed = true;
    g.buttons.west.isPressed = true;
    expect(toWord(g)).toBe(16416);
});

// Select and North
test('toWord returns 32800 when select and north button pressed', () => {
    const g = cloneDeep(gamepad);
    g.buttons.select.isPressed = true;
    g.buttons.north.isPressed = true;
    expect(toWord(g)).toBe(32800);
});
