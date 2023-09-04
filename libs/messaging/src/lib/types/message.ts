import { PlaycastNameValuePair } from './core';
import {
  PlaycastMessageMouseDown,
  PlaycastMessageMouseLocation,
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
  | PlaycastMessageMouseLocation;

// Message header (except target and action, which will be added with message)
export type PlaycastMessageHeader = {
  tag: string;
  source: PlaycastMessageSource;
  schemaVersion: 5;
  timestamp: number;
  user: PlaycastUser;
};

// Intersect with message target so that headers must have
// all properties here and all of the target type (target and action)
// plus the proper message type in the body
//
// Target and action are inter-related, so if you have target 'mouse',
// you must have an action that is valid for 'mouse'. The message in the
// body must also conform to the appropriate type for the target and action.
export type PlaycastMessage<
  T extends PlaycastMessageTarget,
  R extends PlaycastMessageTarget
> = {
  signature: string;
  header: PlaycastMessageHeader & Pick<T, 'target' | 'action'>;
  body: {
    message: T['message'];
    reply: PlaycastMessage<R, R> | Record<string, never>;
    timings: PlaycastNameValuePair[];
    stats: PlaycastNameValuePair[];
  };
};

export const getSignature = (message: string): string => {
  const b64 = btoa(message);;
  return b64;
};

export const validateSignature = (message: string, signature: string): boolean => {
  return signature === getSignature(message);
};
