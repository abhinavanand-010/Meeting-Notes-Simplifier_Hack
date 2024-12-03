# Meeting Notes Simplifier

A React-based web application that helps transform meeting notes into clear, actionable summaries.

![Meeting Notes Simplifier](https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400)

## Features

- 📝 **Text Input**: Paste meeting notes directly into the text area
- 📁 **File Upload**: Drag & drop or select files (.txt, .docx, .pdf)
- 🔄 **Processing Options**:
  - Summarize notes into key points
  - Extract action items
  - Rewrite and format notes
- 💾 **Export Options**:
  - Copy to clipboard
  - Export as text file

## Project Structure

```
src/
├── components/           # React components
│   ├── FileUpload.tsx   # File upload handling
│   ├── TextInput.tsx    # Text input area
│   ├── ProcessingButtons.tsx  # Processing action buttons
│   └── OutputSection.tsx      # Results display
├── services/
│   └── textProcessing.ts      # Text processing logic
├── utils/
│   └── parseUtils.ts          # Text parsing utilities
└── App.tsx              # Main application component
```

## Components

### App.tsx
Main application component that orchestrates:
- State management for notes and processing
- Handler functions for text processing
- Layout and component composition

### FileUpload.tsx
Handles file upload functionality:
- Drag & drop interface
- File type validation
- File content reading

### TextInput.tsx
Provides text input functionality:
- Textarea for direct note input
- Change handling
- Styling and accessibility

### ProcessingButtons.tsx
Processing action buttons:
- Summarize
- Extract Actions
- Rewrite Notes
- Loading state handling

### OutputSection.tsx
Displays processed results:
- Summary section
- Action items list
- Export options

## Services

### textProcessing.ts
Core text processing logic:
- Note parsing and analysis
- Summary generation
- Action item extraction

## Utils

### parseUtils.ts
Text parsing utilities:
- Date extraction
- Attendee list parsing
- Text formatting helpers

## Technical Details

### Dependencies
- React 18.3.1
- react-dropzone 14.2.3
- lucide-react (for icons)
- Tailwind CSS (for styling)

### Key Features Implementation

#### Text Processing
```typescript
interface ProcessedNotes {
  summary: string;
  actionItems: string[];
}

// Process meeting notes into structured format
async function processMeetingNotes(text: string): Promise<ProcessedNotes>
```

#### File Handling
```typescript
// Supported file types
const acceptedTypes = {
  'text/plain': ['.txt'],
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
  'application/pdf': ['.pdf']
};
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. **Input Notes**:
   - Paste text directly into the input area, or
   - Drag and drop a supported file

2. **Process Notes**:
   - Click "Summarize" to generate a concise summary
   - Click "Extract Actions" to list action items
   - Click "Rewrite Notes" to process both summary and actions

3. **Export Results**:
   - Use "Copy Text" to copy to clipboard
   - Use "Export" to download as a text file

## Best Practices

- **Input Validation**: All text input is sanitized and validated
- **Error Handling**: Comprehensive error handling for processing and file operations
- **Responsive Design**: Fully responsive layout using Tailwind CSS
- **Accessibility**: ARIA labels and keyboard navigation support
- **Type Safety**: Full TypeScript implementation

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request