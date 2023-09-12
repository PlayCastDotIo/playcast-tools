import { PlaycastButton } from './core';

// We could make explicit keys
export type PlaycastKey = PlaycastButton & {
  keyCode: string;
  scanCode: number;
  displayName: string;
};

export type PlaycastKeyboardInputFromWebGL = {
  keys: PlaycastKey[];
};

// Not currently different, but preparing for the future
export type PlaycastKeyboardState = PlaycastKeyboardInputFromWebGL;

export type PlaycastMessageKeyboardState = {
  target: 'keyboard';
  action: 'state';
  message: PlaycastKeyboardState;
};

export type PlaycastMessageKeyboardDown = {
  target: 'keyboard';
  action: 'down';
  message: PlaycastKey;
};

export type PlaycastMessageKeyboardUp = {
  target: 'keyboard';
  action: 'up';
  message: PlaycastKey;
};

export type PlaycastKeyboardEvent =
  | PlaycastMessageKeyboardDown
  | PlaycastMessageKeyboardUp;

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
          message: {
            ...key,
          },
        });
      }

      if (key.wasReleased) {
        events.push({
          target: 'keyboard',
          action: 'up',
          message: {
            ...key,
          },
        });
      }
    });

  return events;
};
