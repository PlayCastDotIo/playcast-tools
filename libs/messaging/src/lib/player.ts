export type PlaycastPlayerInputAccess = {
  gamepad: boolean;
  keyboard: boolean;
  mouse: boolean;
  touch: boolean;
  chat: boolean;
};

export type PlaycastPlayerMessages =
  | PlaycastMessagePlayerSetInputAccess;

export type PlaycastMessagePlayerSetInputAccess = {
  target: 'player';
  action: 'setInputAccess';
  isReply: false;
  message: {
    access: PlaycastPlayerInputAccess;
  };
};
