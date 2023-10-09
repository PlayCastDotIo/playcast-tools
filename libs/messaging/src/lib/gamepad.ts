import { cloneDeep } from 'lodash';
import { PlaycastButton, PlaycastVector } from './core';
import { PlaycastSystemPlayerCoordinates } from './system';

export type PlaycastTrigger = PlaycastButton & {
  value: number;
};

export type PlaycastStick = {
  stick: PlaycastVector;
  button: PlaycastButton;
};

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
};

export type PlaycastGamepadsInputFromWebGL = {
  gamepads: PlaycastGamepadInputFromWebGL[];
};

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
  };
  triggers: {
    left: PlaycastTrigger;
    right: PlaycastTrigger;
  };
  sticks: {
    left: PlaycastStick;
    right: PlaycastStick;
  };
};

export type PlaycastGamepadState = {
  playerCoordinates: PlaycastSystemPlayerCoordinates;
  gamepads: PlaycastGamepad[];
};

export type PlaycastGamepadId = -1 | 0 | 1 | 2 | 3; // -1 means unassigned

export type PlaycastPlayerDevice = {
    playerId: string;
    deviceId: number;
};

export type PlaycastPlayerDeviceGamepad = PlaycastPlayerDevice & {
    gamepadId: PlaycastGamepadId;
};

export type PlaycastPlayerDeviceGamepadMap = PlaycastPlayerDeviceGamepad[];

export type XInput = {
  wButtons: number;
  bLeftTrigger: number;
  bRightTrigger: number;
  sThumbLX: number;
  sThumbLY: number;
  sThumbRX: number;
  sThumbRY: number;
};

export type PlaycastGamepadXInput = {
  gamepadId: -1 | 0 | 1 | 2 | 3; // -1 means unassigned
  playerCoordinates: PlaycastSystemPlayerCoordinates;
  xInput: XInput;
};

export const gamepadsWebGlToState = (
  input: PlaycastGamepadsInputFromWebGL,
  playerCoordinates: PlaycastSystemPlayerCoordinates
): PlaycastGamepadState => {
  return {
    playerCoordinates: playerCoordinates,
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
};

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
export const toShort = (raw: number, reverse: boolean) =>
  (((reverse ? 0 - raw : raw) + 1) * 32767.5 - 32768) | 0;

// Gamepad triggers are 0 to 1, XInput triggers are 0 to 255
export const toByte = (raw: number) => (raw * 255) | 0;

// Gamepad buttons are booleans, XInput buttons are a bitmask
export const toWord = (gamepad: PlaycastGamepad) =>
  (gamepad.buttons.dpadUp.isPressed ? DPAD_UP : 0) |
  (gamepad.buttons.dpadDown.isPressed ? DPAD_DOWN : 0) |
  (gamepad.buttons.dpadLeft.isPressed ? DPAD_LEFT : 0) |
  (gamepad.buttons.dpadRight.isPressed ? DPAD_RIGHT : 0) |
  (gamepad.buttons.start.isPressed ? START : 0) |
  (gamepad.buttons.select.isPressed ? BACK : 0) |
  (gamepad.sticks.left.button.isPressed ? LEFT_THUMB : 0) |
  (gamepad.sticks.right.button.isPressed ? RIGHT_THUMB : 0) |
  (gamepad.buttons.leftShoulder.isPressed ? LEFT_SHOULDER : 0) |
  (gamepad.buttons.rightShoulder.isPressed ? RIGHT_SHOULDER : 0) |
  (gamepad.buttons.south.isPressed ? A : 0) |
  (gamepad.buttons.east.isPressed ? B : 0) |
  (gamepad.buttons.west.isPressed ? X : 0) |
  (gamepad.buttons.north.isPressed ? Y : 0);

export const gamepadsStateToXInput = (
  state: PlaycastGamepadState,
  map: PlaycastPlayerDeviceGamepadMap
): PlaycastGamepadXInput[] => {
  return state.gamepads.map((gamepad: PlaycastGamepad) => {
    // map is an array that's already filtered to this player
    // We will return -1 if we didn't find a mapping, but the host shouldn't
    // let that happen.
    const gamepadId =
      map.find((m) => m.deviceId === gamepad.deviceId)?.gamepadId ?? -1;
    return {
      gamepadId: gamepadId,
      playerCoordinates: cloneDeep(state.playerCoordinates),
      xInput: {
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
};

export type PlaycastGamepadMessages =
  | PlaycastMessageGamepadSetState
  | PlaycastMessageGamepadSetXInput
  | PlaycastMessageGamepadInitialize
  | PlaycastMessageGamepadRemove;

export type PlaycastMessageGamepadInitialize = {
  target: 'gamepad';
  action: 'initialize';
  isReply: false;
  message: { gamepadId: PlaycastGamepadId };
};

export type PlaycastMessageGamepadRemove = {
  target: 'gamepad';
  action: 'remove';
  isReply: false;
  message: { gamepadId: PlaycastGamepadId };
};

export type PlaycastMessageGamepadSetState = {
  target: 'gamepad';
  action: 'setState';
  isReply: false;
  message: PlaycastGamepadState;
};

export type PlaycastMessageGamepadSetXInput = {
  target: 'gamepad';
  action: 'setXInput';
  isReply: false;
  message: PlaycastGamepadXInput;
};
