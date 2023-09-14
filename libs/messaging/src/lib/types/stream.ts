import { PlaycastVector } from "./core";

export type PlaycastStreamDimensions = {
  name: string; // 'custom' or known resolutions like '720p' or '1080p'
  size: PlaycastVector; // width and height (as x and y)
  aspectRatio: string; // Use CSS aspect ratio syntax, such as '16 / 9' or '1'
}

export type PlaycastMessageStreamDimensions = {
  target: 'stream';
  action: 'dimensions';
  message: PlaycastStreamDimensions;
};
