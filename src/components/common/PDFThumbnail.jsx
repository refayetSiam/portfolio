import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export function PDFThumbnail({ pdfUrl, width = 300, height = 180, onClick }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div
      onClick={onClick}
      style={{
        width: '100%',
        height,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f5f5f5',
        cursor: onClick ? 'pointer' : 'default',
        position: 'relative',
      }}
    >
      {loading && !error && (
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#999',
            fontSize: 13,
          }}
        >
          Loading preview...
        </div>
      )}

      {error && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#999',
            fontSize: 13,
            textAlign: 'center',
            padding: 20,
          }}
        >
          PDF preview unavailable
        </div>
      )}

      <Document
        file={pdfUrl}
        onLoadSuccess={() => setLoading(false)}
        onLoadError={() => {
          setLoading(false);
          setError(true);
        }}
        loading=""
      >
        <Page
          pageNumber={1}
          width={width}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
    </div>
  );
}
