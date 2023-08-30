import { PlaycastButton, PlaycastVector } from "./core";

export type PlaycastMouseOrigin = 'topLeft' | 'bottomLeft' | 'topRight' | 'bottomRight';
export type PlaycastCursorLockState = 'none' | 'locked' | 'confined' | 'unknown';
export type PlaycastTargetButton = 'left' | 'middle' | 'right' | 'back' | 'forward';

export type PlaycastMouseSource = {
  origin: PlaycastMouseOrigin;
  cursor: {
    lockState: PlaycastCursorLockState;
  };
  dimensions: PlaycastVector;
}

export type PlaycastMouseLocation = {
  position: PlaycastVector;
  delta: PlaycastVector;
};

export type PlaycastMouseState = PlaycastMouseLocation & {
  buttons: {
      back: PlaycastButton;
      forward: PlaycastButton;
      left: PlaycastButton;
      middle: PlaycastButton;
      right: PlaycastButton;
  };
  clickCount: number;
  scroll: PlaycastVector;
};

export type PlaycastMouseButton = PlaycastMouseLocation & {
  button: PlaycastTargetButton;
  clickCount: number;
}

export type PlaycastMouseUp = PlaycastMouseLocation & {
  button: PlaycastTargetButton;
  clickCount: number;
}

// Possible message types include target, action, message typing
export type PlaycastMessageMouseSource = {
  target: 'mouse';
  action: 'mouseSource';
  message: PlaycastMouseSource;
}

export type PlaycastMessageMouseLocation = {
  target: 'mouse';
  action: 'mouseLocation';
  message: PlaycastMouseLocation;
}

export type PlaycastMessageMouseDown = {
  target: 'mouse';
  action: 'mouseDown';
  message: PlaycastMouseButton;
}

export type PlaycastMessageMouseUp = {
  target: 'mouse';
  action: 'mouseUp';
  message: PlaycastMouseButton;
}

export type PlaycastMessageMouseState = {
  target: 'mouse';
  action: 'state';
  message: PlaycastMouseState;
}
