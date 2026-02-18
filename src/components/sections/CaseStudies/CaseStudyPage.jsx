import { useEffect, useRef } from 'react';
import { X, ArrowLeft, Users, Target, Layers, BarChart3, CheckCircle2, ExternalLink } from 'lucide-react';
import { useScrollLock } from '../../../hooks';

export function CaseStudyPage({ isOpen, caseStudy, onClose }) {
  const pageRef = useRef(null);

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

  // Scroll to top when opened
  useEffect(() => {
    if (isOpen && pageRef.current) {
      pageRef.current.scrollTo(0, 0);
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
      {/* Full-screen overlay */}
      <div
        ref={pageRef}
        style={{
          position: 'fixed',
          inset: 0,
          background: '#fff',
          zIndex: 2000,
          overflowY: 'auto',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.4s ease-out',
        }}
      >
        {/* Sticky Header */}
        <header
          style={{
            position: 'sticky',
            top: 0,
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderBottom: '1px solid #eee',
            zIndex: 100,
            padding: '16px 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <button
            onClick={onClose}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: "'DM Sans'",
              fontSize: 14,
              fontWeight: 600,
              color: '#666',
              padding: '8px 0',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = cs.color}
            onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </button>
        </header>

        {/* Hero Section */}
        <section
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '80px 48px 60px',
          }}
        >
          {/* Company Badge */}
          <span
            style={{
              display: 'inline-block',
              background: cs.accent,
              color: cs.color,
              fontSize: 12,
              fontWeight: 700,
              padding: '6px 16px',
              borderRadius: 100,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom: 24,
            }}
          >
            {cs.company}
          </span>

          {/* Title */}
          <h1
            style={{
              fontFamily: "'Outfit'",
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 800,
              color: '#1a1a2e',
              margin: '0 0 24px',
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            {cs.title}
          </h1>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 40 }}>
            {cs.tags?.map((tag, i) => (
              <span
                key={i}
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#666',
                  background: '#f5f5f5',
                  padding: '6px 16px',
                  borderRadius: 100,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Problem Statement */}
          <p
            style={{
              fontFamily: "'DM Sans'",
              fontSize: 20,
              color: '#555',
              lineHeight: 1.7,
              maxWidth: 800,
              margin: 0,
            }}
          >
            {cs.problem}
          </p>
        </section>

        {/* Divider */}
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 48px',
          }}
        >
          <div style={{ height: 1, background: `linear-gradient(90deg, transparent, ${cs.color}40, transparent)` }} />
        </div>

        {/* Video Section */}
        {cs.loomUrl && (
          <section
            style={{
              maxWidth: 1000,
              margin: '0 auto',
              padding: '60px 48px',
            }}
          >
            <h2
              style={{
                fontFamily: "'Outfit'",
                fontSize: 14,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#999',
                margin: '0 0 24px',
              }}
            >
              Product Demo
            </h2>

            <div
              style={{
                position: 'relative',
                paddingBottom: '56.25%',
                height: 0,
                borderRadius: 20,
                overflow: 'hidden',
                boxShadow: '0 24px 64px rgba(0,0,0,0.15)',
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
                title="Product demo video"
              />
            </div>
          </section>
        )}

        {/* Interactive Demo Section */}
        {cs.demoUrl && (
          <section
            style={{
              maxWidth: 900,
              margin: '0 auto',
              padding: '40px 48px',
            }}
          >
            <div
              style={{
                background: `linear-gradient(135deg, ${cs.color}10, ${cs.color}05)`,
                borderRadius: 20,
                padding: '32px 40px',
                border: `2px solid ${cs.color}20`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 24,
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "'Outfit'",
                    fontSize: 20,
                    fontWeight: 700,
                    color: '#1a1a2e',
                    margin: '0 0 8px',
                  }}
                >
                  Try the Interactive Demo
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans'",
                    fontSize: 14,
                    color: '#666',
                    margin: '0 0 12px',
                  }}
                >
                  {cs.demoCredentials?.note || 'Experience the product firsthand'}
                </p>
                {cs.demoCredentials && (
                  <div
                    style={{
                      display: 'flex',
                      gap: 16,
                      flexWrap: 'wrap',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Sans'",
                        fontSize: 12,
                        color: '#888',
                        background: '#fff',
                        padding: '4px 12px',
                        borderRadius: 6,
                      }}
                    >
                      Username: <strong style={{ color: '#555' }}>{cs.demoCredentials.username}</strong>
                    </span>
                    <span
                      style={{
                        fontFamily: "'DM Sans'",
                        fontSize: 12,
                        color: '#888',
                        background: '#fff',
                        padding: '4px 12px',
                        borderRadius: 6,
                      }}
                    >
                      Email: <strong style={{ color: '#555' }}>{cs.demoCredentials.email}</strong>
                    </span>
                  </div>
                )}
              </div>
              <a
                href={cs.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  background: cs.color,
                  color: '#fff',
                  padding: '12px 24px',
                  borderRadius: 12,
                  fontFamily: "'DM Sans'",
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = `0 8px 24px ${cs.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <ExternalLink size={16} />
                Launch Demo
              </a>
            </div>
          </section>
        )}

        {/* Process Section */}
        {cs.process && (
          <section
            style={{
              maxWidth: 900,
              margin: '0 auto',
              padding: '60px 48px',
            }}
          >
            <h2
              style={{
                fontFamily: "'Outfit'",
                fontSize: 14,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#999',
                margin: '0 0 48px',
              }}
            >
              Design Process
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
              {cs.process.map((step, i) => {
                const Icon = processIcons[step.type] || Target;
                return (
                  <div
                    key={i}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '60px 1fr',
                      gap: 32,
                      alignItems: 'flex-start',
                    }}
                  >
                    {/* Step number with icon */}
                    <div
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: 16,
                        background: `${cs.color}10`,
                        border: `2px solid ${cs.color}30`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={28} color={cs.color} />
                    </div>

                    <div>
                      <h3
                        style={{
                          fontFamily: "'Outfit'",
                          fontSize: 24,
                          fontWeight: 700,
                          color: '#1a1a2e',
                          margin: '0 0 12px',
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'DM Sans'",
                          fontSize: 17,
                          color: '#555',
                          lineHeight: 1.7,
                          margin: 0,
                        }}
                      >
                        {step.description}
                      </p>

                      {/* Image placeholder for process steps */}
                      {step.imageUrl && (
                        <div
                          style={{
                            marginTop: 24,
                            borderRadius: 16,
                            overflow: 'hidden',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                          }}
                        >
                          <img
                            src={step.imageUrl}
                            alt={step.title}
                            style={{ width: '100%', display: 'block' }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Divider */}
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 48px',
          }}
        >
          <div style={{ height: 1, background: `linear-gradient(90deg, transparent, ${cs.color}40, transparent)` }} />
        </div>

        {/* Key Insights */}
        {cs.insights && (
          <section
            style={{
              maxWidth: 900,
              margin: '0 auto',
              padding: '60px 48px',
            }}
          >
            <h2
              style={{
                fontFamily: "'Outfit'",
                fontSize: 14,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#999',
                margin: '0 0 32px',
              }}
            >
              Key Insights
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {cs.insights.map((insight, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 16,
                    padding: '24px 28px',
                    background: '#fafafa',
                    borderRadius: 16,
                    borderLeft: `4px solid ${cs.color}`,
                  }}
                >
                  <CheckCircle2 size={22} color={cs.color} style={{ flexShrink: 0, marginTop: 2 }} />
                  <p
                    style={{
                      fontFamily: "'DM Sans'",
                      fontSize: 17,
                      color: '#444',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {insight}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Narrative Sections (for additional content) */}
        {cs.sections?.map((section, i) => (
          <section
            key={i}
            style={{
              maxWidth: section.fullWidth ? '100%' : 900,
              margin: '0 auto',
              padding: section.fullWidth ? '60px 0' : '60px 48px',
              background: section.background || 'transparent',
            }}
          >
            {section.title && (
              <h2
                style={{
                  fontFamily: "'Outfit'",
                  fontSize: section.titleSize || 32,
                  fontWeight: 700,
                  color: '#1a1a2e',
                  margin: '0 0 24px',
                  maxWidth: section.fullWidth ? 900 : '100%',
                  marginLeft: section.fullWidth ? 'auto' : 0,
                  marginRight: section.fullWidth ? 'auto' : 0,
                  padding: section.fullWidth ? '0 48px' : 0,
                }}
              >
                {section.title}
              </h2>
            )}

            {section.content && (
              <p
                style={{
                  fontFamily: "'DM Sans'",
                  fontSize: 17,
                  color: '#555',
                  lineHeight: 1.8,
                  margin: 0,
                  maxWidth: section.fullWidth ? 900 : '100%',
                  marginLeft: section.fullWidth ? 'auto' : 0,
                  marginRight: section.fullWidth ? 'auto' : 0,
                  padding: section.fullWidth ? '0 48px' : 0,
                }}
              >
                {section.content}
              </p>
            )}

            {section.imageUrl && (
              <div
                style={{
                  marginTop: section.title || section.content ? 32 : 0,
                  maxWidth: section.fullWidth ? '100%' : 900,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <img
                  src={section.imageUrl}
                  alt={section.title || 'Case study image'}
                  style={{
                    width: '100%',
                    display: 'block',
                    borderRadius: section.fullWidth ? 0 : 20,
                    boxShadow: section.fullWidth ? 'none' : '0 16px 48px rgba(0,0,0,0.1)',
                  }}
                />
                {section.caption && (
                  <p
                    style={{
                      fontFamily: "'DM Sans'",
                      fontSize: 13,
                      color: '#999',
                      textAlign: 'center',
                      marginTop: 16,
                      padding: '0 48px',
                    }}
                  >
                    {section.caption}
                  </p>
                )}
              </div>
            )}
          </section>
        ))}

        {/* Outcome Section */}
        {cs.outcome && (
          <section
            style={{
              background: `linear-gradient(135deg, ${cs.color}08, ${cs.color}15)`,
              padding: '80px 48px',
              marginTop: 40,
            }}
          >
            <div
              style={{
                maxWidth: 900,
                margin: '0 auto',
              }}
            >
              <h2
                style={{
                  fontFamily: "'Outfit'",
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: cs.color,
                  margin: '0 0 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <Target size={18} />
                Target KPIs
              </h2>

              <p
                style={{
                  fontFamily: "'DM Sans'",
                  fontSize: 24,
                  color: '#1a1a2e',
                  lineHeight: 1.6,
                  margin: 0,
                  fontWeight: 500,
                }}
              >
                {cs.outcome}
              </p>
            </div>
          </section>
        )}

        {/* Footer / Next Project */}
        <footer
          style={{
            borderTop: '1px solid #eee',
            padding: '48px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <button
            onClick={onClose}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: cs.color,
              color: '#fff',
              border: 'none',
              borderRadius: 12,
              padding: '14px 28px',
              fontFamily: "'DM Sans'",
              fontSize: 15,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = `0 8px 24px ${cs.color}40`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </button>
        </footer>
      </div>
    </>
  );
}
