export type PlaycastPlayerInputAccess = {
  gamepad: boolean;
  keyboard: boolean;
  mouse: boolean;
  touch: boolean;
  chat: boolean;
};

export type PlaycastPlayerMessages =
  | PlaycastMessagePlayerSetInputAccess
  | PlaycastMessagePlayerSetConnected
  | PlaycastMessagePlayerSetDisconnected;

export type PlaycastMessagePlayerSetInputAccess = {
  target: 'player';
  action: 'setInputAccess';
  isReply: false;
  message: {
    access: PlaycastPlayerInputAccess;
  };
};

export type PlaycastMessagePlayerSetConnected = {
  target: 'player';
  action: 'setConnected';
  isReply: false;
  message: {
    playerId: string;
  };
};

export type PlaycastMessagePlayerSetDisconnected = {
  target: 'player';
  action: 'setDisconnected';
  isReply: false;
  message: {
    playerId: string;
  };
};
