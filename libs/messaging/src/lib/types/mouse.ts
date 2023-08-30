import { PlaycastButton, PlaycastVector } from "./core";

export type PlaycastMouseInput = {
  position: PlaycastVector;
  delta: PlaycastVector;
  buttons: {
      back: PlaycastButton;
      forward: PlaycastButton;
      left: PlaycastButton;
      middle: PlaycastButton;
      right: PlaycastButton;
  };
  clickCount: number;
  scroll: PlaycastVector;
  cursor: {
      lockState: 'none' | 'locked' | 'confined' | 'unknown';
  };
};

// Possible message types include target, action, message typing
export type PlaycastMessageMouseState = {
  target: 'mouse';
  action: 'state';
  message: PlaycastMouseInput;
}

export type PlaycastMessageMouseLocation = {
  target: 'mouse';
  action: 'location';
  message: string;
}
