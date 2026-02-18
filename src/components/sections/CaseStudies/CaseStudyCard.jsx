import { useState } from 'react';
import { Reveal } from '../../common';

export function CaseStudyCard({ caseStudy, index, onOpenModal }) {
  const [expanded, setExpanded] = useState(false);

  // If case study has detailed process, open modal; otherwise expand inline
  const hasDetailedView = caseStudy.process || caseStudy.loomUrl;

  const handleClick = () => {
    if (hasDetailedView && onOpenModal) {
      onOpenModal();
    } else {
      setExpanded(!expanded);
    }
  };

  return (
    <Reveal delay={index * 0.1}>
      <div
        onClick={handleClick}
        style={{
          background: '#fff',
          borderRadius: 24,
          overflow: 'hidden',
          cursor: 'pointer',
          border: '2px solid #f0f0f0',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = caseStudy.color;
          e.currentTarget.style.boxShadow = `0 16px 48px ${caseStudy.color}15`;
          e.currentTarget.style.transform = 'translateY(-4px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#f0f0f0';
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        {/* Header */}
        <div
          style={{
            background: `linear-gradient(135deg, ${caseStudy.color}10, ${caseStudy.color}05)`,
            padding: '24px 28px',
            borderBottom: '1px solid #f0f0f0',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
            <span
              style={{
                background: caseStudy.accent,
                color: caseStudy.color,
                fontSize: 11,
                fontWeight: 700,
                padding: '4px 12px',
                borderRadius: 100,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              {caseStudy.company}
            </span>
          </div>
          <h3
            style={{
              fontFamily: "'Outfit'",
              fontSize: 24,
              fontWeight: 800,
              color: '#1a1a2e',
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {caseStudy.title}
          </h3>
        </div>

        {/* Content */}
        <div style={{ padding: '24px 28px' }}>
          {/* Problem */}
          <div style={{ marginBottom: 20 }}>
            <h4
              style={{
                fontFamily: "'Outfit'",
                fontSize: 11,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#FF6B35',
                margin: '0 0 8px',
              }}
            >
              Problem
            </h4>
            <p
              style={{
                fontFamily: "'DM Sans'",
                fontSize: 14,
                color: '#666',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {caseStudy.problem}
            </p>
          </div>

          {/* Expandable content */}
          <div
            style={{
              maxHeight: expanded ? 600 : 0,
              overflow: 'hidden',
              transition: 'max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Approach */}
            <div style={{ marginBottom: 20 }}>
              <h4
                style={{
                  fontFamily: "'Outfit'",
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#8B5CF6',
                  margin: '0 0 8px',
                }}
              >
                Approach
              </h4>
              <p
                style={{
                  fontFamily: "'DM Sans'",
                  fontSize: 14,
                  color: '#666',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {caseStudy.approach}
              </p>
            </div>

            {/* Outcome */}
            <div style={{ marginBottom: 20 }}>
              <h4
                style={{
                  fontFamily: "'Outfit'",
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#22C55E',
                  margin: '0 0 8px',
                }}
              >
                Outcome
              </h4>
              <p
                style={{
                  fontFamily: "'DM Sans'",
                  fontSize: 14,
                  color: '#666',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {caseStudy.outcome}
              </p>
            </div>

            {/* Metrics */}
            {caseStudy.metrics && (
              <div
                style={{
                  display: 'flex',
                  gap: 16,
                  padding: '16px 0',
                  borderTop: '1px solid #f0f0f0',
                  marginTop: 8,
                }}
              >
                {caseStudy.metrics.map((m, i) => (
                  <div key={i} style={{ flex: 1, textAlign: 'center' }}>
                    <div
                      style={{
                        fontFamily: "'Outfit'",
                        fontSize: 24,
                        fontWeight: 800,
                        color: caseStudy.color,
                        lineHeight: 1,
                      }}
                    >
                      {m.value}
                    </div>
                    <div
                      style={{
                        fontSize: 10,
                        color: '#999',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        marginTop: 4,
                      }}
                    >
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
              {caseStudy.tags.map((t, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: caseStudy.color,
                    background: `${caseStudy.color}10`,
                    padding: '4px 10px',
                    borderRadius: 100,
                    fontFamily: "'DM Sans'",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Expand toggle */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 16,
              gap: 6,
            }}
          >
            <span style={{ fontSize: 13, color: caseStudy.color, fontWeight: 600 }}>
              {expanded ? 'Show less' : 'Read case study'}
            </span>
            <span
              style={{
                display: 'inline-block',
                transform: expanded ? 'rotate(180deg)' : 'rotate(0)',
                transition: 'transform 0.3s ease',
                color: caseStudy.color,
                fontSize: 14,
              }}
            >
              ↓
            </span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
