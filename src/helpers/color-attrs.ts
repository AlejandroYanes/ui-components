import { hexToRgb, rgbToHex } from './colors-rgb';
import { hslToRgb, rgbToHsl } from './colors-hsl';

export function getBrightness(color: string): number {
  const rgb = hexToRgb(color);
  return (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
}

export function getLuminance(color: string): number {
  const rgbColors = hexToRgb(color);
  const normalizedRgb = rgbColors.map(val => {
    const normalizedValue = val / 255; // normalized

    return normalizedValue <= 0.03928
      ? normalizedValue / 12.92
      : ((normalizedValue + 0.055) / 1.055) ** 2.4;
  });

  // Truncate at 3 digits
  return Number(
    (
      0.2126 * normalizedRgb[0] +
      0.7152 * normalizedRgb[1] +
      0.0722 * normalizedRgb[2]
    ).toFixed(3)
  );
}

export function getContrastRatio(primaryColor: string, secondaryColor: string): number {
  const primaryLuminance = getLuminance(primaryColor);
  const secondaryLuminance = getLuminance(secondaryColor);

  return primaryLuminance > secondaryLuminance
    ? (primaryLuminance + 0.05) / (secondaryLuminance + 0.05)
    : (secondaryLuminance + 0.05) / (primaryLuminance + 0.05);
}

export function getShade(hexColor: string, alpha = 0.1): string {
  const rgbColor = hexToRgb(hexColor);
  const rgbString = rgbColor.join(',');

  return `rgba(${rgbString}, ${alpha})`;
}

export function changeColorLight(hexColor: string, amount: number): string {
  const [hue, sat, light] = rgbToHsl(hexToRgb(hexColor));
  const nextLight = light + (amount * 100);
  const changedColor = [hue, sat, Math.max(0, Math.min(100, nextLight))];

  return rgbToHex(hslToRgb(changedColor));
}
