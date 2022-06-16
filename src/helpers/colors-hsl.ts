function getLightness(color: number[]) {
  const [r, g, b] = color;
  return (1 / 2) * (Math.max(r, g, b) + Math.min(r, g, b));
}

function getSaturation(color: number[]) {
  const [r, g, b] = color;
  const L = getLightness(color);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  return (L === 0 || L === 1)
    ? 0
    : (max - min) / (1 - Math.abs(2 * L - 1));
}

function getHue(color: number[]) {
  const [r, g, b] = color;

  let hue = Math.round(
    (
      Math.atan2(
        Math.sqrt(3) * (g - b),
        2 * r - g - b,
      ) *
      180
    ) / Math.PI,
  );

  while (hue < 0) {
    hue += 360;
  }

  return hue;
}

export function rgbToHsl(color: number[]) {
  const parsedRGBColors = color.map((c) => c / 255);
  const lightness = Math.round(getLightness(parsedRGBColors) * 100);
  const saturation = Math.round(getSaturation(parsedRGBColors) * 100);
  const hue = getHue(parsedRGBColors) || 0;

  return [hue, saturation, lightness];
}

export function hslToRgb(color: number[]) {
  const [h, s, l] = [color[0], color[1] / 100, color[2] / 100];
  const C = (1 - Math.abs(2 * l - 1)) * s;
  const hPrime = h / 60;
  const X = C * (1 - Math.abs((hPrime % 2) - 1));
  const m = l - C / 2;
  const withLight = (r, g, b) => [r + m, g + m, b + m].map((c) => Math.round(c * 255));

  if (hPrime <= 1) { return withLight(C, X, 0); }
  if (hPrime <= 2) { return withLight(X, C, 0); }
  if (hPrime <= 3) { return withLight(0, C, X); }
  if (hPrime <= 4) { return withLight(0, X, C); }
  if (hPrime <= 5) { return withLight(X, 0, C); }

  return withLight(C, 0, X);
}
