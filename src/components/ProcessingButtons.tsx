import React from 'react';
import { FileText, ListTodo, RefreshCw } from 'lucide-react';

interface ProcessingButtonsProps {
  onSummarize: () => void;
  onExtractActions: () => void;
  onRewrite: () => void;
  isProcessing: boolean;
}

export function ProcessingButtons({
  onSummarize,
  onExtractActions,
  onRewrite,
  isProcessing
}: ProcessingButtonsProps) {
  const buttonClass = `
    flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  return (
    <div className="flex flex-wrap gap-4">
      <button
        onClick={onSummarize}
        disabled={isProcessing}
        className={`${buttonClass} bg-blue-500 text-white hover:bg-blue-600`}
      >
        <FileText size={20} />
        Summarize
      </button>
      
      <button
        onClick={onExtractActions}
        disabled={isProcessing}
        className={`${buttonClass} bg-green-500 text-white hover:bg-green-600`}
      >
        <ListTodo size={20} />
        Extract Actions
      </button>
      
      <button
        onClick={onRewrite}
        disabled={isProcessing}
        className={`${buttonClass} bg-purple-500 text-white hover:bg-purple-600`}
      >
        <RefreshCw size={20} />
        Rewrite Notes
      </button>
    </div>
  );
}