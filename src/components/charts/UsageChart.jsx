import { useState } from 'react';

// Drop-off funnel data - Before and After experiments
const FUNNEL_BEFORE = [
  { step: 1, label: 'Session Start', percent: 100, color: '#8B5CF6' },
  { step: 2, label: 'Data Load', percent: 98, color: '#A78BFA' },
  { step: 3, label: 'Filter Applied', percent: 96, color: '#C4B5FD' },
  { step: 4, label: 'Run Algorithm', percent: 72, color: '#DDD6FE', isDropOff: true },
  { step: 5, label: 'Download Report', percent: 40, color: '#EDE9FE', isDropOff: true },
];

const FUNNEL_AFTER = [
  { step: 1, label: 'Session Start', percent: 100, color: '#22C55E' },
  { step: 2, label: 'Data Load', percent: 98, color: '#4ADE80' },
  { step: 3, label: 'Filter Applied', percent: 96, color: '#86EFAC' },
  { step: 4, label: 'Run Algorithm', percent: 89, color: '#BBF7D0', improvement: 'Added presets' },
  { step: 5, label: 'Download Report', percent: 84, color: '#DCFCE7', improvement: 'Moved to cloud' },
];

const USAGE_DATA = [
  { feature: 'GCP Data', oct: 52, nov: 141, dec: 7, color: '#8B5CF6' },
  { feature: 'VFA Data', oct: 67, nov: 21, dec: 6, color: '#A78BFA' },
  { feature: 'MIQ', oct: 4, nov: 8, dec: 0, color: '#C4B5FD' },
  { feature: 'SnapShot', oct: 9, nov: 2, dec: 0, color: '#DDD6FE' },
];

const UNIQUE_USERS = [
  { feature: 'GCP Data', value: 53, color: '#8B5CF6' },
  { feature: 'VFA Data', value: 35, color: '#A78BFA' },
];

export function UsageBarChart() {
  const [hoveredBar, setHoveredBar] = useState(null);
  const maxValue = Math.max(...USAGE_DATA.flatMap(d => [d.oct, d.nov, d.dec]));

  const months = ['Oct', 'Nov', 'Dec'];

  return (
    <div style={{
      background: '#fff',
      borderRadius: 16,
      padding: 24,
      boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
    }}>
      <h4 style={{
        fontFamily: "'Outfit'",
        fontSize: 14,
        fontWeight: 700,
        color: '#1a1a2e',
        margin: '0 0 20px',
        textAlign: 'center',
      }}>
        Monthly Feature Usage (Q4 2025)
      </h4>

      {/* Legend */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 20, flexWrap: 'wrap' }}>
        {USAGE_DATA.map(d => (
          <div key={d.feature} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 12, height: 12, borderRadius: 3, background: d.color }} />
            <span style={{ fontFamily: "'DM Sans'", fontSize: 12, color: '#666' }}>{d.feature}</span>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', height: 180, paddingTop: 20 }}>
        {months.map((month, mi) => (
          <div key={month} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 140 }}>
              {USAGE_DATA.map((d, di) => {
                const value = mi === 0 ? d.oct : mi === 1 ? d.nov : d.dec;
                const height = (value / maxValue) * 120;
                const barKey = `${month}-${d.feature}`;
                const isHovered = hoveredBar === barKey;

                return (
                  <div
                    key={d.feature}
                    onMouseEnter={() => setHoveredBar(barKey)}
                    onMouseLeave={() => setHoveredBar(null)}
                    style={{
                      width: 20,
                      height: Math.max(height, 4),
                      background: d.color,
                      borderRadius: '4px 4px 0 0',
                      transition: 'all 0.3s ease',
                      transform: isHovered ? 'scaleY(1.05)' : 'scaleY(1)',
                      transformOrigin: 'bottom',
                      cursor: 'pointer',
                      opacity: hoveredBar && !isHovered ? 0.5 : 1,
                    }}
                  />
                );
              })}
            </div>
            <span style={{
              fontFamily: "'DM Sans'",
              fontSize: 12,
              color: '#999',
              marginTop: 8,
              fontWeight: 600,
            }}>
              {month}
            </span>
          </div>
        ))}
      </div>

      {/* Hover tooltip */}
      {hoveredBar && (
        <div style={{
          textAlign: 'center',
          marginTop: 12,
          fontFamily: "'DM Sans'",
          fontSize: 12,
          color: '#666',
        }}>
          {hoveredBar.split('-')[1]} - {hoveredBar.split('-')[0]} 2025
        </div>
      )}
    </div>
  );
}

