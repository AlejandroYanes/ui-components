/* eslint-disable no-mixed-operators */
export default function getMarkerPositions(width: number) {
  const radius = (width / 2) - 22;
  const positions = [];
  for (let min = 0; min < 60; min += 5) {
    const label = min < 10 ? `0${min}` : min;
    const x = radius * Math.sin(Math.PI * 2 * (min / 60));
    const y = radius * Math.cos(Math.PI * 2 * (min / 60));
    const angle = (min / 5) * 30;

    positions.push({
      left: Math.round(x + radius + 4),
      top: Math.round(-y + radius + 4),
      angle,
      label,
    });
  }

  return positions;
}
