import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import { FileUpload } from './components/FileUpload';
import { TextInput } from './components/TextInput';
import { ProcessingButtons } from './components/ProcessingButtons';
import { OutputSection } from './components/OutputSection';
import { processMeetingNotes } from './services/textProcessing';

function App() {
  const [notes, setNotes] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [summary, setSummary] = useState('');
  const [actionItems, setActionItems] = useState<string[]>([]);

  const handleSummarize = async () => {
    if (!notes.trim()) return;
    
    setIsProcessing(true);
    try {
      const result = await processMeetingNotes(notes);
      setSummary(result.summary);
    } catch (error) {
      console.error('Error processing notes:', error);
      setSummary('Error processing notes. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleExtractActions = async () => {
    if (!notes.trim()) return;
    
    setIsProcessing(true);
    try {
      const result = await processMeetingNotes(notes);
      setActionItems(result.actionItems);
    } catch (error) {
      console.error('Error extracting action items:', error);
      setActionItems(['Error extracting action items. Please try again.']);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleRewrite = async () => {
    if (!notes.trim()) return;
    
    setIsProcessing(true);
    try {
      const result = await processMeetingNotes(notes);
      setSummary(result.summary);
      setActionItems(result.actionItems);
    } catch (error) {
      console.error('Error rewriting notes:', error);
      setSummary('Error rewriting notes. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCopy = () => {
    const textToCopy = `Summary:\n${summary}\n\nAction Items:\n${actionItems.join('\n')}`;
    navigator.clipboard.writeText(textToCopy);
  };

  const handleExport = () => {
    const content = `# Meeting Notes Summary\n\n${summary}\n\n## Action Items\n\n${actionItems.map(item => `- ${item}`).join('\n')}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'meeting-notes-summary.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <FileText className="h-8 w-8 text-blue-500" />
            <h1 className="text-3xl font-bold text-gray-900">
              Meeting Notes Simplifier
            </h1>
          </div>
          <p className="text-gray-600">
            Transform your meeting notes into clear, actionable summaries
          </p>
        </header>

        <main className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <TextInput value={notes} onChange={setNotes} />
            <div className="mt-4">
              <FileUpload onFileUpload={setNotes} />
            </div>
          </div>

          <ProcessingButtons
            onSummarize={handleSummarize}
            onExtractActions={handleExtractActions}
            onRewrite={handleRewrite}
            isProcessing={isProcessing}
          />

          {isProcessing && (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
            </div>
          )}

          <OutputSection
            summary={summary}
            actionItems={actionItems}
            onCopy={handleCopy}
            onExport={handleExport}
          />
        </main>
      </div>
    </div>
  );
}

export default App;