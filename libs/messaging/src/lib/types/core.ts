export type PlaycastVector = {
  x: number;
  y: number;
};

export type PlaycastButton = {
  isPressed: boolean;
  wasPressed: boolean;
  wasReleased: boolean;
};

export type PlaycastNameValuePair = {
  name: string;
  value: string | number | boolean;
};
