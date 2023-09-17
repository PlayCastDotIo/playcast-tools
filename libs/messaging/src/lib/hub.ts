export type PlaycastHubEcho = {
  target: string; // must be a valid message target - could we use a type here?
  action: string; // must be a valid message action - could we use a type here?
  enabled: boolean;
}

export type PlaycastMessageHubEcho = {
  target: 'hub';
  action: 'echo';
  message: PlaycastHubEcho;
};
