import { useEffect, useRef } from 'react';
import { X, Users, Target, Layers, BarChart3, CheckCircle2, Play, ArrowRight } from 'lucide-react';
import { useScrollLock } from '../../../hooks';

export function CaseStudyModal({ isOpen, caseStudy, onClose }) {
  const modalRef = useRef(null);

  useScrollLock(isOpen);

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

  // Focus management
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!caseStudy) return null;

  const cs = caseStudy;

  const processIcons = {
    research: Target,
    interviews: Users,
    prioritize: Layers,
    design: BarChart3,
    outcome: CheckCircle2,
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease-out',
          zIndex: 2001,
        }}
      />

      {/* Modal Card - Much wider */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: isOpen
            ? 'translate(-50%, -50%) scale(1)'
            : 'translate(-50%, -50%) scale(0.95)',
          width: '95%',
          maxWidth: 1200,
          maxHeight: '92vh',
          background: '#fafafa',
          borderRadius: 24,
          boxShadow: '0 40px 80px rgba(0,0,0,0.25)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          zIndex: 2002,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Close button - floating */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            background: 'rgba(0,0,0,0.5)',
            border: 'none',
            borderRadius: 12,
            padding: 10,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(0,0,0,0.7)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(0,0,0,0.5)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <X size={20} color="#fff" />
        </button>

        {/* Scrollable content */}
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {/* Hero Section with Video */}
          <div
            style={{
              background: `linear-gradient(135deg, ${cs.color}, ${cs.color}CC)`,
              padding: '48px 48px 32px',
              position: 'relative',
            }}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: cs.loomUrl ? '1fr 1.2fr' : '1fr',
              gap: 40,
              alignItems: 'center',
            }}>
              {/* Left: Title & Meta */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <span
                    style={{
                      background: 'rgba(255,255,255,0.2)',
                      color: '#fff',
                      fontSize: 11,
                      fontWeight: 700,
                      padding: '6px 14px',
                      borderRadius: 100,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {cs.company}
                  </span>
                  {cs.personas && cs.personas.map((persona, i) => (
                    <span
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                        background: 'rgba(255,255,255,0.15)',
                        color: 'rgba(255,255,255,0.9)',
                        fontSize: 11,
                        fontWeight: 600,
                        padding: '6px 12px',
                        borderRadius: 100,
                      }}
                    >
                      <Users size={12} />
                      {persona}
                    </span>
                  ))}
                </div>

                <h2
                  style={{
                    fontFamily: "'Outfit'",
                    fontSize: 'clamp(28px, 4vw, 42px)',
                    fontWeight: 800,
                    color: '#fff',
                    margin: '0 0 16px',
                    lineHeight: 1.15,
                  }}
                >
                  {cs.title}
                </h2>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {cs.tags?.map((tag, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: 'rgba(255,255,255,0.95)',
                        background: 'rgba(255,255,255,0.2)',
                        padding: '5px 14px',
                        borderRadius: 100,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Video Preview */}
              {cs.loomUrl && (
                <div
                  style={{
                    position: 'relative',
                    paddingBottom: '56.25%',
                    height: 0,
                    borderRadius: 16,
                    overflow: 'hidden',
                    boxShadow: '0 16px 48px rgba(0,0,0,0.3)',
                  }}
                >
                  <iframe
                    src={cs.loomUrl.replace('/share/', '/embed/')}
                    frameBorder="0"
                    allowFullScreen
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    }}
                    title="Demo walkthrough video"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Metrics Bar */}
          {cs.metrics && (
            <div
              style={{
                background: '#fff',
                borderBottom: '1px solid #eee',
                padding: '24px 48px',
                display: 'flex',
                justifyContent: 'center',
                gap: 48,
              }}
            >
              {cs.metrics.map((m, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontFamily: "'Outfit'",
                      fontSize: 40,
                      fontWeight: 800,
                      color: cs.color,
                      lineHeight: 1,
                    }}
                  >
                    {m.value}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: '#888',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginTop: 6,
                      fontWeight: 600,
                    }}
                  >
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Main Content - Two Column Layout */}
          <div style={{ padding: '40px 48px' }}>
            {/* Process Timeline - Horizontal Visual */}
            {cs.process && (
              <div style={{ marginBottom: 48 }}>
                <h3
                  style={{
                    fontFamily: "'Outfit'",
                    fontSize: 20,
                    fontWeight: 700,
                    color: '#1a1a2e',
                    margin: '0 0 24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                  }}
                >
                  <div
                    style={{
                      width: 4,
                      height: 24,
                      background: cs.color,
                      borderRadius: 2,
                    }}
                  />
                  Design Process
                </h3>

                {/* Visual Process Steps */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${cs.process.length}, 1fr)`,
                    gap: 0,
                    position: 'relative',
                  }}
                >
                  {/* Connecting line */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 28,
                      left: 40,
                      right: 40,
                      height: 3,
                      background: `linear-gradient(90deg, ${cs.color}40, ${cs.color})`,
                      borderRadius: 2,
                      zIndex: 0,
                    }}
                  />

                  {cs.process.map((step, i) => {
                    const Icon = processIcons[step.type] || Target;
                    return (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          position: 'relative',
                          zIndex: 1,
                        }}
                      >
                        {/* Step number & icon */}
                        <div
                          style={{
                            width: 56,
                            height: 56,
                            borderRadius: 16,
                            background: '#fff',
                            border: `3px solid ${cs.color}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 16,
                            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                          }}
                        >
                          <Icon size={24} color={cs.color} />
                        </div>

                        {/* Step title */}
                        <h4
                          style={{
                            fontFamily: "'Outfit'",
                            fontSize: 14,
                            fontWeight: 700,
                            color: '#1a1a2e',
                            margin: '0 0 8px',
                            textAlign: 'center',
                          }}
                        >
                          {step.title}
                        </h4>

                        {/* Step description */}
                        <p
                          style={{
                            fontFamily: "'DM Sans'",
                            fontSize: 13,
                            color: '#666',
                            lineHeight: 1.5,
                            margin: 0,
                            textAlign: 'center',
                            padding: '0 8px',
                          }}
                        >
                          {step.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Two Column: Insights & Context */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 32,
              }}
            >
              {/* Key Insights */}
              {cs.insights && (
                <div>
                  <h3
                    style={{
                      fontFamily: "'Outfit'",
                      fontSize: 20,
                      fontWeight: 700,
                      color: '#1a1a2e',
                      margin: '0 0 20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                    }}
                  >
                    <div
                      style={{
                        width: 4,
                        height: 24,
                        background: '#22C55E',
                        borderRadius: 2,
                      }}
                    />
                    Key Insights
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {cs.insights.map((insight, i) => (
                      <div
                        key={i}
                        style={{
                          background: '#fff',
                          borderRadius: 16,
                          padding: '16px 20px',
                          borderLeft: `4px solid ${cs.color}`,
                          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 12,
                        }}
                      >
                        <CheckCircle2 size={18} color="#22C55E" style={{ flexShrink: 0, marginTop: 2 }} />
                        <p
                          style={{
                            fontFamily: "'DM Sans'",
                            fontSize: 14,
                            color: '#444',
                            lineHeight: 1.5,
                            margin: 0,
                          }}
                        >
                          {insight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Problem Context Card */}
              {cs.problem && (
                <div>
                  <h3
                    style={{
                      fontFamily: "'Outfit'",
                      fontSize: 20,
                      fontWeight: 700,
                      color: '#1a1a2e',
                      margin: '0 0 20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                    }}
                  >
                    <div
                      style={{
                        width: 4,
                        height: 24,
                        background: '#FF6B35',
                        borderRadius: 2,
                      }}
                    />
                    The Challenge
                  </h3>

                  <div
                    style={{
                      background: '#fff',
                      borderRadius: 16,
                      padding: 24,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'DM Sans'",
                        fontSize: 15,
                        color: '#555',
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {cs.problem}
                    </p>

                    {cs.outcome && (
                      <div
                        style={{
                          marginTop: 20,
                          paddingTop: 20,
                          borderTop: '1px solid #eee',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            marginBottom: 8,
                          }}
                        >
                          <ArrowRight size={16} color="#22C55E" />
                          <span
                            style={{
                              fontFamily: "'Outfit'",
                              fontSize: 13,
                              fontWeight: 700,
                              color: '#22C55E',
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em',
                            }}
                          >
                            Outcome
                          </span>
                        </div>
                        <p
                          style={{
                            fontFamily: "'DM Sans'",
                            fontSize: 14,
                            color: '#444',
                            lineHeight: 1.6,
                            margin: 0,
                          }}
                        >
                          {cs.outcome}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
