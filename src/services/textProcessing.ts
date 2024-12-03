import { extractDate, extractAttendees } from '../utils/parseUtils';

interface ProcessedNotes {
  summary: string;
  actionItems: string[];
}

export async function processMeetingNotes(text: string): Promise<ProcessedNotes> {
  // Extract key information
  const lines = text.split('\n').filter(line => line.trim());
  const keyPoints: string[] = [];
  const actionItems: string[] = [];
  let currentSection = '';

  for (const line of lines) {
    const trimmedLine = line.trim();
    
    if (trimmedLine.toLowerCase().includes('key points:')) {
      currentSection = 'keyPoints';
      continue;
    } else if (trimmedLine.toLowerCase().includes('action items:')) {
      currentSection = 'actionItems';
      continue;
    }

    if (trimmedLine.startsWith('-') || trimmedLine.match(/^\d+\./)) {
      if (currentSection === 'keyPoints') {
        keyPoints.push(trimmedLine.replace(/^-|\d+\.\s*/, '').trim());
      } else if (currentSection === 'actionItems') {
        actionItems.push(trimmedLine.replace(/^-|\d+\.\s*/, '').trim());
      }
    }
  }

  // Generate summary
  const summary = generateSummary(text, keyPoints);

  return {
    summary,
    actionItems
  };
}

function generateSummary(text: string, keyPoints: string[]): string {
  const lines = text.split('\n');
  const summaryPoints: string[] = [];

  // Extract meeting metadata
  const date = extractDate(text);
  if (date) {
    summaryPoints.push(`Meeting Date: ${date}`);
  }

  const attendees = extractAttendees(text);
  if (attendees.length > 0) {
    summaryPoints.push(`Attendees: ${attendees.join(', ')}`);
  }

  // Add key discussion points
  if (keyPoints.length > 0) {
    summaryPoints.push('\nKey Discussion Points:');
    keyPoints.forEach(point => {
      summaryPoints.push(`• ${point}`);
    });
  }

  return summaryPoints.join('\n');
}