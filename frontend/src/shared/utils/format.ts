export function formatDate(
  date: Date | string,
  month: 'long' | 'short' = 'long',
  locale: string = 'en-US',
) {
  // Define formatter
  const formatter = new Intl.DateTimeFormat(locale, {
    month,
    day: 'numeric',
    year: 'numeric',
  });
  // Return formatted date
  return formatter.format(new Date(date));
}
