import { cloneDeep } from 'lodash';
import { PlaycastGamepad, toWord } from '../lib/gamepad';

const gamepad: PlaycastGamepad = {
  deviceId: 0,
  buttons: {
    east: {
      isPressed: false,
      wasPressed: false,
      wasReleased: false,
    },
    north: {
      isPressed: false,
      wasPressed: false,
      wasReleased: false,
    },
    south: {
      isPressed: false,
      wasPressed: false,
      wasReleased: false,
    },
    west: {
      isPressed: false,
      wasPressed: false,
      wasReleased: false,
    },
    leftShoulder: {
      isPressed: false,
      wasPressed: false,
      wasReleased: false,
    },
    rightShoulder: {
      isPressed: false,
      wasPressed: false,
      wasReleased: false,
    },
    select: {
      isPressed: false,
      wasPressed: false,
      wasReleased: false,
    },
    start: {
      isPressed: false,
      wasPressed: false,
      wasReleased: false,
    },
    dpadUp: {
      isPressed: false,
      wasPressed: false,
      wasReleased: false,
    },
    dpadDown: {
      isPressed: false,
      wasPressed: false,
      wasReleased: false,
    },
    dpadLeft: {
      isPressed: false,
      wasPressed: false,
      wasReleased: false,
    },
    dpadRight: {
      isPressed: false,
      wasPressed: false,
      wasReleased: false,
    },
  },
  triggers: {
    left: {
      isPressed: false,
      wasPressed: false,
      wasReleased: false,
      value: 0,
    },
    right: {
      isPressed: false,
      wasPressed: false,
      wasReleased: false,
      value: 0,
    },
  },
  sticks: {
    left: {
      stick: {
        x: 0,
        y: 0,
      },
      button: {
        isPressed: false,
        wasPressed: false,
        wasReleased: false,
      },
    },
    right: {
      stick: {
        x: 0,
        y: 0,
      },
      button: {
        isPressed: false,
        wasPressed: false,
        wasReleased: false,
      },
    },
  },
};

// Test toWord function, which converts button states to a single number
test('toWord returns 0 when no buttons pressed', () => {
  expect(toWord(gamepad)).toBe(0);
});

// Press the "south" button, (A on Xbox controller, X on PS4 controller)
test('toWord returns 4096 when south button pressed', () => {
  const g = cloneDeep(gamepad);
  g.buttons.south.isPressed = true;
  expect(toWord(g)).toBe(4096);
});

// Press the "east" button, (B on Xbox controller, O on PS4 controller)
test('toWord returns 8192 when east button pressed', () => {
  const g = cloneDeep(gamepad);
  g.buttons.east.isPressed = true;
  expect(toWord(g)).toBe(8192);
});

// TODO - add tests for all buttons

// Button combinations
// Left shoulder and south button
test('toWord returns 4352 when left shoulder and south button pressed', () => {
  const g = cloneDeep(gamepad);
  g.buttons.leftShoulder.isPressed = true;
  g.buttons.south.isPressed = true;
  expect(toWord(g)).toBe(4352);
});

