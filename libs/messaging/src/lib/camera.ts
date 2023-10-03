export type PlaycastCameraMessages = PlaycastMessageCameraSetResolution;

export type PlaycastMessageCameraSetResolution = {
  target: 'camera';
  action: 'setResolution';
  isReply: false;
  message: {
    playerHeight: number;
    playerWidth: number;
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
