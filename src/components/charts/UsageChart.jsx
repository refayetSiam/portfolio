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

// Novion Capital Planning Data
const CAPEX_DATA = [
  { year: 'Backlog', bau: 1160000, canopy: 1160000 },
  { year: '2025', bau: 580000, canopy: 580000 },
  { year: '2026', bau: 1015000, canopy: 1015000 },
  { year: '2027', bau: 290000, canopy: 290000 },
  { year: '2028', bau: 0, canopy: 150000 },
  { year: '2029', bau: 0, canopy: 150000 },
  { year: '2030', bau: 420000, canopy: 420000 },
  { year: '2031', bau: 0, canopy: 150000 },
  { year: '2032', bau: 0, canopy: 150000 },
  { year: '2033', bau: 560000, canopy: 560000 },
  { year: '2034', bau: 1160000, canopy: 1160000 },
];

// Calculate 3-year moving average
const calculateMovingAverage = (data, key, windowSize = 3) => {
  return data.map((_, i) => {
    const start = Math.max(0, i - windowSize + 1);
    const slice = data.slice(start, i + 1);
    const avg = slice.reduce((sum, d) => sum + d[key], 0) / slice.length;
    return avg;
  });
};

export function CapexFundingChart() {
  const [hoveredBar, setHoveredBar] = useState(null);
  const [scenario, setScenario] = useState('both'); // 'bau', 'canopy', 'both'

  const maxValue = Math.max(...CAPEX_DATA.flatMap(d => [d.bau, d.canopy]));
  const chartHeight = 200;
  const barWidth = 28;
  const gap = 6;

  const bauMA = calculateMovingAverage(CAPEX_DATA, 'bau');
  const canopyMA = calculateMovingAverage(CAPEX_DATA, 'canopy');

  const formatCurrency = (value) => {
    if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`;
    return `$${value}`;
  };

  // Calculate SVG points for moving average lines
  const getLinePoints = (maData) => {
    return maData.map((val, i) => {
      const x = 50 + i * 70 + barWidth;
      const y = chartHeight - (val / maxValue) * (chartHeight - 40) - 20;
      return `${x},${y}`;
    }).join(' ');
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
        fontSize: 16,
        fontWeight: 700,
        color: '#1a1a2e',
        margin: '0 0 8px',
        textAlign: 'center',
      }}>
        10-Year Capital Replacement Forecast
      </h4>
      <p style={{
        fontFamily: "'DM Sans'",
        fontSize: 12,
        color: '#999',
        margin: '0 0 20px',
        textAlign: 'center',
      }}>
        Compare BAU vs 10% canopy expansion scenarios
      </p>

      {/* Scenario Toggle */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 8,
        marginBottom: 20,
      }}>
        {[
          { key: 'bau', label: 'BAU Only', color: '#6B7280' },
          { key: 'both', label: 'Compare Both', color: '#22C55E' },
          { key: 'canopy', label: '+10% Canopy', color: '#16A34A' },
        ].map(opt => (
          <button
            key={opt.key}
            onClick={() => setScenario(opt.key)}
            style={{
              padding: '6px 14px',
              borderRadius: 6,
              border: 'none',
              fontFamily: "'DM Sans'",
              fontSize: 11,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              background: scenario === opt.key ? opt.color : '#f5f5f5',
              color: scenario === opt.key ? '#fff' : '#666',
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 16 }}>
        {(scenario === 'bau' || scenario === 'both') && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 14, height: 14, borderRadius: 3, background: '#9CA3AF' }} />
            <span style={{ fontFamily: "'DM Sans'", fontSize: 11, color: '#666' }}>BAU</span>
            <div style={{ width: 20, height: 2, background: '#6B7280', marginLeft: 4 }} />
            <span style={{ fontFamily: "'DM Sans'", fontSize: 10, color: '#999' }}>3yr MA</span>
          </div>
        )}
        {(scenario === 'canopy' || scenario === 'both') && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 14, height: 14, borderRadius: 3, background: '#22C55E' }} />
            <span style={{ fontFamily: "'DM Sans'", fontSize: 11, color: '#666' }}>+10% Canopy</span>
            <div style={{ width: 20, height: 2, background: '#16A34A', marginLeft: 4 }} />
            <span style={{ fontFamily: "'DM Sans'", fontSize: 10, color: '#999' }}>3yr MA</span>
          </div>
        )}
      </div>

      {/* Chart */}
      <div style={{ overflowX: 'auto', paddingBottom: 8 }}>
        <svg width={CAPEX_DATA.length * 70 + 60} height={chartHeight + 40} style={{ display: 'block' }}>
          {/* Y-axis labels */}
          {[0, 0.25, 0.5, 0.75, 1].map((pct, i) => {
            const y = chartHeight - pct * (chartHeight - 40);
            return (
              <g key={i}>
                <line x1="40" y1={y} x2={CAPEX_DATA.length * 70 + 50} y2={y} stroke="#f0f0f0" strokeWidth="1" />
                <text x="35" y={y + 4} textAnchor="end" style={{ fontFamily: "'DM Sans'", fontSize: 9, fill: '#999' }}>
                  {formatCurrency(maxValue * pct)}
                </text>
              </g>
            );
          })}

          {/* Bars */}
          {CAPEX_DATA.map((d, i) => {
            const x = 50 + i * 70;
            const bauHeight = (d.bau / maxValue) * (chartHeight - 40);
            const canopyHeight = (d.canopy / maxValue) * (chartHeight - 40);
            const isHovered = hoveredBar === i;

            return (
              <g key={d.year}>
                {/* BAU Bar */}
                {(scenario === 'bau' || scenario === 'both') && (
                  <rect
                    x={scenario === 'both' ? x : x + barWidth / 2}
                    y={chartHeight - bauHeight}
                    width={barWidth}
                    height={Math.max(bauHeight, 2)}
                    fill={isHovered ? '#6B7280' : '#9CA3AF'}
                    rx={4}
                    onMouseEnter={() => setHoveredBar(i)}
                    onMouseLeave={() => setHoveredBar(null)}
                    style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
                  />
                )}

                {/* Canopy Bar */}
                {(scenario === 'canopy' || scenario === 'both') && (
                  <rect
                    x={scenario === 'both' ? x + barWidth + gap : x + barWidth / 2}
                    y={chartHeight - canopyHeight}
                    width={barWidth}
                    height={Math.max(canopyHeight, 2)}
                    fill={isHovered ? '#16A34A' : '#22C55E'}
                    rx={4}
                    onMouseEnter={() => setHoveredBar(i)}
                    onMouseLeave={() => setHoveredBar(null)}
                    style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
                  />
                )}

                {/* X-axis label */}
                <text
                  x={scenario === 'both' ? x + barWidth + gap / 2 : x + barWidth}
                  y={chartHeight + 16}
                  textAnchor="middle"
                  style={{ fontFamily: "'DM Sans'", fontSize: 9, fill: '#666', fontWeight: isHovered ? 600 : 400 }}
                >
                  {d.year}
                </text>
              </g>
            );
          })}

          {/* Moving Average Lines */}
          {(scenario === 'bau' || scenario === 'both') && (
            <polyline
              points={bauMA.map((val, i) => {
                const x = scenario === 'both' ? 50 + i * 70 + barWidth : 50 + i * 70 + barWidth;
                const y = chartHeight - (val / maxValue) * (chartHeight - 40);
                return `${x},${y}`;
              }).join(' ')}
              fill="none"
              stroke="#6B7280"
              strokeWidth="2"
              strokeDasharray="4,2"
              style={{ opacity: 0.8 }}
            />
          )}
          {(scenario === 'canopy' || scenario === 'both') && (
            <polyline
              points={canopyMA.map((val, i) => {
                const x = scenario === 'both' ? 50 + i * 70 + barWidth * 2 + gap : 50 + i * 70 + barWidth;
                const y = chartHeight - (val / maxValue) * (chartHeight - 40);
                return `${x},${y}`;
              }).join(' ')}
              fill="none"
              stroke="#16A34A"
              strokeWidth="2"
              strokeDasharray="4,2"
              style={{ opacity: 0.8 }}
            />
          )}
        </svg>
      </div>

      {/* Tooltip */}
      {hoveredBar !== null && (
        <div style={{
          textAlign: 'center',
          padding: '10px 16px',
          background: '#f9fafb',
          borderRadius: 8,
          marginTop: 12,
        }}>
          <div style={{ fontFamily: "'Outfit'", fontSize: 13, fontWeight: 700, color: '#1a1a2e', marginBottom: 6 }}>
            {CAPEX_DATA[hoveredBar].year}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 20 }}>
            {(scenario === 'bau' || scenario === 'both') && (
              <div>
                <span style={{ fontFamily: "'DM Sans'", fontSize: 11, color: '#999' }}>BAU: </span>
                <span style={{ fontFamily: "'Outfit'", fontSize: 13, fontWeight: 700, color: '#6B7280' }}>
                  {formatCurrency(CAPEX_DATA[hoveredBar].bau)}
                </span>
              </div>
            )}
            {(scenario === 'canopy' || scenario === 'both') && (
              <div>
                <span style={{ fontFamily: "'DM Sans'", fontSize: 11, color: '#999' }}>+10% Canopy: </span>
                <span style={{ fontFamily: "'Outfit'", fontSize: 13, fontWeight: 700, color: '#22C55E' }}>
                  {formatCurrency(CAPEX_DATA[hoveredBar].canopy)}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Summary Stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 12,
        marginTop: 20,
        padding: 16,
        background: '#f0fdf4',
        borderRadius: 12,
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: "'Outfit'", fontSize: 18, fontWeight: 800, color: '#22C55E' }}>
            $5.2M
          </div>
          <div style={{ fontFamily: "'DM Sans'", fontSize: 10, color: '#666', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Total BAU
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: "'Outfit'", fontSize: 18, fontWeight: 800, color: '#16A34A' }}>
            $5.7M
          </div>
          <div style={{ fontFamily: "'DM Sans'", fontSize: 10, color: '#666', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            +10% Canopy
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: "'Outfit'", fontSize: 18, fontWeight: 800, color: '#166534' }}>
            +$450K
          </div>
          <div style={{ fontFamily: "'DM Sans'", fontSize: 10, color: '#666', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Investment Delta
          </div>
        </div>
      </div>
    </div>
  );
}

// Middleware Benchmark Data from CSV
const MIDDLEWARE_BENCHMARKS = [
  { metric: 'Dataset Size', d1: '5,531', d2: '30,916', d3: '220,609', d4: '443,555', d5: '6,105' },
  { metric: 'Dictionary Size', d1: '650', d2: '650', d3: '650', d4: '650', d5: '181,354' },
  { metric: '% Identified', d1: '72%', d2: '88%', d3: '89%', d4: '85%', d5: '80%', isHighlight: true },
  { metric: '% Error', d1: '1.4%', d2: '1.4%', d3: '1.6%', d4: '2.0%', d5: '1.8%', isError: true },
  { metric: 'Execution Time', d1: '<1 min', d2: '<1 min', d3: '2 min', d4: '3 min', d5: '3 min' },
];

const DATASET_HEADERS = [
  { key: 'd1', label: 'Dataset 1', subLabel: 'Source 1' },
  { key: 'd2', label: 'Dataset 2', subLabel: 'Source 1' },
  { key: 'd3', label: 'Dataset 3', subLabel: 'Source 1' },
  { key: 'd4', label: 'Dataset 4', subLabel: 'Source 1' },
  { key: 'd5', label: 'Dataset 5', subLabel: 'Source 2' },
];

export function MiddlewareBenchmarkTable() {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [hoveredCol, setHoveredCol] = useState(null);

  return (
    <div style={{
      background: '#fff',
      borderRadius: 16,
      padding: 24,
      boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
    }}>
      <h4 style={{
        fontFamily: "'Outfit'",
        fontSize: 16,
        fontWeight: 700,
        color: '#1a1a2e',
        margin: '0 0 8px',
        textAlign: 'center',
      }}>
        Validation Engine Performance
      </h4>
      <p style={{
        fontFamily: "'DM Sans'",
        fontSize: 12,
        color: '#999',
        margin: '0 0 20px',
        textAlign: 'center',
      }}>
        Benchmarks across 5 production datasets from 2 data sources
      </p>

      {/* Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontFamily: "'DM Sans'",
          fontSize: 12,
        }}>
          <thead>
            <tr>
              <th style={{
                padding: '12px 10px',
                textAlign: 'left',
                background: '#f9fafb',
                borderBottom: '2px solid #e5e7eb',
                fontWeight: 600,
                color: '#374151',
                borderRadius: '8px 0 0 0',
              }}>
                Metric
              </th>
              {DATASET_HEADERS.map((header, i) => (
                <th
                  key={header.key}
                  onMouseEnter={() => setHoveredCol(i)}
                  onMouseLeave={() => setHoveredCol(null)}
                  style={{
                    padding: '10px 8px',
                    textAlign: 'center',
                    background: hoveredCol === i ? '#F59E0B15' : '#f9fafb',
                    borderBottom: '2px solid #e5e7eb',
                    transition: 'background 0.2s ease',
                    borderRadius: i === DATASET_HEADERS.length - 1 ? '0 8px 0 0' : 0,
                    cursor: 'default',
                  }}
                >
                  <div style={{
                    fontWeight: 700,
                    color: '#1a1a2e',
                    fontSize: 11,
                  }}>
                    {header.label}
                  </div>
                  <div style={{
                    fontSize: 9,
                    color: '#999',
                    marginTop: 2,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}>
                    {header.subLabel}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MIDDLEWARE_BENCHMARKS.map((row, rowIndex) => (
              <tr
                key={row.metric}
                onMouseEnter={() => setHoveredRow(rowIndex)}
                onMouseLeave={() => setHoveredRow(null)}
                style={{
                  background: hoveredRow === rowIndex ? '#fefce8' : (rowIndex % 2 === 0 ? '#fff' : '#fafafa'),
                  transition: 'background 0.2s ease',
                }}
              >
                <td style={{
                  padding: '12px 10px',
                  borderBottom: '1px solid #f0f0f0',
                  fontWeight: 600,
                  color: '#374151',
                }}>
                  {row.metric}
                </td>
                {DATASET_HEADERS.map((header, colIndex) => {
                  const value = row[header.key];
                  const isHighlightCell = row.isHighlight;
                  const isErrorCell = row.isError;

                  return (
                    <td
                      key={header.key}
                      onMouseEnter={() => setHoveredCol(colIndex)}
                      onMouseLeave={() => setHoveredCol(null)}
                      style={{
                        padding: '12px 8px',
                        textAlign: 'center',
                        borderBottom: '1px solid #f0f0f0',
                        background: hoveredCol === colIndex ? '#F59E0B08' : 'transparent',
                        transition: 'background 0.2s ease',
                      }}
                    >
                      <span style={{
                        fontFamily: "'Outfit'",
                        fontWeight: isHighlightCell || isErrorCell ? 700 : 500,
                        fontSize: isHighlightCell || isErrorCell ? 13 : 12,
                        color: isHighlightCell ? '#16A34A' : isErrorCell ? '#DC2626' : '#1a1a2e',
                        background: isHighlightCell ? '#DCFCE7' : isErrorCell ? '#FEE2E2' : 'transparent',
                        padding: isHighlightCell || isErrorCell ? '3px 8px' : 0,
                        borderRadius: 4,
                      }}>
                        {value}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 12,
        marginTop: 20,
        padding: 16,
        background: '#FEF3C7',
        borderRadius: 12,
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: "'Outfit'", fontSize: 20, fontWeight: 800, color: '#F59E0B' }}>
            72-89%
          </div>
          <div style={{ fontFamily: "'DM Sans'", fontSize: 10, color: '#92400E', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Identification Rate
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: "'Outfit'", fontSize: 20, fontWeight: 800, color: '#16A34A' }}>
            &lt;2%
          </div>
          <div style={{ fontFamily: "'DM Sans'", fontSize: 10, color: '#92400E', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Error Rate
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: "'Outfit'", fontSize: 20, fontWeight: 800, color: '#8B5CF6' }}>
            &lt;3 min
          </div>
          <div style={{ fontFamily: "'DM Sans'", fontSize: 10, color: '#92400E', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Processing Time
          </div>
        </div>
      </div>

      {/* Note */}
      <p style={{
        fontFamily: "'DM Sans'",
        fontSize: 11,
        color: '#999',
        margin: '16px 0 0',
        textAlign: 'center',
        fontStyle: 'italic',
      }}>
        Tested on datasets ranging from 5K to 443K records with dictionaries up to 181K entries
      </p>
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
