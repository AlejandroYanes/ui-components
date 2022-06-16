export function capitalizeFirstLetter(text: string): string {
  const firstLetter = text.slice(0, 1);
  const rest = text.slice(1);

  return `${firstLetter.toUpperCase()}${rest}`;
}
