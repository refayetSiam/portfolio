import { Reveal } from '../common';
import { STATS } from '../../data';

export function StatsBar({ isMobile }) {
  return (
    <Reveal>
      <div id="stats" style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px 40px", scrollMarginTop: 100 }}>
        <div
          style={{
            background: "#1a1a2e",
            borderRadius: 24,
            padding: isMobile ? "32px 24px" : "40px 48px",
            display: "flex",
            flexWrap: "wrap",
            gap: isMobile ? 24 : 32,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {STATS.map((item, i) => (
            <div key={i} style={{ textAlign: "center", flex: "1 1 100px" }}>
              <div
                style={{
                  fontFamily: "'Outfit'",
                  fontSize: isMobile ? 28 : 36,
                  fontWeight: 900,
                  color: "#fff",
                  lineHeight: 1,
                }}
              >
                {item.num}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans'",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.45)",
                  marginTop: 6,
                  fontWeight: 500,
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
