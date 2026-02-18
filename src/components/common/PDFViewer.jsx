import { useState, useEffect, useRef, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { useScrollLock } from '../../hooks';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export function PDFViewer({ isOpen, pdfUrl, title, color, onClose }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const [loading, setLoading] = useState(true);
  const drawerRef = useRef(null);

  useScrollLock(isOpen);

  // Reset state when PDF changes
  useEffect(() => {
    if (pdfUrl) {
      setPageNumber(1);
      setScale(1);
      setLoading(true);
    }
  }, [pdfUrl]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Handle arrow key navigation
  useEffect(() => {
    const handleArrows = (e) => {
      if (!isOpen || !numPages) return;
      if (e.key === 'ArrowLeft' && pageNumber > 1) {
        setPageNumber(p => p - 1);
      } else if (e.key === 'ArrowRight' && pageNumber < numPages) {
        setPageNumber(p => p + 1);
      }
    };
    document.addEventListener('keydown', handleArrows);
    return () => document.removeEventListener('keydown', handleArrows);
  }, [isOpen, pageNumber, numPages]);

  // Focus management
  useEffect(() => {
    if (isOpen && drawerRef.current) {
      drawerRef.current.focus();
    }
  }, [isOpen]);

  const onDocumentLoadSuccess = useCallback(({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
  }, []);

  const goToPrevPage = () => setPageNumber(p => Math.max(1, p - 1));
  const goToNextPage = () => setPageNumber(p => Math.min(numPages || 1, p + 1));
  const zoomIn = () => setScale(s => Math.min(2, s + 0.25));
  const zoomOut = () => setScale(s => Math.max(0.5, s - 0.25));

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.4s ease-out',
          zIndex: 2001,
        }}
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="pdf-viewer-title"
        tabIndex={-1}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          maxWidth: 900,
          background: '#1a1a2e',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)',
          zIndex: 2002,
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-16px 0 64px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 24px',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            background: color || '#333',
          }}
        >
          <h2
            id="pdf-viewer-title"
            style={{
              fontFamily: "'Outfit'",
              fontSize: 18,
              fontWeight: 700,
              color: '#fff',
              margin: 0,
            }}
          >
            {title || 'Document'}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close viewer"
            style={{
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              borderRadius: 8,
              padding: 8,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X size={20} color="#fff" />
          </button>
        </div>

        {/* PDF Content */}
        <div
          style={{
            flex: 1,
            overflow: 'auto',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: 24,
            background: '#2a2a3e',
          }}
        >
          {loading && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255,255,255,0.6)',
                fontSize: 14,
                padding: 40,
              }}
            >
              Loading document...
            </div>
          )}
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            loading=""
          >
            <Page
              pageNumber={pageNumber}
              scale={scale}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              style={{
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                borderRadius: 4,
              }}
            />
          </Document>
        </div>

        {/* Controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            padding: '16px 24px',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            background: '#1a1a2e',
          }}
        >
          {/* Page navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button
              onClick={goToPrevPage}
              disabled={pageNumber <= 1}
              style={{
                background: pageNumber <= 1 ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.2)',
                border: 'none',
                borderRadius: 8,
                padding: '8px 12px',
                cursor: pageNumber <= 1 ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                opacity: pageNumber <= 1 ? 0.5 : 1,
              }}
            >
              <ChevronLeft size={18} color="#fff" />
            </button>
            <span
              style={{
                fontFamily: "'DM Sans'",
                fontSize: 14,
                color: '#fff',
                minWidth: 80,
                textAlign: 'center',
              }}
            >
              {pageNumber} / {numPages || '...'}
            </span>
            <button
              onClick={goToNextPage}
              disabled={!numPages || pageNumber >= numPages}
              style={{
                background: !numPages || pageNumber >= numPages ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.2)',
                border: 'none',
                borderRadius: 8,
                padding: '8px 12px',
                cursor: !numPages || pageNumber >= numPages ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                opacity: !numPages || pageNumber >= numPages ? 0.5 : 1,
              }}
            >
              <ChevronRight size={18} color="#fff" />
            </button>
          </div>

          {/* Zoom controls */}
          <div
            style={{
              width: 1,
              height: 24,
              background: 'rgba(255,255,255,0.2)',
            }}
          />
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button
              onClick={zoomOut}
              disabled={scale <= 0.5}
              style={{
                background: scale <= 0.5 ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.2)',
                border: 'none',
                borderRadius: 8,
                padding: '8px 12px',
                cursor: scale <= 0.5 ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                opacity: scale <= 0.5 ? 0.5 : 1,
              }}
            >
              <ZoomOut size={18} color="#fff" />
            </button>
            <span
              style={{
                fontFamily: "'DM Sans'",
                fontSize: 14,
                color: '#fff',
                minWidth: 50,
                textAlign: 'center',
              }}
            >
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={zoomIn}
              disabled={scale >= 2}
              style={{
                background: scale >= 2 ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.2)',
                border: 'none',
                borderRadius: 8,
                padding: '8px 12px',
                cursor: scale >= 2 ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                opacity: scale >= 2 ? 0.5 : 1,
              }}
            >
              <ZoomIn size={18} color="#fff" />
            </button>
          </div>

          {/* Keyboard hint */}
          <div
            style={{
              marginLeft: 16,
              fontSize: 11,
              color: 'rgba(255,255,255,0.4)',
              fontFamily: "'DM Sans'",
            }}
          >
            Use arrow keys to navigate
          </div>
        </div>
      </aside>
    </>
  );
}
