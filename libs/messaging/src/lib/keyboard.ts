import { cloneDeep } from 'lodash';
import { PlaycastButton } from './core';

export type PlaycastKeyDetail = {
  keyCode: number;
  location: 'standard' | 'left' | 'right' | 'numpad';
  source: {
    type: string;
    code: string | number;
  };
  modifiers: {
    ctrl: boolean;
    alt: boolean;
    shift: boolean;
    meta: boolean;
  };
  displayName: string;
};

// We could make explicit keys
export type PlaycastKey = PlaycastButton & PlaycastKeyDetail;

export type PlaycastKeyboardInputFromWebGL = {
  keys: PlaycastKey[];
};

// Not currently different, but preparing for the future
export type PlaycastKeyboardState = PlaycastKeyboardInputFromWebGL;

export type PlaycastKeyboardMessages =
  | PlaycastMessageKeyboardSetState
  | PlaycastMessageKeyboardDown
  | PlaycastMessageKeyboardUp;

export type PlaycastMessageKeyboardSetState = {
  target: 'keyboard';
  action: 'setState';
  isReply: false;
  message: PlaycastKeyboardState;
};

export type PlaycastMessageKeyboardDown = {
  target: 'keyboard';
  action: 'down';
  isReply: false;
  message: PlaycastKeyDetail;
};

export type PlaycastMessageKeyboardUp = {
  target: 'keyboard';
  action: 'up';
  isReply: false;
  message: PlaycastKeyDetail;
};

export type PlaycastKeyboardEvent =
  | PlaycastMessageKeyboardDown
  | PlaycastMessageKeyboardUp;

export const keyboardWebGlToState = (
  input: PlaycastKeyboardInputFromWebGL
): PlaycastKeyboardState => {
  return cloneDeep(input) as PlaycastKeyboardState;
};

export const keyboardUnityToW3C = (unityKeyCode: number): number => {
  // Letters A-Z, A is Unity 15, W3C 65
  if (unityKeyCode >= 15 && unityKeyCode <= 40) return unityKeyCode + 50;

  // Digits 1-9, 1 is Unity 41, W3C 49
  if (unityKeyCode >= 41 && unityKeyCode <= 49) return unityKeyCode + 8;
  if (unityKeyCode === 50) return 48;

  // Numberpad 0-9, 0 is Unity 84, W3C 96
  if (unityKeyCode >= 84 && unityKeyCode <= 93) return unityKeyCode + 12;

  // Function keys, F1-F12, F1 is Unity 94, W3C 112
  if (unityKeyCode >= 94 && unityKeyCode <= 105) return unityKeyCode + 18;

  // Now it's just brute force
  const mapped = keyMap[unityKeyCode] || -1;
  return mapped;
};

export const keyboardGetModifiers = (
  keys: PlaycastKey[]
): PlaycastKeyDetail['modifiers'] => {
  return {
    ctrl:
      keys.filter((k) => k.isPressed && [55, 56].includes(k.keyCode)).length >
      0,
    alt:
      keys.filter((k) => k.isPressed && [53, 54].includes(k.keyCode)).length >
      0,
    shift:
      keys.filter((k) => k.isPressed && [51, 52].includes(k.keyCode)).length >
      0,
    meta:
      keys.filter((k) => k.isPressed && [57, 58].includes(k.keyCode)).length >
      0,
  };
};

export const keyboardGetLocation = (
  keyCode: number
): PlaycastKeyDetail['location'] => {
  if ([51, 53, 55, 57].includes(keyCode)) return 'left';
  if ([52, 54, 56, 58].includes(keyCode)) return 'right';
  if (keyCode >= 77 && keyCode <= 93) return 'numpad';
  return 'standard';
};

export const keyboardStateToEvents = (
  state: PlaycastKeyboardState
): PlaycastKeyboardEvent[] => {
  const events: PlaycastKeyboardEvent[] = [];

  const modifiers = keyboardGetModifiers(state.keys);

  // Only generate events with a state change
  state.keys
    .filter((key) => key.wasPressed || key.wasReleased)
    .forEach((key) => {
      const location = keyboardGetLocation(key.keyCode);

      if (key.wasPressed) {
        events.push({
          target: 'keyboard',
          action: 'down',
          isReply: false,

          message: {
            keyCode: keyboardUnityToW3C(key.keyCode),
            location: location,
            source: {
              type: 'unity',
              code: key.keyCode,
            },
            modifiers: modifiers,
            displayName: key.displayName,
          },
        });
      }

      if (key.wasReleased) {
        events.push({
          target: 'keyboard',
          action: 'up',
          isReply: false,
          message: {
            keyCode: keyboardUnityToW3C(key.keyCode),
            location: location,
            source: {
              type: 'unity',
              code: key.keyCode,
            },
            modifiers: modifiers,
            displayName: key.displayName,
          },
        });
      }
    });

  return events;
};

export const keyMap: { [key:number]: number } = {
  1: 32, // space
  2: 13, // enter
  3: 9, // tab
  4: 192, // backquote
  5: 222, // quote
  6: 186, // semicolon
  7: 188, // comma
  8: 190, // period
  9: 191, // slash
  10: 220, // backslash
  11: 219, // left bracket
  12: 221, // right bracket
  13: 189, // minus
  14: 187, // equals
  51: 16, // left shift
  52: 16, // right shift
  53: 18, // left alt
  54: 18, // right alt
  55: 17, // left ctrl
  56: 17, // right ctrl
  57: 91, // left meta
  58: 92, // right meta
  59: 93, // context menu
  60: 27, // escape
  61: 37, // left arrow
  62: 39, // right arrow
  63: 38, // up arrow
  64: 40, // down arrow
  65: 8, // backspace
  66: 34, // page down
  67: 33, // page up
  68: 36, // home
  69: 35, // end
  70: 45, // insert
  71: 46, // delete
  72: 20, // caps lock
  73: 144, // num lock
  74: 44, // print screen
  75: 145, // scroll lock
  76: 19, // pause
  77: 13, // numpad enter
  78: 111, // numpad divide
  79: 106, // numpad multiply
  80: 107, // numpad add
  81: 109, // numpad subtract
  82: 110, // numpad decimal
  83: 96, // numpad 0
};
