import { Reveal } from '../common';
import { HOBBIES } from '../../data';

export function About({ isMobile }) {
  return (
    <section id="about" style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px 100px" }}>
      <Reveal>
        <p style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: "#22C55E", margin: "0 0 8px" }}>
          Beyond the product specs
        </p>
        <h2
          style={{
            fontFamily: "'Outfit'",
            fontSize: "clamp(36px, 5vw, 52px)",
            fontWeight: 900,
            color: "#1a1a2e",
            margin: "0 0 48px",
            lineHeight: 1.1,
          }}
        >
          The Human Side
        </h2>
      </Reveal>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fill, minmax(${isMobile ? "160px" : "230px"}, 1fr))`,
          gap: 16,
        }}
      >
        {HOBBIES.map((h, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div
              style={{
                background: "#fff",
                borderRadius: 20,
                padding: isMobile ? "24px 20px" : "28px 24px",
                border: "1px solid #f0f0f0",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 10 }}>{h.emoji}</div>
              <h3
                style={{
                  fontFamily: "'Outfit'",
                  fontSize: 18,
                  fontWeight: 800,
                  color: "#1a1a2e",
                  margin: "0 0 4px",
                }}
              >
                {h.label}
              </h3>
              <p style={{ fontFamily: "'DM Sans'", fontSize: 13, color: "#999", margin: 0 }}>
                {h.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
