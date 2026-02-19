import { Reveal } from '../common';

export function Contact({ isMobile }) {
  return (
    <section id="contact" style={{ padding: "0 24px 120px", scrollMarginTop: 80 }}>
      <Reveal>
        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            background: "#1a1a2e",
            borderRadius: 32,
            padding: isMobile ? "48px 24px" : "72px 48px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 300,
              height: 300,
              borderRadius: "50%",
              background: "radial-gradient(circle, #FF6B3530, transparent)",
              top: -100,
              right: -80,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 250,
              height: 250,
              borderRadius: "50%",
              background: "radial-gradient(circle, #8B5CF630, transparent)",
              bottom: -80,
              left: -60,
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <p style={{ fontFamily: "'Caveat', cursive", fontSize: 24, color: "#F59E0B", margin: "0 0 8px" }}>
              Have an idea? Let's talk.
            </p>
            <h2
              style={{
                fontFamily: "'Outfit'",
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 900,
                color: "#fff",
                margin: "0 0 16px",
                lineHeight: 1.1,
              }}
            >
              What can I help you build?
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans'",
                fontSize: 18,
                color: "rgba(255,255,255,0.55)",
                maxWidth: 500,
                margin: "0 auto 36px",
                lineHeight: 1.6,
              }}
            >
              Whether it's shipping a new product, scaling an existing one, or figuring out the right problem to solve - I'm always up for a good conversation.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="mailto:refayet.siam@gmail.com"
                style={{
                  fontFamily: "'DM Sans'",
                  fontSize: 16,
                  fontWeight: 700,
                  background: "#FF6B35",
                  color: "#fff",
                  border: "none",
                  padding: "14px 36px",
                  borderRadius: 100,
                  cursor: "pointer",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 8px 24px rgba(255,107,53,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}
              >
                Say hello
              </a>
              <a
                href="/Refayet Siam - Resume.pdf"
                download="Refayet_Siam_Resume.pdf"
                style={{
                  fontFamily: "'DM Sans'",
                  fontSize: 16,
                  fontWeight: 700,
                  background: "rgba(255,255,255,0.15)",
                  color: "#fff",
                  border: "2px solid rgba(255,255,255,0.25)",
                  padding: "14px 36px",
                  borderRadius: 100,
                  cursor: "pointer",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = "#fff";
                  e.target.style.background = "rgba(255,255,255,0.25)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.25)";
                  e.target.style.background = "rgba(255,255,255,0.15)";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Download Resume
              </a>
              <a
                href="https://linkedin.com/in/refayet"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'DM Sans'",
                  fontSize: 16,
                  fontWeight: 700,
                  background: "transparent",
                  color: "#fff",
                  border: "2px solid rgba(255,255,255,0.25)",
                  padding: "14px 36px",
                  borderRadius: 100,
                  cursor: "pointer",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = "#fff";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.25)";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
