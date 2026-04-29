export function formatDate(date: Date | string, locale: string = 'en-US') {
  // Define formatter
  const formatter = new Intl.DateTimeFormat(locale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  // Return formatted date
  return formatter.format(new Date(date));
}
