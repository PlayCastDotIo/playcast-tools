import { PlaycastVector } from './core';

export type PlaycastSystemOrigin =
  | 'topLeft'
  | 'bottomLeft'
  | 'topRight'
  | 'bottomRight';

export type PlaycastSystemPlayerCoordinates = {
  origin: PlaycastSystemOrigin;
  dimensions: PlaycastVector;
};

export type PlaycastSystemSchema = {
  key: string;
  target: string;
  action: string;
  message: object;
  reply: object;
  isImplemented: boolean;
};

export type PlaycastSystemDeviceChange = {
  type: 'gamepad' | 'keyboard' | 'mouse';
  change: 'added' | 'removed' | 'connected' | 'disconnected' | 'reconnected' | 'enabled' | 'disabled' | 'configurationChanged' | 'softReset' | 'hardReset';
  deviceId: number;
}

export type PlaycastSystemMessages =
  | PlaycastMessageSystemGetSchemas
  | PlaycastMessageSystemGetSchemasReply
  | PlaycastMessageSystemDie
  | PlaycastMessageSystemSetDeviceChange;

export type PlaycastMessageSystemGetSchemas = {
  target: 'system';
  action: 'getSchemas';
  isReply: false;
  message: Record<string, never>;
};

export type PlaycastMessageSystemGetSchemasReply = {
  target: 'system';
  action: 'getSchemas';
  isReply: true;
  message: {
    schemas: PlaycastSystemSchema[];
  };
};

export type PlaycastMessageSystemDie = {
  target: 'system';
  action: 'die';
  isReply: false;
  message: Record<string, never>;
};

export type PlaycastMessageSystemSetDeviceChange = {
  target: 'system';
  action: 'setDeviceChange';
  isReply: false;
  message: PlaycastSystemDeviceChange;
};
