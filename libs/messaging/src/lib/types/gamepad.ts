import { PlaycastButton, PlaycastVector } from './core';

export type PlaycastTrigger = PlaycastButton & {
  value: number;
}

export type PlaycastStick = {
  stick: PlaycastVector;
  button: PlaycastButton;
}

export type PlaycastGamepadInputFromWebGL = {
  deviceId: number;
  buttonEast: PlaycastButton;
  buttonNorth: PlaycastButton;
  buttonSouth: PlaycastButton;
  buttonWest: PlaycastButton;
  dpadRight: PlaycastButton;
  dpadLeft: PlaycastButton;
  dpadUp: PlaycastButton;
  dpadDown: PlaycastButton;
  leftShoulder: PlaycastButton;
  leftStick: PlaycastVector;
  leftStickButton: PlaycastButton;
  leftTrigger: PlaycastTrigger;
  rightShoulder: PlaycastButton;
  rightStick: PlaycastVector;
  rightStickButton: PlaycastButton;
  rightTrigger: PlaycastTrigger;
  select: PlaycastButton;
  start: PlaycastButton;
}

export type PlaycastGamepadsInputFromWebGL = {
  gamepads: PlaycastGamepadInputFromWebGL[];
}

export type PlaycastGamepad = {
  deviceId: number;
  buttons: {
    east: PlaycastButton;
    north: PlaycastButton;
    south: PlaycastButton;
    west: PlaycastButton;
    leftShoulder: PlaycastButton;
    rightShoulder: PlaycastButton;
    select: PlaycastButton;
    start: PlaycastButton;
    dpadUp: PlaycastButton;
    dpadDown: PlaycastButton;
    dpadLeft: PlaycastButton;
    dpadRight: PlaycastButton;
  },
  triggers: {
    left: PlaycastTrigger;
    right: PlaycastTrigger;
  },
  sticks: {
    left: PlaycastStick;
    right: PlaycastStick;
  }
}

export type PlaycastGamepadState = {
  gamepads: PlaycastGamepad[];
}

export type XInput = {
  wButtons: number,
  bLeftTrigger: number,
  bRightTrigger: number,
  sThumbLX: number,
  sThumbLY: number,
  sThumbRX: number,
  sThumbRY: number,
}

export type PlaycastGamepadXInput = {
  deviceId: number;
  xinput: XInput;
}

export const gamepadsWebGlToState = (input: PlaycastGamepadsInputFromWebGL): PlaycastGamepadState => {
  return {
    gamepads: input.gamepads.map((gamepad: PlaycastGamepadInputFromWebGL) => {
      return {
        deviceId: gamepad.deviceId,
        buttons: {
          east: gamepad.buttonEast,
          north: gamepad.buttonNorth,
          south: gamepad.buttonSouth,
          west: gamepad.buttonWest,
          leftShoulder: gamepad.leftShoulder,
          rightShoulder: gamepad.rightShoulder,
          select: gamepad.select,
          start: gamepad.start,
          dpadUp: gamepad.dpadUp,
          dpadDown: gamepad.dpadDown,
          dpadLeft: gamepad.dpadLeft,
          dpadRight: gamepad.dpadRight,
        },
        triggers: {
          left: gamepad.leftTrigger,
          right: gamepad.rightTrigger,
        },
        sticks: {
          left: {
            stick: gamepad.leftStick,
            button: gamepad.leftStickButton,
          },
          right: {
            stick: gamepad.rightStick,
            button: gamepad.rightStickButton,
          },
        },
      };
    }),
  };
}

const DPAD_UP = 0x0001;
const DPAD_DOWN = 0x0002;
const DPAD_LEFT = 0x0004;
const DPAD_RIGHT = 0x0008;
const START = 0x0010;
const BACK = 0x0020;
const LEFT_THUMB = 0x0040;
const RIGHT_THUMB = 0x0080;
const LEFT_SHOULDER = 0x0100;
const RIGHT_SHOULDER = 0x0200;
const A = 0x1000;
const B = 0x2000;
const X = 0x4000;
const Y = 0x8000;

// Gamepad sticks are -1 to 1, XInput sticks are -32768 to 32767
// Browser capture of gamepad sticks use y axis inverted from XInput and WebGL
const toShort = (raw: number, reverse: boolean) => (((reverse ? 0 - raw : raw) + 1) * 32767.5 - 32768) | 0;

// Gamepad triggers are 0 to 1, XInput triggers are 0 to 255
const toByte = (raw: number) => (raw * 255) | 0;

// Gamepad buttons are booleans, XInput buttons are a bitmask
const toWord = (gamepad: PlaycastGamepad) =>
  (gamepad.buttons.dpadUp.isPressed ? DPAD_UP : 0) |
  (gamepad.buttons.dpadDown.isPressed ? DPAD_DOWN : 0) |
  (gamepad.buttons.dpadLeft.isPressed ? DPAD_LEFT : 0) |
  (gamepad.buttons.dpadRight.isPressed ? DPAD_RIGHT : 0) |
  (gamepad.buttons.start.isPressed ? START : 0) |
  (gamepad.buttons.select.isPressed ? BACK : 0) |
  (gamepad.sticks.left.button.isPressed ? LEFT_THUMB : 0) |
  (gamepad.sticks.right.button.isPressed ? RIGHT_THUMB : 0) |
  (gamepad.buttons.leftShoulder ? LEFT_SHOULDER : 0) |
  (gamepad.buttons.rightShoulder ? RIGHT_SHOULDER : 0) |
  (gamepad.buttons.south.isPressed ? A : 0) |
  (gamepad.buttons.east.isPressed ? B : 0) |
  (gamepad.buttons.west.isPressed ? X : 0) |
  (gamepad.buttons.north.isPressed ? Y : 0)
  ;

export const gamepadsStateToXInput = (state: PlaycastGamepadState): PlaycastGamepadXInput[] => {
  return state.gamepads.map((gamepad: PlaycastGamepad) => {
    return {
      deviceId: gamepad.deviceId,
      xinput: {
        wButtons: toWord(gamepad),
        bLeftTrigger: toByte(gamepad.triggers.left.value),
        bRightTrigger: toByte(gamepad.triggers.right.value),
        sThumbLX: toShort(gamepad.sticks.left.stick.x, false),
        sThumbLY: toShort(gamepad.sticks.left.stick.y, false),
        sThumbRX: toShort(gamepad.sticks.right.stick.x, false),
        sThumbRY: toShort(gamepad.sticks.right.stick.y, false),
      },
    };
  });
}

// Possible message types include target, action, message typing
export type PlaycastMessageGamepadState = {
  target: 'gamepad';
  action: 'state';
  message: PlaycastGamepadState;
};