'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-bottom: 60px;
`;

export const FilterButton = styled.button<{ $active: boolean }>`
  background: ${({ theme, $active }) =>
    $active ? theme.colors.accent : 'transparent'};
  color: ${({ theme, $active }) =>
    $active ? '#1a1a1a' : theme.colors.text}; /* Dark text for active state */
  border: 1px solid ${({ theme, $active }) =>
    $active ? theme.colors.accent : theme.colors.border};
  padding: 10px 24px;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme, $active }) =>
    $active ? theme.colors.accent : theme.colors.grid};
    transform: translateY(-2px);
  }
`;

export const GalleryGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.accent};
    transition: all 0.3s ease;
  }
`;

export const ProjectImage = styled.div`
  width: 100%;
  height: 250px;
  background-color: ${({ theme }) => theme.colors.grid};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Placeholder icon style */
  svg {
    width: 48px;
    height: 48px;
    color: ${({ theme }) => theme.colors.textSecondary};
    opacity: 0.5;
  }
`;

export const ProjectInfo = styled.div`
  padding: 24px;
`;

export const ProjectCategory = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
  display: block;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;