export function UsagePieChart() {
  const [hoveredSlice, setHoveredSlice] = useState(null);
  const total = UNIQUE_USERS.reduce((sum, d) => sum + d.value, 0);

  // Calculate pie slices
  let currentAngle = 0;
  const slices = UNIQUE_USERS.map(d => {
    const percentage = (d.value / total) * 100;
    const angle = (d.value / total) * 360;
    const slice = {
      ...d,
      percentage,
      startAngle: currentAngle,
      endAngle: currentAngle + angle,
    };
    currentAngle += angle;
    return slice;
  });

  // Create SVG arc path
  const createArc = (startAngle, endAngle, radius, isHovered) => {
    const r = isHovered ? radius + 5 : radius;
    const start = polarToCartesian(75, 75, r, endAngle);
    const end = polarToCartesian(75, 75, r, startAngle);
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    return `M 75 75 L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y} Z`;
  };

  const polarToCartesian = (cx, cy, r, angle) => {
    const rad = (angle - 90) * Math.PI / 180;
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
    };
  };

  return (
    <div style={{
      background: '#fff',
      borderRadius: 16,
      padding: 24,
      boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
    }}>
      <h4 style={{
        fontFamily: "'Outfit'",
        fontSize: 14,
        fontWeight: 700,
        color: '#1a1a2e',
        margin: '0 0 20px',
        textAlign: 'center',
      }}>
        Unique Users by Feature
      </h4>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 24 }}>
        {/* Pie Chart */}
        <svg width="150" height="150" style={{ overflow: 'visible' }}>
          {slices.map((slice, i) => (
            <path
              key={slice.feature}
              d={createArc(slice.startAngle, slice.endAngle, 60, hoveredSlice === i)}
              fill={slice.color}
              onMouseEnter={() => setHoveredSlice(i)}
              onMouseLeave={() => setHoveredSlice(null)}
              style={{
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                filter: hoveredSlice === i ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' : 'none',
              }}
            />
          ))}
        </svg>

        {/* Legend */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {slices.map((slice, i) => (
            <div
              key={slice.feature}
              onMouseEnter={() => setHoveredSlice(i)}
              onMouseLeave={() => setHoveredSlice(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                cursor: 'pointer',
                opacity: hoveredSlice !== null && hoveredSlice !== i ? 0.5 : 1,
                transition: 'opacity 0.3s ease',
              }}
            >
              <div style={{
                width: 16,
                height: 16,
                borderRadius: 4,
                background: slice.color,
              }} />
              <div>
                <div style={{
                  fontFamily: "'DM Sans'",
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#1a1a2e',
                }}>
                  {slice.feature}
                </div>
                <div style={{
                  fontFamily: "'DM Sans'",
                  fontSize: 11,
                  color: '#999',
                }}>
                  {Math.round(slice.percentage)}% of users
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DropOffFunnelChart() {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [showAfter, setShowAfter] = useState(false);

  const data = showAfter ? FUNNEL_AFTER : FUNNEL_BEFORE;

  const renderFunnel = (funnelData, isAfter) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {funnelData.map((step, i) => {
        const prevPercent = i > 0 ? funnelData[i - 1].percent : 100;
        const dropOff = prevPercent - step.percent;
        const isHovered = hoveredStep === `${isAfter ? 'after' : 'before'}-${i}`;
        const hasSignificantDropOff = dropOff > 10;

        return (
          <div
            key={step.step}
            onMouseEnter={() => setHoveredStep(`${isAfter ? 'after' : 'before'}-${i}`)}
            onMouseLeave={() => setHoveredStep(null)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              cursor: 'pointer',
            }}
          >
            {/* Step number */}
            <div style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              background: step.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Outfit'",
              fontSize: 10,
              fontWeight: 700,
              color: isAfter ? '#166534' : '#fff',
              flexShrink: 0,
            }}>
              {step.step}
            </div>

            {/* Bar */}
            <div style={{ flex: 1, position: 'relative' }}>
              <div
                style={{
                  height: 28,
                  background: step.color,
                  borderRadius: 5,
                  width: `${step.percent}%`,
                  transition: 'all 0.3s ease',
                  transform: isHovered ? 'scaleY(1.1)' : 'scaleY(1)',
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: 10,
                  boxShadow: isHovered ? `0 4px 12px ${step.color}40` : 'none',
                }}
              >
                <span style={{
                  fontFamily: "'DM Sans'",
                  fontSize: 10,
                  fontWeight: 600,
                  color: isAfter ? '#166534' : '#fff',
                  whiteSpace: 'nowrap',
                }}>
                  {step.label}
                </span>
              </div>

              {/* Drop-off or improvement indicator */}
              {dropOff > 0 && !isAfter && (
                <div style={{
                  position: 'absolute',
                  right: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}>
                  <span style={{
                    fontFamily: "'DM Sans'",
                    fontSize: 9,
                    fontWeight: 600,
                    color: hasSignificantDropOff ? '#DC2626' : '#999',
                    background: hasSignificantDropOff ? '#FEE2E2' : '#f5f5f5',
                    padding: '2px 5px',
                    borderRadius: 3,
                  }}>
                    -{dropOff}%
                  </span>
                </div>
              )}

              {step.improvement && isAfter && (
                <div style={{
                  position: 'absolute',
                  right: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}>
                  <span style={{
                    fontFamily: "'DM Sans'",
                    fontSize: 9,
                    fontWeight: 600,
                    color: '#166534',
                    background: '#DCFCE7',
                    padding: '2px 5px',
                    borderRadius: 3,
                  }}>
                    {step.improvement}
                  </span>
                </div>
              )}
            </div>

            {/* Percentage */}
            <span style={{
              fontFamily: "'Outfit'",
              fontSize: 11,
              fontWeight: 700,
              color: isAfter ? '#166534' : '#6B7280',
              width: 35,
              textAlign: 'right',
            }}>
              {step.percent}%
            </span>
          </div>
        );
      })}
    </div>
  );

  return (
    <div style={{
      background: '#fff',
      borderRadius: 16,
      padding: 24,
      boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
    }}>
      <h4 style={{
        fontFamily: "'Outfit'",
        fontSize: 14,
        fontWeight: 700,
        color: '#1a1a2e',
        margin: '0 0 8px',
        textAlign: 'center',
      }}>
        Experiment: Improving Workflow Completion
      </h4>
      <p style={{
        fontFamily: "'DM Sans'",
        fontSize: 11,
        color: '#999',
        margin: '0 0 16px',
        textAlign: 'center',
      }}>
        Click to toggle before/after results
      </p>

      {/* Toggle Button */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 20,
      }}>
        <div style={{
          display: 'flex',
          background: '#f5f5f5',
          borderRadius: 8,
          padding: 3,
        }}>
          <button
            onClick={() => setShowAfter(false)}
            style={{
              padding: '8px 16px',
              borderRadius: 6,
              border: 'none',
              fontFamily: "'DM Sans'",
              fontSize: 12,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              background: !showAfter ? '#DC2626' : 'transparent',
              color: !showAfter ? '#fff' : '#666',
            }}
          >
            Before
          </button>
          <button
            onClick={() => setShowAfter(true)}
            style={{
              padding: '8px 16px',
              borderRadius: 6,
              border: 'none',
              fontFamily: "'DM Sans'",
              fontSize: 12,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              background: showAfter ? '#22C55E' : 'transparent',
              color: showAfter ? '#fff' : '#666',
            }}
          >
            After
          </button>
        </div>
      </div>

      {/* Funnel */}
      {renderFunnel(data, showAfter)}

      {/* Results Summary */}
      <div style={{
        marginTop: 20,
        padding: 12,
        background: showAfter ? '#DCFCE7' : '#FEE2E2',
        borderRadius: 8,
        borderLeft: `3px solid ${showAfter ? '#22C55E' : '#DC2626'}`,
      }}>
        {!showAfter ? (
          <p style={{
            fontFamily: "'DM Sans'",
            fontSize: 11,
            color: '#991B1B',
            margin: 0,
            lineHeight: 1.5,
          }}>
            <strong>Problem identified:</strong> Major drop-off at "Run Algorithm" (72%) and "Download Report" (40%).
            Users were abandoning large data processing jobs that took too long in the browser.
          </p>
        ) : (
          <p style={{
            fontFamily: "'DM Sans'",
            fontSize: 11,
            color: '#166534',
            margin: 0,
            lineHeight: 1.5,
          }}>
            <strong>Experiments that worked:</strong> Added algorithm presets for common use cases (+17%).
            Moved large requests to cloud processing with email notifications (+44%).
            Final completion rate: 84%.
          </p>
        )}
      </div>

      {/* Completion rate comparison */}
      <div style={{
        marginTop: 16,
        display: 'flex',
        justifyContent: 'center',
        gap: 24,
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: "'Outfit'",
            fontSize: 24,
            fontWeight: 800,
            color: '#DC2626',
            textDecoration: showAfter ? 'line-through' : 'none',
            opacity: showAfter ? 0.5 : 1,
          }}>
            40%
          </div>
          <div style={{
            fontFamily: "'DM Sans'",
            fontSize: 10,
            color: '#999',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            Before
          </div>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          color: '#22C55E',
          fontFamily: "'Outfit'",
          fontWeight: 700,
        }}>
          →
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: "'Outfit'",
            fontSize: 24,
            fontWeight: 800,
            color: '#22C55E',
          }}>
            84%
          </div>
          <div style={{
            fontFamily: "'DM Sans'",
            fontSize: 10,
            color: '#999',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            After
          </div>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '4px 10px',
          background: '#DCFCE7',
          borderRadius: 20,
          fontFamily: "'Outfit'",
          fontSize: 12,
          fontWeight: 700,
          color: '#166534',
        }}>
          +110%
        </div>
      </div>
    </div>
  );
}
