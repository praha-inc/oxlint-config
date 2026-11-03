import { describe, expect, test } from 'vitest';

import { convertGlobals } from './index';

describe('convertGlobals', () => {
  test('should return empty object for empty input', () => {
    expect(convertGlobals({})).toEqual({});
  });

  test('should convert true to writable', () => {
    expect(convertGlobals({ foo: true })).toEqual({ foo: 'writable' });
  });

  test('should convert false to readonly', () => {
    expect(convertGlobals({ foo: false })).toEqual({ foo: 'readonly' });
  });

  test('should convert mixed values', () => {
    expect(convertGlobals({ foo: true, bar: false })).toEqual({ foo: 'writable', bar: 'readonly' });
  });
});
