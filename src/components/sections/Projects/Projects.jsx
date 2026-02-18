import { useState } from 'react';
import { Reveal } from '../../common';
import { PROJECTS } from '../../../data';
import { ProjectCard } from './ProjectCard';
import { ProjectPage } from './ProjectPage';

export function Projects({ isMobile }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <section id="work" style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px 100px" }}>
      <Reveal>
        <div style={{ marginBottom: 56 }}>
          <p style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: "#FF6B35", margin: "0 0 8px" }}>
            Things I've built & shipped
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
            Product Work
          </h2>
        </div>
      </Reveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fill, minmax(${isMobile ? "280px" : "330px"}, 1fr))`,
          gap: 24,
        }}
      >
        {PROJECTS.map((p, i) => (
          <ProjectCard
            key={p.id}
            project={p}
            index={i}
            onOpenProject={handleOpenProject}
          />
        ))}
      </div>

      <ProjectPage
        isOpen={selectedProject !== null}
        project={selectedProject}
        onClose={handleCloseProject}
      />
    </section>
  );
}
