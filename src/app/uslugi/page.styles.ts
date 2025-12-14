'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PageContainer = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  padding-top: 80px; // Space for navbar
`;

export const HeroSection = styled.section`
  padding: 80px 24px;
  background-color: ${({ theme }) => theme.colors.surface};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  /* Grid Background Effect - re-used concept */
  background-image: 
    linear-gradient(${({ theme }) => theme.colors.grid} 1px, transparent 1px),
    linear-gradient(90deg, ${({ theme }) => theme.colors.grid} 1px, transparent 1px);
  background-size: 50px 50px;
`;

export const HeroTitle = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 24px;
  z-index: 1;

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

export const HeroDescription = styled(motion.p)`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 800px;
  margin-bottom: 40px;
  line-height: 1.6;
  z-index: 1;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const CTASection = styled.section`
  padding: 100px 24px;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 24px;
`;

export const CTADescription = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 40px;
  max-width: 600px;
`;

export const CTAButton = styled(motion.a)`
  background-color: ${({ theme }) => theme.colors.accent};
  color: #1a1a1a;
  padding: 16px 32px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  
  &:hover {
    filter: brightness(1.1);
  }
`;
