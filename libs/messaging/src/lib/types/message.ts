import { PlaycastNameValuePair } from './core';
import {
  PlaycastMessageMouseCoordinates,
  PlaycastMessageMouseDown,
  PlaycastMessageMouseLocation,
  PlaycastMessageMouseMode,
  PlaycastMessageMouseMove,
  PlaycastMessageMouseState,
  PlaycastMessageMouseUp,
} from './mouse';
import { PlaycastUser } from './user';

// Include all possible message sources
export type PlaycastMessageSource = 'player' | 'host' | 'playjector';

// Union of all possible message types
export type PlaycastMessageTarget =
  | PlaycastMessageMouseState
  | PlaycastMessageMouseUp
  | PlaycastMessageMouseDown
  | PlaycastMessageMouseMove
  | PlaycastMessageMouseLocation
  | PlaycastMessageMouseCoordinates
  | PlaycastMessageMouseMode;

// Message header (except target and action, which will be added with message)
export type PlaycastMessageHeader = {
  tag: string;
  source: PlaycastMessageSource;
  schemaVersion: 5;
  timestamp: number;
  user: PlaycastUser;
  isReply: boolean;
};

// Intersect with message target so that headers must have
// all properties here and all of the target type (target and action)
// plus the proper message type in the body
//
// Target and action are inter-related, so if you have target 'mouse',
// you must have an action that is valid for 'mouse'. The message in the
// body must also conform to the appropriate type for the target and action.
export type PlaycastMessage<T extends PlaycastMessageTarget> = {
  signature: string;
  header: PlaycastMessageHeader & Pick<T, 'target' | 'action'>;
  body: {
    message: T['message'];
    timings: PlaycastNameValuePair[];
    stats: PlaycastNameValuePair[];
    echo: boolean;
  };
};

export const getSignature = (message: string): string => {
  const b64 = btoa(message);
  return b64;
};

export const validateSignature = (
  message: string,
  signature: string
): boolean => {
  return signature === getSignature(message);
};
