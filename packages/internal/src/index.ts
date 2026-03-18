/**
 * Convert globals from Record<string, boolean> to Record<string, 'readonly' | 'writable'>
 * @param globals - Globals object with boolean values (true = writable, false = readonly)
 * @returns Converted globals object with 'readonly' | 'writable' values
 */
export const convertGlobals = (
  globals: Record<string, boolean>,
): Record<string, 'readonly' | 'writable'> => {
  return Object.fromEntries(
    Object.entries(globals).map(([key, value]) => [
      key,
      value ? 'writable' : 'readonly',
    ]),
  ) as Record<string, 'readonly' | 'writable'>;
};
