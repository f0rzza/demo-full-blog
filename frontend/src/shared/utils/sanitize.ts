import dompurify from 'dompurify';

export function sanitizeHTML(htmlContent: string | Node) {
  return dompurify.sanitize(htmlContent);
}
