export function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "40px 24px",
      }}
    >
      {[
        { color: "#FF6B35", size: 500, top: "-10%", right: "-8%", delay: "0s" },
        { color: "#22C55E", size: 350, bottom: "5%", left: "-5%", delay: "2s" },
        { color: "#8B5CF6", size: 280, top: "20%", left: "15%", delay: "4s" },
        { color: "#EC4899", size: 200, bottom: "20%", right: "10%", delay: "1s" },
        { color: "#F59E0B", size: 160, top: "60%", left: "60%", delay: "3s" },
      ].map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: s.size,
            height: s.size,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${s.color}20, ${s.color}08)`,
            top: s.top,
            bottom: s.bottom,
            left: s.left,
            right: s.right,
            animation: `float ${6 + i}s ease-in-out infinite ${s.delay}`,
            filter: "blur(40px)",
          }}
        />
      ))}

      <div style={{ textAlign: "center", position: "relative", zIndex: 1, maxWidth: 800 }}>
        <div style={{ animation: "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards", opacity: 0 }}>
          <span style={{ display: "inline-block", fontSize: 48, animation: "wave 2s ease-in-out infinite", transformOrigin: "70% 70%" }}>
            👋
          </span>
        </div>
        <h1
          style={{
            fontFamily: "'Outfit'",
            fontSize: "clamp(48px, 8vw, 88px)",
            fontWeight: 900,
            color: "#1a1a2e",
            lineHeight: 1.05,
            margin: "16px 0 0",
            animation: "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards",
            opacity: 0,
          }}
        >
          I'm{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #FF6B35, #EC4899, #8B5CF6, #22C55E)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "shimmer 4s linear infinite",
            }}
          >
            Refayet
          </span>
        </h1>
        <p
          style={{
            fontFamily: "'DM Sans'",
            fontSize: "clamp(18px, 2.5vw, 24px)",
            color: "#666",
            lineHeight: 1.6,
            maxWidth: 600,
            margin: "20px auto 0",
            animation: "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards",
            opacity: 0,
          }}
        >
          Product Manager who builds things.
          <br />
          <span style={{ color: "#999" }}>Enterprise platforms - Climate tech - AI products</span>
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            marginTop: 36,
            flexWrap: "wrap",
            animation: "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.45s forwards",
            opacity: 0,
          }}
        >
          <button
            onClick={() => {
              const element = document.getElementById('stats');
              if (element) {
                const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
            style={{
              fontFamily: "'DM Sans'",
              fontSize: 16,
              fontWeight: 700,
              background: "#1a1a2e",
              color: "#fff",
              border: "none",
              padding: "14px 36px",
              borderRadius: 100,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 8px 24px rgba(26,26,46,0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            My journey
          </button>
          <button
            onClick={() => scrollTo("contact")}
            style={{
              fontFamily: "'DM Sans'",
              fontSize: 16,
              fontWeight: 700,
              background: "transparent",
              color: "#1a1a2e",
              border: "2px solid #e0e0e0",
              padding: "14px 36px",
              borderRadius: 100,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "#1a1a2e";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "#e0e0e0";
              e.target.style.transform = "translateY(0)";
            }}
          >
            Get in touch
          </button>
        </div>

        <p
          onClick={() => {
            const element = document.getElementById('stats');
            if (element) {
              const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }}
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: 22,
            color: "#bbb",
            marginTop: 60,
            animation: "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards",
            opacity: 0,
            cursor: "pointer",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = "#888"}
          onMouseLeave={(e) => e.currentTarget.style.color = "#bbb"}
        >
          scroll to explore ↓
        </p>
      </div>
    </section>
  );
}
