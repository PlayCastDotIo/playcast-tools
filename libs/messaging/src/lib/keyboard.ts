import { cloneDeep } from 'lodash';
import { PlaycastButton } from './core';

export type PlaycastKeyDetail = {
  keyCode: string;
  scanCode: number;
  displayName: string;
};

// We could make explicit keys
export type PlaycastKey = PlaycastButton & PlaycastKeyDetail;

export type PlaycastKeyboardInputFromWebGL = {
  keys: PlaycastKey[];
};

// Not currently different, but preparing for the future
export type PlaycastKeyboardState = PlaycastKeyboardInputFromWebGL;

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

export const keyboardStateToEvents = (
  state: PlaycastKeyboardState
): PlaycastKeyboardEvent[] => {
  const events: PlaycastKeyboardEvent[] = [];
  // Only generate events with a state change
  state.keys
    .filter((key) => key.wasPressed || key.wasReleased)
    .forEach((key) => {
      if (key.wasPressed) {
        events.push({
          target: 'keyboard',
          action: 'down',
          isReply: false,

          message: {
            keyCode: key.keyCode,
            scanCode: key.scanCode,
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
            keyCode: key.keyCode,
            scanCode: key.scanCode,
            displayName: key.displayName,
          },
        });
      }
    });

  return events;
};
