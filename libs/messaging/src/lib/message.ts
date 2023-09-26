// eslint-disable-next-line @nx/enforce-module-boundaries
import { createId } from '@paralleldrive/cuid2';
import { PlaycastNameValuePair } from './core';
import { PlaycastUser } from './user';
import { PlaycastGamepadMessages } from './gamepad';
import { PlaycastHubMessages } from './hub';
import { PlaycastKeyboardMessages } from './keyboard';
import { PlaycastMouseMessages } from './mouse';
import { PlaycastStreamMessages } from './stream';
import { PlaycastSystemMessages } from './system';

// Include all possible message sources
export type PlaycastMessageSource = 'player' | 'host' | 'playjector';

// Union of all possible message types
export type PlaycastMessageTarget =
  | PlaycastGamepadMessages
  | PlaycastHubMessages
  | PlaycastKeyboardMessages
  | PlaycastMouseMessages
  | PlaycastStreamMessages
  | PlaycastSystemMessages;

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
  userId: string
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
