'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

// --- Hero Section Customization ---

export const AboutHero = styled.section`
  padding: 120px 24px 80px;
  background-color: ${({ theme }) => theme.colors.surface};
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const HeroContent = styled.div`
  max-width: 900px;
  z-index: 2;
`;

export const HeroTitle = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

export const HeroText = styled(motion.p)`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const HeroIconsBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.03;
  pointer-events: none;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  
  svg {
    width: 60px;
    height: 60px;
    margin: 20px;
  }
`;

// --- Process Section (Jak pracujemy) ---

export const ProcessSection = styled.section`
  padding: 100px 24px;
  background-color: ${({ theme }) => theme.colors.background};
  overflow: hidden;
`;

export const ProcessHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ProcessItem = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  padding: 40px 30px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  }

  .icon {
    width: 70px;
    height: 70px;
    background: ${({ theme }) => theme.colors.background};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.accent};
    font-size: 1.5rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    
    svg {
      width: 32px;
      height: 32px;
    }
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.6;
    margin: 0;
  }
`;

// --- Facilities Section (Nasze zaplecze) ---

export const FacilitiesSection = styled.section`
  padding: 100px 24px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const FacilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const FacilityCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 100%;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-5px);
  }
`;

export const FacilityImage = styled.div`
  height: 180px;
  background-color: ${({ theme }) => theme.colors.grid};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  /* Adding a subtle overlay pattern or video placeholder here would be cool later */
  
  svg {
    width: 48px;
    height: 48px;
    color: ${({ theme }) => theme.colors.textSecondary};
    opacity: 0.6;
  }
`;

export const FacilityContent = styled.div`
  padding: 24px;
  
  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 12px;
  }
  
  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.5;
  }
`;

// --- Custom CTA for About Page ---
export const AboutCTA = styled.section`
  padding: 100px 24px;
  background-color: ${({ theme }) => theme.colors.surface};
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const AboutCTAContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;
