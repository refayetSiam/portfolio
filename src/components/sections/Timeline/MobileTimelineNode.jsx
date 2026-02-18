import { useRef } from 'react';
import { useOnScreen } from '../../../hooks';
import { CompanyLogo } from '../../common';

export function MobileTimelineNode({ item, index, onClick }) {
  const ref = useRef(null);
  const visible = useOnScreen(ref, 0.15);

  return (
    <div
      ref={ref}
      onClick={() => onClick(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(item)}
      style={{
        display: "flex",
        gap: 20,
        marginBottom: 36,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.06}s`,
        cursor: "pointer",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
        <div
          style={{
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: item.color,
            boxShadow: `0 0 0 3px ${item.color}30`,
            flexShrink: 0,
          }}
        />
        <div style={{ width: 2, flex: 1, background: "#eee", marginTop: 4 }} />
      </div>

      <div style={{ paddingBottom: 8, flex: 1 }}>
        <span
          style={{
            fontFamily: "'Outfit'",
            fontSize: 12,
            fontWeight: 800,
            color: item.color,
            background: `${item.color}12`,
            padding: "2px 10px",
            borderRadius: 100,
          }}
        >
          {item.year}
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "10px 0 6px" }}>
          <CompanyLogo id={item.logo} color={item.color} size={24} />
          <h3
            style={{
              fontFamily: "'Outfit'",
              fontSize: 17,
              fontWeight: 800,
              color: "#1a1a2e",
              margin: 0,
            }}
          >
            {item.title}
          </h3>
        </div>
        <p
          style={{
            fontFamily: "'DM Sans'",
            fontSize: 12,
            color: "#999",
            margin: "0 0 8px",
            fontWeight: 500,
          }}
        >
          {item.org}
        </p>
        <p
          style={{
            fontFamily: "'DM Sans'",
            fontSize: 14,
            color: "#666",
            lineHeight: 1.6,
            margin: "0 0 10px",
          }}
        >
          {item.summary}
        </p>

        {item.metrics && (
          <div style={{ display: "flex", gap: 16, marginBottom: 10 }}>
            {item.metrics.map((m, i) => (
              <div key={i}>
                <div
                  style={{
                    fontFamily: "'Outfit'",
                    fontSize: 18,
                    fontWeight: 800,
                    color: item.color,
                  }}
                >
                  {m.value}
                </div>
                <div
                  style={{
                    fontSize: 9,
                    color: "#bbb",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    fontWeight: 600,
                  }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
          {item.tags.map((t, i) => (
            <span
              key={i}
              style={{
                fontSize: 10,
                fontWeight: 600,
                color: item.color,
                background: `${item.color}10`,
                padding: "2px 8px",
                borderRadius: 100,
                fontFamily: "'DM Sans'",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div
          style={{
            marginTop: 8,
            fontSize: 11,
            color: item.color,
            fontWeight: 600,
            fontFamily: "'DM Sans'",
          }}
        >
          Tap for details
        </div>
      </div>
    </div>
  );
}
