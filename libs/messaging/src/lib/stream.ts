import { PlaycastVector } from "./core";

export type PlaycastStreamDimensions = {
  name: string; // 'custom' or known resolutions like '720p' or '1080p'
  size: PlaycastVector; // width and height (as x and y)
  aspectRatio: string; // Use CSS aspect ratio syntax, such as '16 / 9' or '1'
}

export type PlaycastStreamPrefabs = {
  [key: string]: PlaycastStreamDimensions;
}

export const streamPrefabs: PlaycastStreamPrefabs = {
  '720p': {
      name: '720p',
      size: { x: 1280, y: 720 },
      aspectRatio: '16 / 9',
  },
  '1080p': {
      name: '1080p',
      size: { x: 1920, y: 1080 },
      aspectRatio: '16 / 9',
  },
  '1440p': {
      name: '1440p',
      size: { x: 2560, y: 1440 },
      aspectRatio: '16 / 9',
  },
  '4k': {
      name: '4k',
      size: { x: 3840, y: 2160 },
      aspectRatio: '16 / 9',
  },
  '8k': {
      name: '8k',
      size: { x: 7680, y: 4320 },
      aspectRatio: '16 / 9',
  },
  standard: {
      name: 'standard',
      size: { x: 640, y: 480 },
      aspectRatio: '4 / 3',
  },
};

export type PlaycastStreamMessages =
  | PlaycastMessageStreamSetDimensions;

export type PlaycastMessageStreamSetDimensions = {
  target: 'stream';
  action: 'setDimensions';
  isReply: false;
  message: PlaycastStreamDimensions;
};
