import { useState } from 'react';
import { Code2, Briefcase, Rocket } from 'lucide-react';
import { Reveal } from '../../common';
import { TIMELINE } from '../../../data';
import { CompanyLogo } from '../../common';
import { ExperienceDrawer } from './ExperienceDrawer';

const YEAR_START = 2017;
const YEAR_END = 2026;
const YEARS = Array.from({ length: YEAR_END - YEAR_START + 1 }, (_, i) => YEAR_START + i);

const TRACKS = [
  { id: 'engineering', label: 'Engineering', icon: Code2, color: '#14B8A6', bgColor: '#14B8A610' },
  { id: '0to1', label: '0-1 Product', icon: Rocket, color: '#22C55E', bgColor: '#22C55E10' },
  { id: 'product', label: 'Product', icon: Briefcase, color: '#FF6B35', bgColor: '#FF6B3510' },
];

export function Timeline() {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  // Filter out education
  const items = TIMELINE.filter(item => item.type !== 'education');

  // Group items by track
  const itemsByTrack = TRACKS.reduce((acc, track) => {
    acc[track.id] = items.filter(item => item.track === track.id);
    return acc;
  }, {});

  // Calculate position and width for each bar (supports half-year precision)
  const getBarStyle = (item) => {
    const totalYears = YEAR_END - YEAR_START + 1;
    const start = Math.max(item.startYear, YEAR_START);
    const rawEnd = Math.min(item.endYear, YEAR_END);
    // For whole years, end means "end of that year" (add 1)
    // For decimals (e.g., 2019.5), use as-is since it's already a precise point
    const end = Number.isInteger(rawEnd) ? rawEnd + 1 : rawEnd;
    const left = ((start - YEAR_START) / totalYears) * 100;
    const width = ((end - start) / totalYears) * 100;
    return { left: `${left}%`, width: `${width}%` };
  };

  return (
    <section id="journey" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 100px" }}>
      <Reveal>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: "#6366F1", margin: "0 0 8px" }}>
            From engineer to product leader
          </p>
          <h2
            style={{
              fontFamily: "'Outfit'",
              fontSize: "clamp(36px, 5vw, 52px)",
              fontWeight: 900,
              color: "#1a1a2e",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            The Journey
          </h2>
        </div>
      </Reveal>

      {/* Gantt Chart Container */}
      <div
        style={{
          background: 'linear-gradient(180deg, #fff 0%, #fafafa 100%)',
          borderRadius: 24,
          padding: '32px 0 24px',
          boxShadow: '0 4px 32px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)',
          overflowX: 'auto',
        }}
      >
        <div style={{ minWidth: 800, padding: '0 32px' }}>
          {/* Year Headers */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `120px repeat(${YEARS.length}, 1fr)`,
              marginBottom: 16,
              paddingBottom: 16,
              borderBottom: '1px solid #eee',
            }}
          >
            <div /> {/* Empty cell for track label column */}
            {YEARS.map(year => (
              <div
                key={year}
                style={{
                  fontFamily: "'Outfit'",
                  fontSize: 14,
                  fontWeight: 700,
                  color: year === 2026 ? '#6366F1' : '#aaa',
                  textAlign: 'center',
                  position: 'relative',
                }}
              >
                {year}
                {year === 2026 && (
                  <span
                    style={{
                      position: 'absolute',
                      top: -8,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      fontSize: 10,
                      color: '#6366F1',
                      fontWeight: 600,
                    }}
                  >
                    NOW
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Track Rows */}
          {TRACKS.map((track, trackIndex) => {
            const TrackIcon = track.icon;
            return (
              <div
                key={track.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  minHeight: 88,
                  marginBottom: trackIndex < TRACKS.length - 1 ? 12 : 0,
                  background: track.bgColor,
                  borderRadius: 16,
                  overflow: 'hidden',
                }}
              >
                {/* Track Label */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '0 16px',
                    borderRight: `3px solid ${track.color}`,
                  }}
                >
                  <TrackIcon size={18} color={track.color} strokeWidth={2.5} />
                  <span
                    style={{
                      fontFamily: "'Outfit'",
                      fontSize: 14,
                      fontWeight: 700,
                      color: track.color,
                    }}
                  >
                    {track.label}
                  </span>
                </div>

                {/* Track Timeline */}
                <div
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '16px 8px',
                  }}
                >
                  {/* Subtle grid lines */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: 'grid',
                      gridTemplateColumns: `repeat(${YEARS.length}, 1fr)`,
                      pointerEvents: 'none',
                    }}
                  >
                    {YEARS.map((year, i) => (
                      <div
                        key={year}
                        style={{
                          borderRight: i < YEARS.length - 1 ? '1px dashed rgba(0,0,0,0.06)' : 'none',
                        }}
                      />
                    ))}
                  </div>

                  {/* Experience Bars */}
                  {itemsByTrack[track.id].map((item, index) => {
                    const barStyle = getBarStyle(item);
                    const isHovered = hoveredItem === item;

                    return (
                      <div
                        key={index}
                        onClick={() => setSelectedExperience(item)}
                        onMouseEnter={() => setHoveredItem(item)}
                        onMouseLeave={() => setHoveredItem(null)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && setSelectedExperience(item)}
                        style={{
                          position: 'absolute',
                          ...barStyle,
                          height: 56,
                          background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}dd 100%)`,
                          borderRadius: 28,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          padding: '0 6px 0 6px',
                          gap: 8,
                          boxShadow: isHovered
                            ? `0 8px 24px ${item.color}50, 0 0 0 3px ${item.color}30`
                            : `0 2px 8px ${item.color}30`,
                          transform: isHovered ? 'scale(1.03) translateY(-2px)' : 'scale(1)',
                          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                          zIndex: isHovered ? 10 : 1,
                          overflow: 'hidden',
                        }}
                      >
                        {/* Logo */}
                        <div
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: '50%',
                            background: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                          }}
                        >
                          <CompanyLogo id={item.logo} color={item.color} size={28} />
                        </div>

                        {/* Title & Org - only show if bar is wide enough */}
                        <div style={{ minWidth: 0, flex: 1, display: parseFloat(barStyle.width) > 15 ? 'block' : 'none' }}>
                          <h4
                            style={{
                              fontFamily: "'Outfit'",
                              fontSize: 13,
                              fontWeight: 700,
                              color: '#fff',
                              margin: 0,
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              textShadow: '0 1px 2px rgba(0,0,0,0.15)',
                            }}
                          >
                            {item.title}
                          </h4>
                          <p
                            style={{
                              fontFamily: "'DM Sans'",
                              fontSize: 11,
                              color: 'rgba(255,255,255,0.9)',
                              margin: '2px 0 0',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}
                          >
                            {item.org.split(' - ')[0]}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend / Helper text */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 24,
          marginTop: 20,
          flexWrap: 'wrap',
        }}
      >
        <p
          style={{
            fontFamily: "'DM Sans'",
            fontSize: 13,
            color: '#999',
            margin: 0,
          }}
        >
          Click any role for details
        </p>
        <div style={{ display: 'flex', gap: 16 }}>
          {TRACKS.map(track => {
            const TrackIcon = track.icon;
            return (
              <div key={track.id} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <TrackIcon size={14} color={track.color} />
                <span style={{ fontFamily: "'DM Sans'", fontSize: 12, color: '#999' }}>
                  {track.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll to products */}
      <p
        onClick={() => {
          const element = document.getElementById('work');
          if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }}
        style={{
          fontFamily: "'Caveat', cursive",
          fontSize: 22,
          color: "#bbb",
          marginTop: 48,
          textAlign: "center",
          cursor: "pointer",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = "#888"}
        onMouseLeave={(e) => e.currentTarget.style.color = "#bbb"}
      >
        scroll to explore products built ↓
      </p>

      <ExperienceDrawer
        isOpen={selectedExperience !== null}
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    </section>
  );
}
