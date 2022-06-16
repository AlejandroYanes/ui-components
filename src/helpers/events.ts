export function getEventValue(event) {
  if (event) {
    const keys = ['checked', 'formattedValue', 'value'];
    const valueKey = keys.find((key) => event[key] !== undefined);

    if (valueKey) {
      return event[valueKey];
    }

    if (event.target) {
      return event.target.value;
    }

    return event;
  }
  
  return undefined;
}
