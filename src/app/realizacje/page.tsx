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
  ProjectTitle
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
  { id: 1, title: 'La Dolce Vita', category: 'Restauracje', image: '' },
  { id: 2, title: 'Black Coffee Co.', category: 'Kawiarnie' },
  { id: 3, title: 'Night Owl Bar', category: 'Bary' },
  { id: 4, title: 'Burger King Local', category: 'Restauracje' },
  { id: 5, title: 'Sushi Master', category: 'Restauracje' },
  {
    id: 6, // kolejny numer
    title: "Nazwa Twojego Projektu",
    category: "Restauracje", // wybierz kategorię: Restauracje, Kawiarnie, Bary, Inne
    image: "assets/rel/bar_mob.jpg", // ścieżka do zdjęcia (bez "public")
    description: "Krótki opis co to za realizacja"
  },
  { id: 7, title: 'Craft Beer House', category: 'Bary' },
  { id: 8, title: 'Sweet Dreams Bakery', category: 'Kawiarnie' },
];

const categories = ["Wszystkie", "Restauracje", "Kawiarnie", "Bary", "Inne lokale"];

export default function RealizacjePage() {
  const [activeCategory, setActiveCategory] = useState("Wszystkie");

  const filteredProjects = activeCategory === "Wszystkie"
    ? projects
    : projects.filter(p => p.category === activeCategory);

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
    </SubpageContainer>
  );
}
