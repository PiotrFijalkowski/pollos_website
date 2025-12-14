'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PricingContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 60px 24px 100px;
`;

export const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const PricingCard = styled(motion.div) <{ $highlighted?: boolean }>`
  background: ${({ theme, $highlighted }) =>
    $highlighted ? theme.colors.surface : 'transparent'};
  border: 1px solid ${({ theme, $highlighted }) =>
    $highlighted ? theme.colors.accent : theme.colors.border};
  border-radius: 20px;
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s ease;
  height: 100%;

  /* Subtle glow for highlighted card */
  ${({ $highlighted, theme }) => $highlighted && `
    box-shadow: 0 0 40px -10px ${theme.colors.accent}40;
  `}

  &:hover {
    transform: translateY(-8px);
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 10px 40px -10px rgba(0,0,0,0.1);
  }
`;

export const CardHeader = styled.div`
  margin-bottom: 30px;
  text-align: center;
  
  /* Icon container */
  .icon {
    width: 60px;
    height: 60px;
    margin: 0 auto 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.accent};
    
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export const PackageTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 12px;
`;

export const PackageDescription = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
`;

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1; /* Push button to bottom */
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.4;

  &::before {
    content: '✓';
    color: ${({ theme }) => theme.colors.accent};
    font-weight: bold;
    flex-shrink: 0;
  }
`;

export const PackagePrice = styled.div`
  margin-bottom: 24px;
  text-align: center;
  
  .amount {
    font-size: 2.5rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.text};
  }
  
  .period {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const CTAButton = styled(motion.a) <{ $outline?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  
  ${({ theme, $outline }) => $outline ? `
    background: transparent;
    border: 1px solid ${theme.colors.border};
    color: ${theme.colors.text};
  ` : `
    background: ${theme.colors.accent};
    color: ${theme.colors.background}; /* Assuming dark bg text for accent */
    border: 1px solid ${theme.colors.accent};
  `}

  &:hover {
    filter: brightness(1.1);
  }
`;
