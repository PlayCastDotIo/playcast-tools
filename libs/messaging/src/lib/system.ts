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

export type PlaycastMessageSystemSetPlayerCoordinates = {
  target: 'system';
  action: 'setPlayerCoordinates';
  isReply: false;
  message: PlaycastSystemPlayerCoordinates;
};
