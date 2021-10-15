export function hexToRgb(color: string | number[]): number[] {
  if (typeof color === 'string') {
    const aRgbHex = color.slice(1).match(/.{1,2}/g);
    
    return [
      parseInt(aRgbHex[0], 16),
      parseInt(aRgbHex[1], 16),
      parseInt(aRgbHex[2], 16),
    ];
  }
  
  return color;
}

function pad2(value) {
  return value.length === 1 ? `0${value}` : `${value}`;
}

export function rgbToHex(color: number[]) {

  const hex = [
    pad2(Math.round(color[0]).toString(16)),
    pad2(Math.round(color[1]).toString(16)),
    pad2(Math.round(color[2]).toString(16)),
  ];

  return `#${hex.join('')}`;
}

