'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import {
  SubpageContainer,
  SubpageHero,
  SubpageTitle,
  SubpageDescription,
  ContentSection
} from '@/components/Shared/Subpage.styles';
import {
  FilterContainer,
  FilterButton,
  GalleryGrid,
  ProjectCard,
  ProjectImage,
  ProjectInfo,
  ProjectCategory,
  ProjectTitle,
  LightboxOverlay,
  LightboxContent,
  LightboxImage,
  CloseButton
} from './gallery.styles';

// Mock Data
interface Project {
  id: number;
  title: string;
  category: string;
  image?: string;
  description?: string;
}

const projects: Project[] = [
  {
    id: 1, // kolejny numer
    title: "Mobilny Bar",
    category: "Bary", // wybierz kategorię: Restauracje, Kawiarnie, Bary, Inne
    image: "/assets/rel/bar_mob.jpg", // ścieżka do zdjęcia (bez "public")
    description: "Krótki opis co to za realizacja"
  },
  {
    id: 2, // kolejny numer
    title: "Trójkąty i Kwadraty",
    category: "Restauracje", // wybierz kategorię: Restauracje, Kawiarnie, Bary, Inne
    image: "/assets/rel/2.jpg", // ścieżka do zdjęcia (bez "public")
    description: "Krótki opis co to za realizacja"
  },
  {
    id: 3, // kolejny numer
    title: "Trójkąty i Kwadraty",
    category: "Restauracje", // wybierz kategorię: Restauracje, Kawiarnie, Bary, Inne
    image: "/assets/rel/3.jpg", // ścieżka do zdjęcia (bez "public")
    description: "Krótki opis co to za realizacja"
  },
  {
    id: 4, // kolejny numer
    title: "Szkolenie Barmańskie",
    category: "Bary", // wybierz kategorię: Restauracje, Kawiarnie, Bary, Inne
    image: "/assets/rel/4.jpg", // ścieżka do zdjęcia (bez "public")
    description: "Krótki opis co to za realizacja"
  },
  {
    id: 5, // kolejny numer
    title: "Inna Liga",
    category: "Restauracje", // wybierz kategorię: Restauracje, Kawiarnie, Bary, Inne
    image: "/assets/rel/5.jpg", // ścieżka do zdjęcia (bez "public")
    description: "Krótki opis co to za realizacja"
  },
  {
    id: 6, // kolejny numer
    title: "Grodno Pub&Restaurant",
    category: "Restauracje", // wybierz kategorię: Restauracje, Kawiarnie, Bary, Inne
    image: "/assets/rel/6.jpg", // ścieżka do zdjęcia (bez "public")
    description: "Krótki opis co to za realizacja"
  },
  {
    id: 7, // kolejny numer
    title: "Mama Thai",
    category: "Restauracje", // wybierz kategorię: Restauracje, Kawiarnie, Bary, Inne
    image: "/assets/rel/7.jpg", // ścieżka do zdjęcia (bez "public")
    description: "Krótki opis co to za realizacja"
  },
  {
    id: 8, // kolejny numer
    title: "Eatally",
    category: "Restauracje", // wybierz kategorię: Restauracje, Kawiarnie, Bary, Inne
    image: "/assets/rel/8.jpg", // ścieżka do zdjęcia (bez "public")
    description: "Krótki opis co to za realizacja"
  },
  {
    id: 9, // kolejny numer
    title: "Hollywood smile",
    category: "Inne lokale", // wybierz kategorię: Restauracje, Kawiarnie, Bary, Inne
    image: "/assets/rel/9.jpg", // ścieżka do zdjęcia (bez "public")
    description: "Krótki opis co to za realizacja"
  },
  {
    id: 10, // kolejny numer
    title: "Auto Wygoda",
    category: "Inne lokale", // wybierz kategorię: Restauracje, Kawiarnie, Bary, Inne
    image: "/assets/rel/10.jpg", // ścieżka do zdjęcia (bez "public")
    description: "Krótki opis co to za realizacja"
  },
  {
    id: 11, // kolejny numer
    title: "Kawelin",
    category: "Restauracje", // wybierz kategorię: Restauracje, Kawiarnie, Bary, Inne
    image: "/assets/rel/11.jpg", // ścieżka do zdjęcia (bez "public")
    description: "Krótki opis co to za realizacja"
  },
  {
    id: 12, // kolejny numer
    title: "Pajewo",
    category: "Inne lokale", // wybierz kategorię: Restauracje, Kawiarnie, Bary, Inne
    image: "/assets/rel/12.jpg", // ścieżka do zdjęcia (bez "public")
    description: "Krótki opis co to za realizacja"
  },
  {
    id: 13, // kolejny numer
    title: "Voilà ",
    category: "Restauracje", // wybierz kategorię: Restauracje, Kawiarnie, Bary, Inne
    image: "/assets/rel/13.jpg", // ścieżka do zdjęcia (bez "public")
    description: "Krótki opis co to za realizacja"
  },
];

const categories = ["Wszystkie", "Restauracje", "Kawiarnie", "Bary", "Inne lokale"];

export default function RealizacjeClient() {
  const [activeCategory, setActiveCategory] = useState("Wszystkie");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "Wszystkie"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const handleProjectClick = (project: Project) => {
    if (project.image) {
      setSelectedProject(project);
    }
  };

  const handleCloseLightbox = () => {
    setSelectedProject(null);
  };

  return (
    <SubpageContainer>
      <SubpageHero>
        <SubpageTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Nasze Realizacje
        </SubpageTitle>
        <SubpageDescription
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Zobacz wybrane projekty, które zrealizowaliśmy dla naszych klientów.
        </SubpageDescription>
      </SubpageHero>

      <ContentSection>
        <FilterContainer>
          {categories.map((cat, idx) => (
            <FilterButton
              key={idx}
              $active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </FilterButton>
          ))}
        </FilterContainer>

        <GalleryGrid layout>
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleProjectClick(project)}
                style={{ cursor: project.image ? 'pointer' : 'default' }}
                whileHover={project.image ? { y: -10 } : {}}
              >
                <ProjectImage style={project.image ? { backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}>
                  {!project.image && (
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2-2v12a2 2 0 002 2z" />
                    </svg>
                  )}
                </ProjectImage>
                <ProjectInfo>
                  <ProjectCategory>{project.category}</ProjectCategory>
                  <ProjectTitle>{project.title}</ProjectTitle>
                </ProjectInfo>
              </ProjectCard>
            ))}
          </AnimatePresence>
        </GalleryGrid>
      </ContentSection>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <LightboxOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseLightbox}
          >
            <LightboxContent
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            >
              <CloseButton onClick={handleCloseLightbox}>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </CloseButton>
              <LightboxImage src={selectedProject.image} alt={selectedProject.title} />
            </LightboxContent>
          </LightboxOverlay>
        )}
      </AnimatePresence>
    </SubpageContainer>
  );
}
