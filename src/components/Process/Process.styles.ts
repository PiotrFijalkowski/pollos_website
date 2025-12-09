'use client';

import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

export const Section = styled.section`
  padding: 100px 24px;
  background-color: #050a10; /* Very dark, almost black */
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;

  /* Geometric background accents */
  &::before {
    content: '';
    position: absolute;
    top: -10%;
    left: -10%;
    width: 50%;
    height: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 70%);
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10%;
    right: -10%;
    width: 60%;
    height: 60%;
    background: radial-gradient(circle, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0) 70%);
    z-index: 0;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  position: relative;
  z-index: 1;
`;

export const HeaderGroup = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Subtitle = styled.span`
  color: #8892b0;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin: 0;
  
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const StepsWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    height: 400px; /* Fixed height for the wave layout */
    align-items: flex-start;
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

export const StepCard = styled.div<{ $align?: 'top' | 'bottom' }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    margin: 0;
    /* Positioning based on the wave */
    margin-top: ${({ $align }) => ($align === 'bottom' ? '180px' : '0')};
  }
`;

export const StepNumber = styled.div<{ $color: string }>`
  font-size: 5rem;
  font-weight: 800;
  color: white;
  line-height: 1;
  opacity: 0.9;
  text-shadow: 0 0 20px ${({ $color }) => $color}40; /* Glow effect */
  transition: transform 0.3s ease;

  ${StepCard}:hover & {
    transform: scale(1.05);
  }
`;

export const StepTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin: 0;
`;

export const StepDescription = styled.p`
  font-size: 1rem;
  color: #a8b2d1;
  line-height: 1.6;
  margin: 0;
`;

export const StepLink = styled.a<{ $color: string }>`
  margin-top: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ $color }) => $color};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const Dot = styled.div<{ $color: string; $top: string; $left: string }>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  width: 16px;
  height: 16px;
  background-color: #050a10;
  border: 3px solid ${({ $color }) => $color};
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 0 15px ${({ $color }) => $color};
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;
