import { useRef } from 'react';
import { useOnScreen } from '../../../hooks';
import { CompanyLogo } from '../../common';

export function TimelineNode({ item, index, onClick }) {
  const ref = useRef(null);
  const visible = useOnScreen(ref, 0.2);
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        justifyContent: isLeft ? "flex-end" : "flex-start",
        paddingLeft: isLeft ? 0 : "calc(50% + 32px)",
        paddingRight: isLeft ? "calc(50% + 32px)" : 0,
        marginBottom: 48,
        position: "relative",
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateX(0)"
          : `translateX(${isLeft ? "-40px" : "40px"})`,
        transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.08}s`,
      }}
    >
      {/* Center dot on the line */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 24,
          transform: "translateX(-50%)",
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: item.color,
          border: "4px solid #FAFAF8",
          boxShadow: `0 0 0 3px ${item.color}40, 0 4px 12px ${item.color}30`,
          zIndex: 2,
        }}
      />

      {/* Year badge on opposite side */}
      <div
        style={{
          position: "absolute",
          left: isLeft ? "calc(50% + 40px)" : "auto",
          right: isLeft ? "auto" : "calc(50% + 40px)",
          top: 20,
          fontFamily: "'Outfit', sans-serif",
          fontSize: 14,
          fontWeight: 800,
          color: item.color,
          background: `${item.color}12`,
          padding: "4px 14px",
          borderRadius: 100,
          whiteSpace: "nowrap",
        }}
      >
        {item.year}
      </div>

      {/* Card */}
      <div
        onClick={() => onClick(item)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onClick(item)}
        style={{
          background: "#fff",
          borderRadius: 20,
          padding: "28px 28px 24px",
          border: "2px solid #f0f0f0",
          maxWidth: 440,
          width: "100%",
          transition: "all 0.3s ease",
          position: "relative",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = item.color;
          e.currentTarget.style.boxShadow = `0 12px 40px ${item.color}15`;
          e.currentTarget.style.transform = "translateY(-3px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "#f0f0f0";
          e.currentTarget.style.boxShadow = "none";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <CompanyLogo id={item.logo} color={item.color} size={32} />
          <div>
            <h3
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 19,
                fontWeight: 800,
                color: "#1a1a2e",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                color: "#999",
                margin: 0,
                fontWeight: 500,
              }}
            >
              {item.org}
            </p>
          </div>
        </div>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            color: "#666",
            lineHeight: 1.65,
            margin: "0 0 14px",
          }}
        >
          {item.summary}
        </p>

        {item.metrics && (
          <div
            style={{
              display: "flex",
              gap: 16,
              marginBottom: 14,
              padding: "12px 0",
              borderTop: "1px solid #f5f5f5",
              borderBottom: "1px solid #f5f5f5",
            }}
          >
            {item.metrics.map((m, i) => (
              <div key={i}>
                <div
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 20,
                    fontWeight: 800,
                    color: item.color,
                    lineHeight: 1.2,
                  }}
                >
                  {m.value}
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
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {item.tags.map((t, i) => (
            <span
              key={i}
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: item.color,
                background: `${item.color}10`,
                padding: "3px 10px",
                borderRadius: 100,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div
          style={{
            marginTop: 12,
            fontSize: 12,
            color: item.color,
            fontWeight: 600,
            fontFamily: "'DM Sans'",
          }}
        >
          Click for details
        </div>
      </div>
    </div>
  );
}
