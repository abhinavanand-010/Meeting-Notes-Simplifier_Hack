export function extractDate(text: string): string | null {
  const dateRegex = /Date:\s*([^\n]+)/i;
  const match = text.match(dateRegex);
  return match ? match[1].trim() : null;
}

export function extractAttendees(text: string): string[] {
  const attendeesRegex = /Attendees:\s*([^\n]+)/i;
  const match = text.match(attendeesRegex);
  if (!match) return [];
  
  return match[1]
    .split(',')
    .map(name => name.trim())
    .filter(name => name.length > 0);
}