export function Navigation({ visible }) {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 20,
        left: "50%",
        transform: `translateX(-50%) translateY(${visible ? 0 : -80}px)`,
        zIndex: 1000,
        background: "rgba(26, 26, 46, 0.92)",
        backdropFilter: "blur(20px)",
        borderRadius: 100,
        padding: "10px 8px",
        display: "flex",
        gap: 4,
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
      }}
    >
      {[
        ["stats", "Journey"],
        ["work", "Work"],
        ["contact", "Contact"]
      ].map(([id, label]) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          style={{
            background: "transparent",
            border: "none",
            color: "#fff",
            fontFamily: "'DM Sans'",
            fontSize: 14,
            fontWeight: 600,
            padding: "8px 18px",
            borderRadius: 100,
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.background = "rgba(255,255,255,0.12)")}
          onMouseLeave={(e) => (e.target.style.background = "transparent")}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
