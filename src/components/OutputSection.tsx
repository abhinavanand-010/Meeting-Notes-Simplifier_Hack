import React from 'react';
import { Copy, Download } from 'lucide-react';

interface OutputSectionProps {
  summary: string;
  actionItems: string[];
  onCopy: () => void;
  onExport: () => void;
}

export function OutputSection({
  summary,
  actionItems,
  onCopy,
  onExport
}: OutputSectionProps) {
  return (
    <div className="space-y-6">
      {summary && (
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Summary</h3>
          <p className="text-gray-700 whitespace-pre-wrap">{summary}</p>
        </div>
      )}
      
      {actionItems.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Action Items</h3>
          <ul className="list-disc list-inside space-y-2">
            {actionItems.map((item, index) => (
              <li key={index} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </div>
      )}
      
      {(summary || actionItems.length > 0) && (
        <div className="flex gap-4">
          <button
            onClick={onCopy}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
          >
            <Copy size={20} />
            Copy Text
          </button>
          <button
            onClick={onExport}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
          >
            <Download size={20} />
            Export as .docx
          </button>
        </div>
      )}
    </div>
  );
}