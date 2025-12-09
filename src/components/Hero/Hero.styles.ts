'use client';

import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeroContainer = styled.section`
  min-height: 60vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;
  overflow: hidden;
  padding: 150px 16px 40px; /* Reduced padding for mobile */
  flex-direction: column; /* Stack content on mobile */

  @media (min-width: 1024px) {
    flex-direction: column; /* Restore row layout for desktop */
    padding: 100px 16px 40px;
  }

  /* Perspective Grid Background */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      linear-gradient(${({ theme }) => theme.colors.grid} 1px, transparent 1px),
      linear-gradient(90deg, ${({ theme }) => theme.colors.grid} 1px, transparent 1px);
    background-size: 100px 100px;
    transform: perspective(500px) rotateX(20deg) scale(1.5);
    transform-origin: top center;
    opacity: 0.3;
    pointer-events: none;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 20; /* Increased to be above BottomBar (10) */

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
    align-items: flex-start;
  }
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: ${fadeInUp} 0.6s ease-out forwards;
`;

export const Headline = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  animation: ${fadeInUp} 0.6s ease-out 0.1s forwards;
  opacity: 0;

  @media (min-width: 768px) {
    font-size: 5rem;
  }

  @media (min-width: 1024px) {
    font-size: 6rem;
  }
`;

export const Subheadline = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin: 0;
  max-width: 500px;
  animation: ${fadeInUp} 0.6s ease-out 0.2s forwards;
  opacity: 0;
`;

export const CTAButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background === '#ffffff' ? '#1a1a1a' : '#000000'};
  padding: 16px 32px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.2s ease, background-color 0.2s ease;
  margin-top: 16px;
  animation: ${fadeInUp} 0.6s ease-out 0.3s forwards;
  opacity: 0;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.1);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const RightColumn = styled.div`
  position: relative;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeInUp} 0.8s ease-out 0.4s forwards;
  opacity: 0;

  @media (min-width: 768px) {
    height: 500px;
  }

  @media (min-width: 1024px) {
    height: 600px;
  }
`;

export const CollageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const MainImageWrapper = styled.div`
  position: absolute;
  top: 10%;
  right: 0;
  width: 80%;
  height: 80%;
  z-index: 20; /* Increased z-index to be above BottomBar (10) */
  
  /* Blue background rectangle behind image */
  &::before {
    content: '';
    position: absolute;
    top: 10%;
    right: -10%;
    width: 100%;
    height: 100%;
    background-color: #00BFFF; /* Deep Sky Blue */
    z-index: -1;
  }
`;



export const FloatingElement = styled.div<{ $top?: string; $left?: string; $right?: string; $bottom?: string }>`
  position: absolute;
  top: ${({ $top }) => $top || 'auto'};
  left: ${({ $left }) => $left || 'auto'};
  right: ${({ $right }) => $right || 'auto'};
  bottom: ${({ $bottom }) => $bottom || 'auto'};
  z-index: 3;
  filter: drop-shadow(0 10px 20px rgba(0,0,0,0.3));
  animation: float 6s ease-in-out infinite;

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
`;

export const BottomBarContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 40px 24px;
  position: relative;
  z-index: 10; /* Lower than ContentWrapper (20) */
  margin-top: 40px;
  
  @media (min-width: 1024px) {
    position: relative;
    max-width: 1440px; /* Container width */
    width: 100%;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
`;

export const BottomBarContent = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;



export const CapabilitiesColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
`;

export const CapabilitiesHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CapabilitiesIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: conic-gradient(from 180deg, #FFD700 0%, #FF4500 50%, #00FFFF 100%);
`;

export const CapabilitiesTitle = styled.span`
  font-weight: 800;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const CapabilitiesText = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.2;
  margin: 0;

  span {
    color: #FF4500; /* Orange accent for the dash */
  }
`;

export const FeaturesRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 60px;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
`;

export const FeatureIcon = styled.div`
  color: #A855F7; /* Purple accent */
  
  svg {
    width: 32px;
    height: 32px;
  }

  &.orange { color: #FF4500; }
  &.green { color: #00FF94; }
`;

export const FeatureTitle = styled.span`
  font-weight: 700;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const FeatureDescription = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.4;
`;
