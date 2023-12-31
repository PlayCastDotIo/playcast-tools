import { cloneDeep, pick } from 'lodash';
import { PlaycastButton, PlaycastVector } from './core';
import { PlaycastSystemPlayerCoordinates } from './system';

export type PlaycastMouseMode = {
  mode: 'default' | 'absolute' | 'relative';
  deviceType: 'mouse' | 'gamepad' | 'keyboard' | 'touch';
  isBounded: boolean;
  wrapMouse: boolean;
  deviceId: number;
};

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
  playerCoordinates: PlaycastSystemPlayerCoordinates;
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
  playerCoordinates: PlaycastSystemPlayerCoordinates;
  position: PlaycastVector;
  scroll: PlaycastVector;
};

export type PlaycastMouseMessages =
  | PlaycastMessageMouseSetMode
  | PlaycastMessageMouseSetLocation
  | PlaycastMessageMouseMove
  | PlaycastMessageMouseDown
  | PlaycastMessageMouseUp
  | PlaycastMessageMouseWheel
  | PlaycastMessageMouseSetState;

export type PlaycastMessageMouseSetMode = {
  target: 'mouse';
  action: 'setMode';
  isReply: false;
  message: PlaycastMouseMode;
};

export type PlaycastMessageMouseSetLocation = {
  target: 'mouse';
  action: 'setLocation';
  isReply: false;
  message: PlaycastMouseLocation;
};

export type PlaycastMessageMouseMove = {
  target: 'mouse';
  action: 'move';
  isReply: false;
  message: PlaycastMouseLocation;
};

export type PlaycastMessageMouseDown = {
  target: 'mouse';
  action: 'down';
  isReply: false;
  message: PlaycastMouseButton;
};

export type PlaycastMessageMouseUp = {
  target: 'mouse';
  action: 'up';
  isReply: false;
  message: PlaycastMouseButton;
};

export type PlaycastMessageMouseWheel = {
  target: 'mouse';
  action: 'wheel';
  isReply: false;
  message: PlaycastMouseWheel;
};

export type PlaycastMessageMouseSetState = {
  target: 'mouse';
  action: 'setState';
  isReply: false;
  message: PlaycastMouseState;
};

export type PlaycastMouseEvent =
  | PlaycastMessageMouseSetLocation
  | PlaycastMessageMouseDown
  | PlaycastMessageMouseUp
  | PlaycastMessageMouseMove
  | PlaycastMessageMouseWheel;

export const mouseWebGlToState = (
  input: PlaycastMouseInputFromWebGL,
  playerCoordinates: PlaycastSystemPlayerCoordinates
): PlaycastMouseState => {
  return {
    ...cloneDeep(pick(input, ['position', 'delta', 'buttons', 'scroll'])),
    playerCoordinates: cloneDeep(playerCoordinates),
  } as PlaycastMouseState;
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
        isReply: false,
        message: {
          playerCoordinates: cloneDeep(state.playerCoordinates),
          position: { ...state.position },
          delta: { ...state.delta },
          button: button,
          clickCount: state.buttons.clickCount,
        },
      });
    }

    if (state.buttons[button].wasReleased) {
      events.push({
        target: 'mouse',
        action: 'up',
        isReply: false,
        message: {
          playerCoordinates: cloneDeep(state.playerCoordinates),
          position: { ...state.position },
          delta: { ...state.delta },
          button: button,
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
      isReply: false,
      message: {
        playerCoordinates: cloneDeep(state.playerCoordinates),
        position: { ...state.position },
        scroll: { ...state.scroll },
      },
    });
  }

  // Always include location or move if there was a delta
  if (state.delta.x !== 0 || state.delta.y !== 0) {
    events.push({
      target: 'mouse',
      action: useLocation ? 'setLocation' : 'move',
      isReply: false,
      message: {
        playerCoordinates: cloneDeep(state.playerCoordinates),
        position: { ...state.position },
        delta: { ...state.delta },
      },
    });
  }

  return events;
};
