'use client';

import styled from 'styled-components';

export const Section = styled.section`
  padding: 100px 24px;
  background-color: #141414; /* Deep dark gray/black */
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  min-height: 800px; /* Ensure enough height for the rising wave */

  /* Geometric background accents (Cubes/Shapes) */
  &::before {
    content: '';
    position: absolute;
    top: 10%;
    left: 40%;
    width: 100px;
    height: 100px;
    background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%);
    transform: rotate(45deg);
    z-index: 0;
    filter: blur(2px);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 20%;
    right: 10%;
    width: 150px;
    height: 150px;
    background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%);
    transform: rotate(15deg);
    z-index: 0;
    filter: blur(5px);
  }
`;

export const Container = styled.div`
  max-width: 1400px; /* Wider container for the panoramic feel */
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

export const HeaderGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 60px;
  max-width: 600px;
`;

export const Subtitle = styled.span`
  color: #888;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: white;
  margin: 0;
  line-height: 1.1;
  
  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

export const StepsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 600px; /* Fixed height for desktop layout */
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media (min-width: 1024px) {
    display: block; /* Use absolute positioning for children */
  }
`;

export const WavyLineSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  display: none;
  z-index: 0;

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const StepCard = styled.div<{ $top?: string; $left?: string; $align?: 'left' | 'center' | 'right' }>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 320px;

  @media (min-width: 1024px) {
    position: absolute;
    top: ${({ $top }) => $top || 'auto'};
    left: ${({ $left }) => $left || 'auto'};
    transform: translateX(-50%); /* Center horizontally relative to left */
    text-align: ${({ $align }) => $align || 'left'};
    align-items: ${({ $align }) => ($align === 'center' ? 'center' : $align === 'right' ? 'flex-end' : 'flex-start')};
  }
`;

export const StepNumber = styled.div`
  font-size: 8rem;
  font-weight: 900;
  color: white;
  line-height: 0.8;
  margin-bottom: 16px;
  font-family: 'Arial Black', sans-serif; /* Ensure heavy weight */
`;

export const StepTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin: 0;
`;

export const StepDescription = styled.p`
  font-size: 1rem;
  color: #a0a0a0;
  line-height: 1.5;
  margin: 0;
  max-width: 280px;
`;

export const StepLink = styled.a<{ $color: string }>`
  margin-top: 16px;
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
    color: ${({ $color }) => $color};
  }

  &::after {
    content: '+';
    font-size: 1.2rem;
    color: ${({ $color }) => $color};
  }
`;

export const Dot = styled.div<{ $color: string; $top: string; $left: string }>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  width: 24px;
  height: 24px;
  background-color: #141414;
  border: 4px solid ${({ $color }) => $color};
  border-radius: 50%;
  z-index: 2;
  transform: translate(-50%, -50%); /* Center exactly on the point */
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
  
  /* Inner dot */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background-color: white;
    border-radius: 50%;
  }
`;
