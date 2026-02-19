import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../../common';

export function ProjectCard({ project, index, onOpenProject }) {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (onOpenProject) {
      onOpenProject(project);
    }
  };

  return (
    <Reveal delay={index * 0.08}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleClick}
        style={{
          background: "#fff",
          borderRadius: 20,
          overflow: "hidden",
          cursor: "pointer",
          border: `2px solid ${hovered ? project.color : "#f0f0f0"}`,
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          boxShadow: hovered
            ? `0 20px 60px ${project.color}18, 0 8px 24px rgba(0,0,0,0.06)`
            : "0 2px 12px rgba(0,0,0,0.04)",
        }}
      >
        {/* Card Header with thumbnail or gradient fallback */}
        <div
          style={{
            height: 180,
            position: "relative",
            overflow: "hidden",
            background: project.thumbnail ? '#f5f5f5' : `linear-gradient(135deg, ${project.color}, ${project.color}BB)`,
          }}
        >
          {/* Thumbnail image */}
          {project.thumbnail && (
            <img
              src={project.thumbnail}
              alt={project.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
                transition: 'transform 0.4s ease',
                transform: hovered ? 'scale(1.05)' : 'scale(1)',
              }}
              onError={(e) => {
                // Hide image on error, fallback gradient will show
                e.target.style.display = 'none';
              }}
            />
          )}

          {/* Fallback decorative shapes (shown when no thumbnail or image fails to load) */}
          {!project.thumbnail && (
            <>
              <div
                style={{
                  position: "absolute",
                  width: 180,
                  height: 180,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.08)",
                  top: -50,
                  right: -30,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  width: 100,
                  height: 100,
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.06)",
                  bottom: -20,
                  left: 20,
                  transform: "rotate(15deg)",
                }}
              />
            </>
          )}

          {/* Hover overlay with CTA */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(135deg, ${project.color}DD, ${project.color}99)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: hovered ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                borderRadius: 12,
                padding: '12px 20px',
                color: '#fff',
                fontSize: 13,
                fontWeight: 600,
                border: '1px solid rgba(255,255,255,0.25)',
                transition: 'transform 0.3s ease',
                transform: hovered ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              <span>View Project</span>
              <ArrowRight size={16} />
            </div>
          </div>
        </div>

        <div style={{ padding: "24px 24px 20px" }}>
          {/* Product Label only */}
          {project.productLabel && (
            <span
              style={{
                display: "inline-block",
                background: project.productLabel === "Product Shipped"
                  ? "#DCFCE7"
                  : project.productLabel === "Product Concept"
                  ? "#FEF3C7"
                  : project.productLabel === "Data Product"
                  ? "#FEF3C7"
                  : "#F3E8FF",
                color: project.productLabel === "Product Shipped"
                  ? "#16A34A"
                  : project.productLabel === "Product Concept"
                  ? "#D97706"
                  : project.productLabel === "Data Product"
                  ? "#F59E0B"
                  : "#9333EA",
                fontSize: 10,
                fontWeight: 700,
                padding: "4px 10px",
                borderRadius: 100,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              {project.productLabel}
            </span>
          )}

          {/* Title */}
          <h3
            style={{
              fontFamily: "'Outfit'",
              fontSize: 22,
              fontWeight: 800,
              color: "#1a1a2e",
              margin: "0 0 4px",
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </h3>

          {/* Company */}
          <p
            style={{
              fontFamily: "'DM Sans'",
              fontSize: 13,
              color: "#999",
              margin: "0 0 14px",
              fontWeight: 500,
            }}
          >
            {project.company}
          </p>

          {/* Stats */}
          <div style={{ display: "flex", gap: 14, marginBottom: 14, justifyContent: "center" }}>
            {project.stats.map((s, i) => (
              <div key={i} style={{ flex: 1, textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "'Outfit'",
                    fontSize: 20,
                    fontWeight: 800,
                    color: project.color,
                    lineHeight: 1.2,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: "#bbb",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    fontWeight: 600,
                    marginTop: 1,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Feature Tags */}
          {(project.loomUrl || project.demoUrl || project.hasAlgorithmBreakdown || project.hasMultiProductOverview) && (
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
              {project.hasMultiProductOverview && (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    background: "#EDE9FE",
                    color: "#7C3AED",
                    fontSize: 11,
                    fontWeight: 600,
                    padding: "5px 10px",
                    borderRadius: 6,
                  }}
                >
                  <span style={{ fontSize: 12 }}>📦</span> Multi-Product PM
                </span>
              )}
              {project.hasAlgorithmBreakdown && (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    background: "#FFF7ED",
                    color: "#EA580C",
                    fontSize: 11,
                    fontWeight: 600,
                    padding: "5px 10px",
                    borderRadius: 6,
                  }}
                >
                  <span style={{ fontSize: 12 }}>🔬</span> Algorithm Breakdown
                </span>
              )}
              {project.demoUrl && (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    background: "#EEF2FF",
                    color: "#4F46E5",
                    fontSize: 11,
                    fontWeight: 600,
                    padding: "5px 10px",
                    borderRadius: 6,
                  }}
                >
                  <span style={{ fontSize: 12 }}>🎮</span> Interactive Demo
                </span>
              )}
              {project.loomUrl && (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    background: "#FDF4FF",
                    color: "#A855F7",
                    fontSize: 11,
                    fontWeight: 600,
                    padding: "5px 10px",
                    borderRadius: 6,
                  }}
                >
                  <span style={{ fontSize: 12 }}>🎥</span> Loom Video
                </span>
              )}
            </div>
          )}

          {/* View Details Link */}
          {project.process && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                color: project.color,
                fontSize: 12,
                fontWeight: 600,
                marginTop: 4,
              }}
            >
              <span>View Case Study</span>
              <ArrowRight size={14} />
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}
