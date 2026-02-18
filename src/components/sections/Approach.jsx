import { Reveal } from '../common';
import { APPROACH } from '../../data';

export function Approach({ isMobile }) {
  return (
    <Reveal>
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px 80px" }}>
        <div
          style={{
            background: "linear-gradient(135deg, #FF6B3506, #8B5CF606, #22C55E06)",
            borderRadius: 32,
            padding: isMobile ? "40px 24px" : "64px 48px",
            border: "1px solid #f0f0f0",
          }}
        >
          <p style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: "#8B5CF6", margin: "0 0 8px" }}>
            How I think about product
          </p>
          <h2
            style={{
              fontFamily: "'Outfit'",
              fontSize: "clamp(32px, 4vw, 44px)",
              fontWeight: 900,
              color: "#1a1a2e",
              margin: "0 0 40px",
              lineHeight: 1.1,
            }}
          >
            My Approach
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(auto-fill, minmax(${isMobile ? "240px" : "280px"}, 1fr))`,
              gap: 20,
            }}
          >
            {APPROACH.map((item, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 20,
                    padding: 28,
                    border: "1px solid #f0f0f0",
                    height: "100%",
                  }}
                >
                  <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
                  <h3
                    style={{
                      fontFamily: "'Outfit'",
                      fontSize: 18,
                      fontWeight: 800,
                      color: "#1a1a2e",
                      margin: "0 0 6px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans'",
                      fontSize: 14,
                      color: "#777",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
