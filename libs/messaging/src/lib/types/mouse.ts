import { PlaycastButton, PlaycastVector } from './core';

export type PlaycastMouseOrigin =
  | 'topLeft'
  | 'bottomLeft'
  | 'topRight'
  | 'bottomRight';
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

export type PlaycastMouseSource = {
  origin: PlaycastMouseOrigin;
  cursor: PlaycastCursorState;
  dimensions: PlaycastVector;
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

export type PlaycastMouseUp = PlaycastMouseLocation & {
  button: PlaycastTargetButton;
  clickCount: number;
};

// Possible message types include target, action, message typing
export type PlaycastMessageMouseSource = {
  target: 'mouse';
  action: 'source';
  message: PlaycastMouseSource;
};

export type PlaycastMessageMouseLocation = {
  target: 'mouse';
  action: 'location';
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

export type PlaycastMessageMouseState = {
  target: 'mouse';
  action: 'state';
  message: PlaycastMouseState;
};

export type PlaycastMouseEvent =
  | PlaycastMessageMouseLocation
  | PlaycastMessageMouseDown
  | PlaycastMessageMouseUp
  | PlaycastMessageMouseMove;

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

  // Always include location or move
  events.push({
    target: 'mouse',
    action: useLocation ? 'location' : 'move',
    message: {
      position: { ...state.position },
      delta: { ...state.delta },
    },
  });

  return events;
};

