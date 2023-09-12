import { PlaycastButton } from "./core";

// We could make explicit keys
export type PlaycastKey = PlaycastButton & {
  keyCode: string;
  scanCode: number;
  displayName: string;
}

export type PlaycastKeyboardInputFromWebGL = {
  keys: PlaycastKey[];
};
