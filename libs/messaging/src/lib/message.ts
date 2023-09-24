// eslint-disable-next-line @nx/enforce-module-boundaries
import { createId } from '@paralleldrive/cuid2';
import { PlaycastNameValuePair } from './core';
import {
  PlaycastMessageGamepadSetState,
  PlaycastMessageGamepadSetXInput,
} from './gamepad';
import {
  PlaycastMessageKeyboardDown,
  PlaycastMessageKeyboardSetState,
  PlaycastMessageKeyboardUp,
} from './keyboard';
import {
  PlaycastMessageMouseDown,
  PlaycastMessageMouseSetLocation,
  PlaycastMessageMouseSetMode,
  PlaycastMessageMouseMove,
  PlaycastMessageMouseSetState,
  PlaycastMessageMouseUp,
  PlaycastMessageMouseWheel,
} from './mouse';
import { PlaycastMessageStreamSetDimensions } from './stream';
import { PlaycastUser } from './user';
import { PlaycastMessageSystemSetPlayerCoordinates } from './system';
import { PlaycastMessageHubEcho } from './hub';

// Include all possible message sources
export type PlaycastMessageSource = 'player' | 'host' | 'playjector';

// Union of all possible message types
export type PlaycastMessageTarget =
  | PlaycastMessageSystemSetPlayerCoordinates
  | PlaycastMessageMouseSetState
  | PlaycastMessageMouseUp
  | PlaycastMessageMouseDown
  | PlaycastMessageMouseMove
  | PlaycastMessageMouseSetLocation
  | PlaycastMessageMouseWheel
  | PlaycastMessageMouseSetMode
  | PlaycastMessageKeyboardSetState
  | PlaycastMessageKeyboardDown
  | PlaycastMessageKeyboardUp
  | PlaycastMessageGamepadSetState
  | PlaycastMessageGamepadSetXInput
  | PlaycastMessageStreamSetDimensions
  | PlaycastMessageHubEcho;

// Message header (except target, action, isReply, which will be added with message)
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
export type PlaycastMessage<T extends PlaycastMessageTarget> = {
  signature: string;
  header: PlaycastMessageHeader & Pick<T, 'target' | 'action' | 'isReply'>;
  body: {
    message: T['message'];
    timings: PlaycastNameValuePair[];
    stats: PlaycastNameValuePair[];
    echo: boolean;
  };
};

export const generateHeader = (
  source: PlaycastMessageSource,
  userId: string,
): PlaycastMessageHeader => {
  const stamp = Date.now();

  const header: PlaycastMessageHeader = {
    tag: stamp.toString().concat('.', createId()),
    source: source,
    schemaVersion: 5,
    timestamp: stamp,
    user: {
      id: userId,
      auth: 'anonymous',
    },
  };

  return header;
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
