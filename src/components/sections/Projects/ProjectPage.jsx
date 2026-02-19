import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, CheckCircle2, ExternalLink, Target, TrendingUp, Users, Layers, BarChart3, Calendar, Clock, Award } from 'lucide-react';
import { useScrollLock } from '../../../hooks';
import { UsageBarChart, UsagePieChart, DropOffFunnelChart, CapexFundingChart, MiddlewareBenchmarkTable } from '../../charts';

export function ProjectPage({ isOpen, project, onClose }) {
  const pageRef = useRef(null);
  const [carouselIndices, setCarouselIndices] = useState({});

  useScrollLock(isOpen);

  // Reset carousel indices when project changes
  useEffect(() => {
    setCarouselIndices({});
  }, [project?.id]);

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

  if (!project) return null;

  const p = project;

  const getProductLabelStyles = (label) => {
    if (label === "Product Shipped") {
      return { bg: "#DCFCE7", color: "#16A34A" };
    } else if (label === "Product Concept") {
      return { bg: "#FEF3C7", color: "#D97706" };
    } else if (label === "Data Product") {
      return { bg: "#FEF3C7", color: "#F59E0B" };
    }
    return { bg: "#F3E8FF", color: "#9333EA" };
  };

  const labelStyles = getProductLabelStyles(p.productLabel);

  const processIcons = {
    research: Target,
    interviews: Users,
    prioritize: Layers,
    design: BarChart3,
    outcome: CheckCircle2,
  };

  // Check if project has detailed case study content
  const hasDetailedContent = p.process || p.sections || p.team;

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
            onMouseEnter={(e) => e.currentTarget.style.color = p.color}
            onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </button>
        </header>

        {/* Hero Section - Two Column Layout */}
        <section
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '60px 48px 40px',
            display: 'grid',
            gridTemplateColumns: hasDetailedContent ? '1fr 320px' : '1fr',
            gap: 48,
            alignItems: 'start',
          }}
        >
          {/* Left Column - Title & Description */}
          <div>
            {/* Labels */}
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 20 }}>
              {p.productLabel && (
                <span
                  style={{
                    display: 'inline-block',
                    background: labelStyles.bg,
                    color: labelStyles.color,
                    fontSize: 12,
                    fontWeight: 700,
                    padding: '6px 16px',
                    borderRadius: 100,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  {p.productLabel}
                </span>
              )}
              <span
                style={{
                  display: 'inline-block',
                  background: '#f5f5f5',
                  color: '#666',
                  fontSize: 12,
                  fontWeight: 600,
                  padding: '6px 16px',
                  borderRadius: 100,
                }}
              >
                {p.company}
              </span>
            </div>

            {/* Title */}
            <h1
              style={{
                fontFamily: "'Outfit'",
                fontSize: 'clamp(40px, 5vw, 64px)',
                fontWeight: 800,
                color: '#1a1a2e',
                margin: '0 0 24px',
                lineHeight: 1.1,
              }}
            >
              {p.title}
            </h1>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 32 }}>
              {(p.tags || [p.tag]).map((tag, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: p.color,
                    background: `${p.color}12`,
                    padding: '6px 16px',
                    borderRadius: 100,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Product Exercise Note */}
            {p.isProductExercise && p.productExerciseNote && (
              <div
                style={{
                  background: `${p.color}10`,
                  border: `2px solid ${p.color}30`,
                  borderRadius: 12,
                  padding: '16px 20px',
                  marginBottom: 24,
                }}
              >
                <p
                  style={{
                    fontFamily: "'DM Sans'",
                    fontSize: 14,
                    color: '#555',
                    lineHeight: 1.6,
                    margin: 0,
                    fontStyle: 'italic',
                  }}
                >
                  <strong style={{ color: p.color, fontStyle: 'normal' }}>Product Exercise:</strong> {p.productExerciseNote}
                </p>
              </div>
            )}

            {/* Problem Statement / Description */}
            <p
              style={{
                fontFamily: "'DM Sans'",
                fontSize: 20,
                color: '#555',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {p.description}
            </p>
          </div>

          {/* Right Column - Metrics Card */}
          {hasDetailedContent && (
            <div
              style={{
                background: '#fafafa',
                borderRadius: 20,
                padding: '28px',
                border: '1px solid #eee',
              }}
            >
              {/* Role/Title */}
              {p.role && (
                <div style={{ marginBottom: 24 }}>
                  <h3
                    style={{
                      fontFamily: "'Outfit'",
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: '#999',
                      margin: '0 0 8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    <Clock size={14} />
                    My Role
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans'",
                      fontSize: 15,
                      color: p.color,
                      margin: 0,
                      fontWeight: 600,
                    }}
                  >
                    {p.role}
                  </p>
                </div>
              )}

              {/* Impact Stats */}
              {p.stats && (
                <div style={{ marginBottom: 24 }}>
                  <h3
                    style={{
                      fontFamily: "'Outfit'",
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: '#999',
                      margin: '0 0 16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    <Award size={14} />
                    Impact
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {p.stats.map((stat, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                        <span
                          style={{
                            fontFamily: "'Outfit'",
                            fontSize: 28,
                            fontWeight: 800,
                            color: p.color,
                            lineHeight: 1,
                          }}
                        >
                          {stat.value}
                        </span>
                        <span
                          style={{
                            fontFamily: "'DM Sans'",
                            fontSize: 13,
                            color: '#666',
                            fontWeight: 500,
                          }}
                        >
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Team Composition */}
              {p.team && (
                <div style={{ marginBottom: 24 }}>
                  <h3
                    style={{
                      fontFamily: "'Outfit'",
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: '#999',
                      margin: '0 0 12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    <Users size={14} />
                    Team
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {p.team.engineers > 0 && (
                      <span
                        style={{
                          background: '#fff',
                          border: '1px solid #e0e0e0',
                          borderRadius: 6,
                          padding: '6px 10px',
                          fontFamily: "'DM Sans'",
                          fontSize: 12,
                          color: '#555',
                          fontWeight: 500,
                        }}
                      >
                        {p.team.engineers} Engineers
                      </span>
                    )}
                    {p.team.designers > 0 && (
                      <span
                        style={{
                          background: '#fff',
                          border: '1px solid #e0e0e0',
                          borderRadius: 6,
                          padding: '6px 10px',
                          fontFamily: "'DM Sans'",
                          fontSize: 12,
                          color: '#555',
                          fontWeight: 500,
                        }}
                      >
                        {p.team.designers} Designer
                      </span>
                    )}
                    {p.team.sales > 0 && (
                      <span
                        style={{
                          background: '#fff',
                          border: '1px solid #e0e0e0',
                          borderRadius: 6,
                          padding: '6px 10px',
                          fontFamily: "'DM Sans'",
                          fontSize: 12,
                          color: '#555',
                          fontWeight: 500,
                        }}
                      >
                        {p.team.sales} Sales
                      </span>
                    )}
                    {p.team.productManagers > 0 && (
                      <span
                        style={{
                          background: p.color,
                          borderRadius: 6,
                          padding: '6px 10px',
                          fontFamily: "'DM Sans'",
                          fontSize: 12,
                          color: '#fff',
                          fontWeight: 600,
                        }}
                      >
                        {p.team.productManagers} PM (Me)
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Timeline */}
              {p.team?.timeline && (
                <div>
                  <h3
                    style={{
                      fontFamily: "'Outfit'",
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: '#999',
                      margin: '0 0 8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    <Calendar size={14} />
                    Timeline
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans'",
                      fontSize: 13,
                      color: '#555',
                      margin: 0,
                      fontWeight: 500,
                      lineHeight: 1.4,
                    }}
                  >
                    {p.team.timeline}
                  </p>
                </div>
              )}
            </div>
          )}
        </section>

        {/* Client Logo Marquee */}
        {p.clients && (
          <section
            style={{
              borderTop: '1px solid #eee',
              borderBottom: '1px solid #eee',
              padding: '32px 0',
              overflow: 'hidden',
              background: '#fafafa',
            }}
          >
            <p
              style={{
                fontFamily: "'DM Sans'",
                fontSize: 12,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#999',
                margin: '0 0 24px',
                textAlign: 'center',
              }}
            >
              Trusted by
            </p>
            <div
              style={{
                display: 'flex',
                width: 'max-content',
                animation: `marquee ${Math.max(20, p.clients.length * 3)}s linear infinite`,
              }}
            >
              {/* Double the logos for seamless loop */}
              {[...p.clients, ...p.clients].map((client, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 40px',
                    minWidth: 120,
                  }}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    style={{
                      height: 36,
                      maxWidth: 100,
                      objectFit: 'contain',
                      opacity: 0.5,
                      filter: 'grayscale(100%)',
                      transition: 'opacity 0.2s, filter 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.filter = 'grayscale(0%)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '0.5';
                      e.currentTarget.style.filter = 'grayscale(100%)';
                    }}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Video Section */}
        {p.loomUrl && (
          <section
            style={{
              maxWidth: 1000,
              margin: '0 auto',
              padding: '80px 48px',
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
                src={p.loomUrl.replace('/share/', '/embed/')}
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
        {p.demoUrl && (
          <section
            style={{
              maxWidth: 1000,
              margin: '0 auto',
              padding: '40px 48px',
            }}
          >
            <div
              style={{
                background: `linear-gradient(135deg, ${p.color}10, ${p.color}05)`,
                borderRadius: 20,
                padding: '32px 40px',
                border: `2px solid ${p.color}20`,
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
                  {p.demoCredentials?.note || 'Experience the product firsthand'}
                </p>
                {p.demoCredentials && (
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
                      Username: <strong style={{ color: '#555' }}>{p.demoCredentials.username}</strong>
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
                      Email: <strong style={{ color: '#555' }}>{p.demoCredentials.email}</strong>
                    </span>
                  </div>
                )}
              </div>
              <a
                href={p.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  background: p.color,
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
                  e.currentTarget.style.boxShadow = `0 8px 24px ${p.color}40`;
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
        {p.process && (
          <section
            style={{
              maxWidth: 1000,
              margin: '0 auto',
              padding: '80px 48px',
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
              The Story
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
              {p.process.map((step, i) => {
                const Icon = processIcons[step.type] || Target;
                return (
                  <div
                    key={i}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '56px 1fr',
                      gap: 28,
                      alignItems: 'flex-start',
                    }}
                  >
                    {/* Step number/icon */}
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: 16,
                        background: i === 0 ? p.color : `${p.color}10`,
                        border: `2px solid ${p.color}30`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: "'Outfit'",
                        fontSize: 20,
                        fontWeight: 800,
                        color: i === 0 ? '#fff' : p.color,
                      }}
                    >
                      {i + 1}
                    </div>

                    <div>
                      <h3
                        style={{
                          fontFamily: "'Outfit'",
                          fontSize: 26,
                          fontWeight: 700,
                          color: '#1a1a2e',
                          margin: '0 0 14px',
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'DM Sans'",
                          fontSize: 17,
                          color: '#555',
                          lineHeight: 1.8,
                          margin: 0,
                        }}
                      >
                        {step.description}
                      </p>

                      {step.imageUrl && (
                        <div
                          style={{
                            marginTop: 28,
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

        {/* Narrative Sections with Images */}
        {p.sections?.map((section, i) => (
          <section
            key={i}
            style={{
              maxWidth: section.fullWidth ? '100%' : 1000,
              margin: '0 auto',
              padding: section.fullWidth ? '80px 0' : '60px 48px',
              background: section.background || (i % 2 === 1 ? '#fafafa' : 'transparent'),
            }}
          >
            <div style={{ maxWidth: section.fullWidth ? 1000 : '100%', margin: '0 auto', padding: section.fullWidth ? '0 48px' : 0 }}>
              {section.title && (
                <h2
                  style={{
                    fontFamily: "'Outfit'",
                    fontSize: section.titleSize || 28,
                    fontWeight: 700,
                    color: '#1a1a2e',
                    margin: '0 0 16px',
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
                    margin: section.imageUrl ? '0 0 32px' : 0,
                    maxWidth: 800,
                  }}
                >
                  {section.content}
                </p>
              )}

              {/* Before/After Comparison */}
              {section.beforeImage && section.afterImage && (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 24,
                    marginTop: 24,
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: "'DM Sans'",
                        fontSize: 12,
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: '#DC2626',
                        margin: '0 0 12px',
                      }}
                    >
                      {section.beforeLabel || 'Without LLM'}
                    </p>
                    <div
                      style={{
                        borderRadius: 16,
                        overflow: 'hidden',
                        border: '2px solid #FEE2E2',
                        background: '#fff',
                      }}
                    >
                      <img
                        src={section.beforeImage}
                        alt={section.beforeLabel || 'Before'}
                        style={{ width: '100%', display: 'block' }}
                      />
                    </div>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'DM Sans'",
                        fontSize: 12,
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: '#16A34A',
                        margin: '0 0 12px',
                      }}
                    >
                      {section.afterLabel || 'With LLM'}
                    </p>
                    <div
                      style={{
                        borderRadius: 16,
                        overflow: 'hidden',
                        border: '2px solid #DCFCE7',
                        background: '#fff',
                      }}
                    >
                      <img
                        src={section.afterImage}
                        alt={section.afterLabel || 'After'}
                        style={{ width: '100%', display: 'block' }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Single Image */}
              {section.imageUrl && !section.beforeImage && (
                <div
                  style={{
                    borderRadius: section.fullWidth ? 0 : 20,
                    overflow: 'hidden',
                    boxShadow: section.fullWidth ? 'none' : '0 16px 48px rgba(0,0,0,0.1)',
                    background: '#fff',
                  }}
                >
                  <img
                    src={section.imageUrl}
                    alt={section.title || 'Project image'}
                    style={{ width: '100%', display: 'block' }}
                  />
                </div>
              )}

              {/* Video */}
              {section.videoUrl && (
                <div
                  style={{
                    borderRadius: 20,
                    overflow: 'hidden',
                    boxShadow: '0 16px 48px rgba(0,0,0,0.1)',
                    background: '#000',
                  }}
                >
                  <video
                    src={section.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', display: 'block' }}
                  />
                </div>
              )}

              {/* Interactive Charts */}
              {section.charts === 'usage' && (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 24,
                    marginTop: 24,
                  }}
                >
                  <UsageBarChart />
                  <UsagePieChart />
                </div>
              )}

              {/* Drop-off Funnel Chart */}
              {section.charts === 'dropoff' && (
                <div style={{ marginTop: 24, maxWidth: 600, margin: '24px auto 0' }}>
                  <DropOffFunnelChart />
                </div>
              )}

              {/* Capex Funding Chart */}
              {section.charts === 'capex' && (
                <div style={{ marginTop: 24, maxWidth: 800, margin: '24px auto 0' }}>
                  <CapexFundingChart />
                </div>
              )}

              {/* Middleware Benchmark Table */}
              {section.charts === 'middleware' && (
                <div style={{ marginTop: 24, maxWidth: 800, margin: '24px auto 0' }}>
                  <MiddlewareBenchmarkTable />
                </div>
              )}

              {/* Carousel */}
              {section.carousel && section.carousel.length > 0 && (
                <div style={{ position: 'relative' }}>
                  {/* Main Image */}
                  <div
                    style={{
                      borderRadius: 20,
                      overflow: 'hidden',
                      boxShadow: '0 16px 48px rgba(0,0,0,0.1)',
                      background: '#fff',
                      position: 'relative',
                    }}
                  >
                    <img
                      src={section.carousel[carouselIndices[i] || 0]}
                      alt={`${section.title || 'Carousel'} - Image ${(carouselIndices[i] || 0) + 1}`}
                      style={{
                        width: '100%',
                        display: 'block',
                        transition: 'opacity 0.3s ease',
                      }}
                    />

                    {/* Navigation Arrows */}
                    <button
                      onClick={() => {
                        const currentIndex = carouselIndices[i] || 0;
                        const newIndex = currentIndex === 0 ? section.carousel.length - 1 : currentIndex - 1;
                        setCarouselIndices(prev => ({ ...prev, [i]: newIndex }));
                      }}
                      style={{
                        position: 'absolute',
                        left: 16,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.95)',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        fontFamily: "'Outfit'",
                        fontSize: 20,
                        color: '#333',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                        e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
                      }}
                    >
                      ←
                    </button>
                    <button
                      onClick={() => {
                        const currentIndex = carouselIndices[i] || 0;
                        const newIndex = currentIndex === section.carousel.length - 1 ? 0 : currentIndex + 1;
                        setCarouselIndices(prev => ({ ...prev, [i]: newIndex }));
                      }}
                      style={{
                        position: 'absolute',
                        right: 16,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.95)',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        fontFamily: "'Outfit'",
                        fontSize: 20,
                        color: '#333',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                        e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
                      }}
                    >
                      →
                    </button>
                  </div>

                  {/* Navigation Dots */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      gap: 10,
                      marginTop: 20,
                    }}
                  >
                    {section.carousel.map((_, dotIndex) => (
                      <button
                        key={dotIndex}
                        onClick={() => setCarouselIndices(prev => ({ ...prev, [i]: dotIndex }))}
                        style={{
                          width: (carouselIndices[i] || 0) === dotIndex ? 28 : 10,
                          height: 10,
                          borderRadius: 5,
                          background: (carouselIndices[i] || 0) === dotIndex ? p.color : '#ddd',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          padding: 0,
                        }}
                        onMouseEnter={(e) => {
                          if ((carouselIndices[i] || 0) !== dotIndex) {
                            e.currentTarget.style.background = `${p.color}60`;
                          }
                        }}
                        onMouseLeave={(e) => {
                          if ((carouselIndices[i] || 0) !== dotIndex) {
                            e.currentTarget.style.background = '#ddd';
                          }
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {section.caption && (
                <p
                  style={{
                    fontFamily: "'DM Sans'",
                    fontSize: 13,
                    color: '#999',
                    textAlign: 'center',
                    marginTop: 16,
                  }}
                >
                  {section.caption}
                </p>
              )}
            </div>
          </section>
        ))}

        {/* Key Insights */}
        {p.insights && (
          <section
            style={{
              maxWidth: 1000,
              margin: '0 auto',
              padding: '80px 48px',
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
              Key Learnings
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
              {p.insights.map((insight, i) => (
                <div
                  key={i}
                  style={{
                    padding: '28px',
                    background: '#fafafa',
                    borderRadius: 20,
                    borderTop: `4px solid ${p.color}`,
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: `${p.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 16,
                    }}
                  >
                    <CheckCircle2 size={18} color={p.color} />
                  </div>
                  <p
                    style={{
                      fontFamily: "'DM Sans'",
                      fontSize: 16,
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

        {/* Outcome Section */}
        {p.outcome && (
          <section
            style={{
              background: `linear-gradient(135deg, ${p.color}08, ${p.color}15)`,
              padding: '80px 48px',
            }}
          >
            <div
              style={{
                maxWidth: 1000,
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
                  color: p.color,
                  margin: '0 0 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <Target size={18} />
                {p.productLabel === "Product Concept" ? "Target KPIs" : "Results"}
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
                {p.outcome}
              </p>
            </div>
          </section>
        )}

        {/* Stats Section - only show if no team (simple projects) */}
        {p.stats && !p.team && (
          <section
            style={{
              maxWidth: 1000,
              margin: '0 auto',
              padding: '60px 48px',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${p.stats.length}, 1fr)`,
                gap: 24,
              }}
            >
              {p.stats.map((stat, i) => (
                <div
                  key={i}
                  style={{
                    background: `${p.color}08`,
                    borderRadius: 16,
                    padding: '28px 24px',
                    textAlign: 'center',
                    border: `2px solid ${p.color}15`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Outfit'",
                      fontSize: 36,
                      fontWeight: 800,
                      color: p.color,
                      lineHeight: 1,
                      marginBottom: 8,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans'",
                      fontSize: 13,
                      color: '#888',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      fontWeight: 600,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Key Contributions - only show if no insights (simple projects) */}
        {p.highlights && !p.insights && (
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
                margin: '0 0 32px',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <TrendingUp size={18} />
              Key Contributions
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {p.highlights.map((highlight, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 16,
                    padding: '24px 28px',
                    background: '#fafafa',
                    borderRadius: 16,
                    borderLeft: `4px solid ${p.color}`,
                  }}
                >
                  <CheckCircle2 size={22} color={p.color} style={{ flexShrink: 0, marginTop: 2 }} />
                  <p
                    style={{
                      fontFamily: "'DM Sans'",
                      fontSize: 17,
                      color: '#444',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Footer */}
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
              background: p.color,
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
              e.currentTarget.style.boxShadow = `0 8px 24px ${p.color}40`;
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

      {/* Marquee animation keyframes */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </>
  );
}
