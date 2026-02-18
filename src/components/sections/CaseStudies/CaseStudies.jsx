import { useState } from 'react';
import { Reveal } from '../../common';
import { CASE_STUDIES } from '../../../data';
import { CaseStudyCard } from './CaseStudyCard';
import { CaseStudyPage } from './CaseStudyPage';

export function CaseStudies({ isMobile }) {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  return (
    <section id="case-studies" style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px 100px" }}>
      <Reveal>
        <div style={{ marginBottom: 56 }}>
          <p style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: "#8B5CF6", margin: "0 0 8px" }}>
            Deep dives into my work
          </p>
          <h2
            style={{
              fontFamily: "'Outfit'",
              fontSize: "clamp(36px, 5vw, 52px)",
              fontWeight: 900,
              color: "#1a1a2e",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Case Studies
          </h2>
        </div>
      </Reveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(340px, 1fr))",
          gap: 24,
        }}
      >
        {CASE_STUDIES.map((cs, i) => (
          <CaseStudyCard
            key={cs.id}
            caseStudy={cs}
            index={i}
            onOpenModal={() => setSelectedCaseStudy(cs)}
          />
        ))}
      </div>

      <CaseStudyPage
        isOpen={selectedCaseStudy !== null}
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
}
