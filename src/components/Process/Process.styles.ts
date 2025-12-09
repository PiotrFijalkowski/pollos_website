'use client';

import styled from 'styled-components';

export const Section = styled.section`
  padding: 100px 24px;
  background-color: ${({ theme }) => theme.colors.surface};
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  min-height: 800px;

  /* Geometric background accents */
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
  max-width: 1440px;
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
  margin-bottom: 0; /* Removed margin */
  max-width: 600px;
  position: relative;
  z-index: 2; /* Ensure title stays on top */
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
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  line-height: 1.1;
  
  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

export const StepsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto; /* Auto height for mobile stack */
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-top: 0; /* Reset for mobile */

  @media (min-width: 1024px) {
    display: block;
    height: 850px; /* Fixed height for desktop wave */
    margin-top: -200px; /* Pull up only on desktop */
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
  overflow: visible;

  path {
    stroke: ${({ theme }) => theme.colors.text};
    opacity: 0.2;
    transition: stroke 0.3s ease;
  }

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
    transform: translateX(-50%); /* Center horizontally only */
    text-align: ${({ $align }) => $align || 'left'};
    align-items: ${({ $align }) => ($align === 'center' ? 'center' : $align === 'right' ? 'flex-end' : 'flex-start')};
    padding-top: 40px; /* Push content down below the dot */
  }
`;

export const StepNumber = styled.div`
  font-size: 8rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.text};
  line-height: 0.8;
  margin-bottom: 16px;
  font-family: 'Arial Black', sans-serif;
`;

export const StepTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const StepDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
  margin: 0;
  max-width: 280px;
`;

export const StepLink = styled.a<{ $color: string }>`
  margin-top: 16px;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
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
