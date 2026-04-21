import { describe, expect, it } from 'vitest';

import { convertGlobals } from './index';

describe('convertGlobals', () => {
  it('should return empty object for empty input', () => {
    expect(convertGlobals({})).toEqual({});
  });

  it('should convert true to writable', () => {
    expect(convertGlobals({ foo: true })).toEqual({ foo: 'writable' });
  });

  it('should convert false to readonly', () => {
    expect(convertGlobals({ foo: false })).toEqual({ foo: 'readonly' });
  });

  it('should convert mixed values', () => {
    expect(convertGlobals({ foo: true, bar: false })).toEqual({ foo: 'writable', bar: 'readonly' });
  });
});
