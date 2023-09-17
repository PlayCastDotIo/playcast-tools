import { PlaycastVector } from './core';

export type PlaycastSystemOrigin =
  | 'topLeft'
  | 'bottomLeft'
  | 'topRight'
  | 'bottomRight';

export type PlaycastSystemCoordinates = {
  origin: PlaycastSystemOrigin;
  dimensions: PlaycastVector;
};

export type PlaycastMessageSystemSetCoordinates = {
  target: 'mouse';
  action: 'coordinates';
  message: PlaycastSystemCoordinates;
};
