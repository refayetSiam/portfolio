import { Rocket, ExternalLink } from 'lucide-react';
import { Reveal } from '../common';
import { PERSONAL_PROJECTS } from '../../data';

export function PersonalProjects({ isMobile }) {
  return (
    <section
      id="personal-projects"
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: isMobile ? '60px 20px' : '80px 40px',
      }}
    >
      <Reveal>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: 22,
              color: '#EC4899',
              margin: '0 0 8px',
            }}
          >
            Building on the side
          </p>
          <h2
            style={{
              fontFamily: "'Outfit'",
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 900,
              color: '#1a1a2e',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Personal Projects
          </h2>
        </div>
      </Reveal>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: 24,
        }}
      >
        {PERSONAL_PROJECTS.map((project) => (
          <Reveal key={project.id}>
            <div
              style={{
                background: '#fff',
                borderRadius: 24,
                padding: 32,
                border: '2px solid #f0f0f0',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = project.color;
                e.currentTarget.style.boxShadow = `0 16px 48px ${project.color}20`;
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#f0f0f0';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Status Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: 24,
                  right: 24,
                  background: `${project.color}15`,
                  color: project.color,
                  padding: '6px 14px',
                  borderRadius: 100,
                  fontSize: 12,
                  fontWeight: 700,
                  fontFamily: "'Outfit'",
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: project.color,
                    animation: 'pulse 2s infinite',
                  }}
                />
                {project.status}
              </div>

              {/* Icon */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}cc 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                  boxShadow: `0 8px 24px ${project.color}30`,
                }}
              >
                <Rocket size={28} color="#fff" />
              </div>

              {/* Title & Tagline */}
              <h3
                style={{
                  fontFamily: "'Outfit'",
                  fontSize: 26,
                  fontWeight: 800,
                  color: '#1a1a2e',
                  margin: '0 0 8px',
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans'",
                  fontSize: 16,
                  color: project.color,
                  fontWeight: 600,
                  margin: '0 0 16px',
                }}
              >
                {project.tagline}
              </p>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'DM Sans'",
                  fontSize: 15,
                  color: '#666',
                  lineHeight: 1.6,
                  margin: '0 0 24px',
                }}
              >
                {project.description}
              </p>

              {/* Features */}
              {project.features && (
                <div style={{ marginBottom: 24 }}>
                  <h4
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
                    Features
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none' }}>
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 10,
                          marginBottom: 8,
                          fontFamily: "'DM Sans'",
                          fontSize: 14,
                          color: '#555',
                        }}
                      >
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            background: project.color,
                            flexShrink: 0,
                          }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: project.color,
                      background: `${project.color}10`,
                      padding: '6px 12px',
                      borderRadius: 100,
                      fontFamily: "'DM Sans'",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              {project.links && project.links.length > 0 && (
                <div style={{ display: 'flex', gap: 12 }}>
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "'DM Sans'",
                        fontSize: 14,
                        fontWeight: 600,
                        color: '#fff',
                        background: project.color,
                        textDecoration: 'none',
                        padding: '12px 24px',
                        borderRadius: 100,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = `0 4px 16px ${project.color}40`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {link.label}
                      <ExternalLink size={14} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
