import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Navigation, Footer } from './components/layout';
import {
  Hero,
  StatsBar,
  Timeline,
  Projects,
  Contact
} from './components/sections';
import './styles/animations.css';

export default function Portfolio() {
  const [navVisible, setNavVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 860);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      setNavVisible(window.scrollY > 400);
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ background: "#FAFAF8", minHeight: "100vh", overflowX: "hidden" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Caveat:wght@600&display=swap"
        rel="stylesheet"
      />
      <style>{`
        * { box-sizing: border-box; }
      `}</style>

      <Navigation visible={navVisible} />

      <Hero />
      <StatsBar isMobile={isMobile} />
      <Timeline />
      <Projects isMobile={isMobile} />
      <Contact isMobile={isMobile} />

      <Footer />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: '#1a1a2e',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          opacity: showScrollTop ? 1 : 0,
          transform: showScrollTop ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.3s ease',
          pointerEvents: showScrollTop ? 'auto' : 'none',
          zIndex: 999,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = showScrollTop ? 'translateY(0)' : 'translateY(20px)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
        }}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
}
