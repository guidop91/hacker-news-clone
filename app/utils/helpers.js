export function formatDate(timestamp) {
  const parsedDate = new Date(timestamp * 1000);
  return {
    date: parsedDate.toDateString(),
    time: parsedDate.toTimeString()
  }
}

export function pluralize(qty) {
  return qty === 1 ? '' : 's';
}
