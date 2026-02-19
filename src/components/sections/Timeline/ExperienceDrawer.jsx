import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { useScrollLock } from '../../../hooks';
import { CompanyLogo } from '../../common';

export function ExperienceDrawer({ isOpen, experience, onClose }) {
  const drawerRef = useRef(null);
  // Keep track of the last valid experience so we can animate out with content
  const [displayedExperience, setDisplayedExperience] = useState(null);

  useScrollLock(isOpen);

  // Update displayed experience when a new one is selected
  useEffect(() => {
    if (experience) {
      setDisplayedExperience(experience);
    }
  }, [experience]);

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
    if (isOpen && drawerRef.current) {
      drawerRef.current.focus();
    }
  }, [isOpen]);

  const exp = displayedExperience;
  const details = exp?.details;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.4s ease-out',
          zIndex: 1001,
        }}
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
        tabIndex={-1}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          maxWidth: 580,
          background: '#fff',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)',
          zIndex: 1002,
          overflowY: 'auto',
          boxShadow: '-16px 0 64px rgba(0, 0, 0, 0.15)',
        }}
      >
        {exp && (
          <>
            {/* Header */}
            <div
              style={{
                position: 'sticky',
                top: 0,
                background: '#fff',
                borderBottom: '1px solid #f0f0f0',
                padding: '24px 32px',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                zIndex: 1,
              }}
            >
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <CompanyLogo id={exp.logo} color={exp.color} size={48} />
                <div>
                  <h2
                    id="drawer-title"
                    style={{
                      fontFamily: "'Outfit'",
                      fontSize: 22,
                      fontWeight: 800,
                      color: '#1a1a2e',
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    {exp.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "'DM Sans'",
                      fontSize: 14,
                      color: '#666',
                      margin: '4px 0 0',
                    }}
                  >
                    {exp.org}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      gap: 12,
                      marginTop: 8,
                      fontFamily: "'DM Sans'",
                      fontSize: 13,
                      color: '#999',
                    }}
                  >
                    <span>{exp.year}</span>
                    {details?.duration && <span>- {details.duration}</span>}
                  </div>
                  {details?.location && (
                    <p
                      style={{
                        fontFamily: "'DM Sans'",
                        fontSize: 13,
                        color: '#999',
                        margin: '4px 0 0',
                      }}
                    >
                      {details.location}
                    </p>
                  )}
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close drawer"
                style={{
                  background: '#f5f5f5',
                  border: 'none',
                  borderRadius: 8,
                  padding: 8,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#eee')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#f5f5f5')}
              >
                <X size={20} color="#666" />
              </button>
            </div>

            {/* Content */}
            <div style={{ padding: '28px 32px' }}>
              {/* Metrics */}
              {(exp.metrics || details?.achievements) && (
                <div style={{ marginBottom: 28 }}>
                  <h3
                    style={{
                      fontFamily: "'Outfit'",
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: '#bbb',
                      margin: '0 0 12px',
                    }}
                  >
                    Impact
                  </h3>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
                      gap: 16,
                    }}
                  >
                    {(exp.metrics || []).map((m, i) => (
                      <div
                        key={i}
                        style={{
                          background: `${exp.color}08`,
                          borderRadius: 12,
                          padding: '16px 12px',
                          textAlign: 'center',
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "'Outfit'",
                            fontSize: 24,
                            fontWeight: 800,
                            color: exp.color,
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
                </div>
              )}

              {/* Team */}
              {details?.team && (
                <div style={{ marginBottom: 28 }}>
                  <h3
                    style={{
                      fontFamily: "'Outfit'",
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: '#bbb',
                      margin: '0 0 8px',
                    }}
                  >
                    Team
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans'",
                      fontSize: 14,
                      color: '#666',
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    {details.team}
                  </p>
                </div>
              )}

              {/* Responsibilities */}
              {details?.responsibilities && (
                <div style={{ marginBottom: 28 }}>
                  <h3
                    style={{
                      fontFamily: "'Outfit'",
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: '#bbb',
                      margin: '0 0 12px',
                    }}
                  >
                    Responsibilities
                  </h3>
                  <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none' }}>
                    {details.responsibilities.map((r, i) => (
                      <li
                        key={i}
                        style={{
                          display: 'flex',
                          gap: 10,
                          marginBottom: 10,
                          fontFamily: "'DM Sans'",
                          fontSize: 14,
                          color: '#555',
                          lineHeight: 1.5,
                        }}
                      >
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            background: exp.color,
                            marginTop: 7,
                            flexShrink: 0,
                          }}
                        />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Achievements */}
              {details?.achievements && (
                <div style={{ marginBottom: 28 }}>
                  <h3
                    style={{
                      fontFamily: "'Outfit'",
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: '#bbb',
                      margin: '0 0 12px',
                    }}
                  >
                    Key Achievements
                  </h3>
                  {details.achievements.map((a, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        gap: 12,
                        marginBottom: 12,
                        padding: '12px 14px',
                        background: '#f9f9f9',
                        borderRadius: 10,
                        alignItems: 'flex-start',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Outfit'",
                          fontSize: 16,
                          fontWeight: 800,
                          color: exp.color,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {a.metric}
                      </span>
                      <span
                        style={{
                          fontFamily: "'DM Sans'",
                          fontSize: 14,
                          color: '#666',
                          lineHeight: 1.4,
                        }}
                      >
                        {a.description}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tools */}
              {details?.tools && (
                <div style={{ marginBottom: 28 }}>
                  <h3
                    style={{
                      fontFamily: "'Outfit'",
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: '#bbb',
                      margin: '0 0 12px',
                    }}
                  >
                    Tools & Technologies
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {details.tools.map((t, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          color: exp.color,
                          background: `${exp.color}10`,
                          padding: '6px 12px',
                          borderRadius: 100,
                          fontFamily: "'DM Sans'",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Case Study Note */}
              {details?.caseStudyNote && (
                <div
                  style={{
                    marginBottom: 28,
                    padding: '14px 18px',
                    background: `${exp.color}08`,
                    borderRadius: 12,
                    borderLeft: `4px solid ${exp.color}`,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'DM Sans'",
                      fontSize: 13,
                      color: '#666',
                      margin: 0,
                      fontWeight: 500,
                    }}
                  >
                    {details.caseStudyNote}
                  </p>
                </div>
              )}

              {/* Links */}
              {details?.links && details.links.length > 0 && (
                <div style={{ marginBottom: 28 }}>
                  <h3
                    style={{
                      fontFamily: "'Outfit'",
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: '#bbb',
                      margin: '0 0 12px',
                    }}
                  >
                    Links
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {details.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: "'DM Sans'",
                          fontSize: 14,
                          fontWeight: 600,
                          color: exp.color,
                          textDecoration: 'none',
                          padding: '10px 20px',
                          border: `2px solid ${exp.color}`,
                          borderRadius: 100,
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = exp.color;
                          e.currentTarget.style.color = '#fff';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = exp.color;
                        }}
                      >
                        {link.label} &rarr;
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </aside>
    </>
  );
}
