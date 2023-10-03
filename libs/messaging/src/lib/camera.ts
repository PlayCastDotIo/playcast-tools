export type PlaycastCameraMessages =
  | PlaycastMessageCameraSetResolution
  | PlaycastMessageCameraSetResolutionReply;

export type PlaycastMessageCameraSetResolution = {
  target: 'camera';
  action: 'setResolution';
  isReply: false;
  message: {
    cameraId: number;
    fps: number;
    playerHeight: number;
    playerWidth: number;
    name: string;
    aspectRatio: number;
  };
};

export type PlaycastMessageCameraSetResolutionReply = {
  target: 'camera';
  action: 'setResolution';
  isReply: true;
  message: {
    cameraId: number;
    fps: number;
    playerHeight: number;
    playerWidth: number;
    name: string;
    aspectRatio: number;
  };
};
