import LZString from 'lz-string';

export function decompressProfile(input: string): string {
  if (input && input[0] === '╬') {
    return LZString.decompressFromUTF16(input.substr(1));
  }
  return input;
}

type MinimalWardrobe = [
  /* Outfit */
  [
    /* Name, Group, Color, Property */
    [string, string, string, string]
  ]
];

export function decompressWardrobe(input: string): MinimalWardrobe {
  return JSON.parse(LZString.decompressFromUTF16(input));
}
