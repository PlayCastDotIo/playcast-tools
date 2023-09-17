import { cloneDeep, pick } from 'lodash';
import { PlaycastButton, PlaycastVector } from './core';

export type PlaycastMouseMode =
  | 'none'
  | 'absolute'
  | 'relative'
  | 'move'
  | 'location';

export type PlaycastCursorLockState =
  | 'none'
  | 'locked'
  | 'confined'
  | 'unknown';

export type PlaycastTargetButton =
  | 'left'
  | 'middle'
  | 'right'
  | 'back'
  | 'forward';

export type PlaycastMouseButtonState = {
  back: PlaycastButton;
  forward: PlaycastButton;
  left: PlaycastButton;
  middle: PlaycastButton;
  right: PlaycastButton;
  clickCount: number;
};
export type PlaycastCursorState = {
  lockState: PlaycastCursorLockState;
};

export type PlaycastMouseInputFromWebGL = {
  position: PlaycastVector;
  delta: PlaycastVector;
  buttons: PlaycastMouseButtonState;
  scroll: PlaycastVector;
  cursor: PlaycastCursorState;
};

export type PlaycastMouseLocation = {
  position: PlaycastVector;
  delta: PlaycastVector;
};

export type PlaycastMouseState = PlaycastMouseLocation & {
  buttons: PlaycastMouseButtonState;
  scroll: PlaycastVector;
};

export type PlaycastMouseButton = PlaycastMouseLocation & {
  button: PlaycastTargetButton;
  clickCount: number;
};

export type PlaycastMouseWheel = {
  position: PlaycastVector;
  scroll: PlaycastVector;
};

// Possible message types include target, action, message typing
export type PlaycastMessageMouseMode = {
  target: 'mouse';
  action: 'mode';
  message: PlaycastMouseMode;
};

export type PlaycastMessageMouseSetLocation = {
  target: 'mouse';
  action: 'setLocation';
  message: PlaycastMouseLocation;
};

export type PlaycastMessageMouseMove = {
  target: 'mouse';
  action: 'move';
  message: PlaycastMouseLocation;
};

export type PlaycastMessageMouseDown = {
  target: 'mouse';
  action: 'down';
  message: PlaycastMouseButton;
};

export type PlaycastMessageMouseUp = {
  target: 'mouse';
  action: 'up';
  message: PlaycastMouseButton;
};

export type PlaycastMessageMouseWheel = {
  target: 'mouse';
  action: 'wheel';
  message: PlaycastMouseWheel;
};

export type PlaycastMessageMouseState = {
  target: 'mouse';
  action: 'state';
  message: PlaycastMouseState;
};

export type PlaycastMouseEvent =
  | PlaycastMessageMouseSetLocation
  | PlaycastMessageMouseDown
  | PlaycastMessageMouseUp
  | PlaycastMessageMouseMove
  | PlaycastMessageMouseWheel;

export const mouseWebGlToState = (
  input: PlaycastMouseInputFromWebGL
): PlaycastMouseState => {
  return cloneDeep(
    pick(input, ['position', 'delta', 'buttons', 'scroll'])
  ) as PlaycastMouseState;
};

export const mouseStateToEvents = (
  state: PlaycastMouseState,
  useLocation: boolean
): PlaycastMouseEvent[] => {
  const events: PlaycastMouseEvent[] = [];
  (
    ['left', 'middle', 'right', 'back', 'forward'] as PlaycastTargetButton[]
  ).forEach((button) => {
    if (state.buttons[button].wasPressed) {
      events.push({
        target: 'mouse',
        action: 'down',
        message: {
          position: { ...state.position },
          delta: { ...state.delta },
          button: 'left',
          clickCount: state.buttons.clickCount,
        },
      });
    }

    if (state.buttons[button].wasReleased) {
      events.push({
        target: 'mouse',
        action: 'up',
        message: {
          position: { ...state.position },
          delta: { ...state.delta },
          button: 'left',
          clickCount: state.buttons.clickCount,
        },
      });
    }
  });

  // If there was a scroll event, include it
  if (state.scroll.x !== 0 || state.scroll.y !== 0) {
    events.push({
      target: 'mouse',
      action: 'wheel',
      message: {
        position: { ...state.position },
        scroll: { ...state.scroll },
      },
    });
  }

  // Always include location or move
  events.push({
    target: 'mouse',
    action: useLocation ? 'setLocation' : 'move',
    message: {
      position: { ...state.position },
      delta: { ...state.delta },
    },
  });

  return events;
};
