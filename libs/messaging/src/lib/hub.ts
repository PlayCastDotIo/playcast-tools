export type PlaycastHubEcho = {
  target: string; // must be a valid message target - could we use a type here?
  action: string; // must be a valid message action - could we use a type here?
  enabled: boolean;
}

export type PlaycastHubMessages =
  | PlaycastMessageHubEcho;

export type PlaycastMessageHubEcho = {
  target: 'hub';
  action: 'echo';
  isReply: false;
  message: PlaycastHubEcho;
};
