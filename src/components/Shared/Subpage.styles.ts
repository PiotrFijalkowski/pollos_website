'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SubpageContainer = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  padding-top: 80px;
`;

export const SubpageHero = styled.section`
  padding: 80px 24px;
  background-color: ${({ theme }) => theme.colors.surface};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;
  overflow: hidden;

  /* Grid Pattern Background */
  background-image: 
    linear-gradient(${({ theme }) => theme.colors.grid} 1px, transparent 1px),
    linear-gradient(90deg, ${({ theme }) => theme.colors.grid} 1px, transparent 1px);
  background-size: 40px 40px;
`;

export const SubpageTitle = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 24px;
  z-index: 1;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

export const SubpageDescription = styled(motion.p)`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 700px;
  line-height: 1.6;
  z-index: 1;
  font-weight: 500;
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const ContentSection = styled.section`
  padding: 80px 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  gap: 30px;
  margin-top: 40px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
    @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for better focus on content */
  }
`;

export const ListItem = styled(motion.li)`
  background: ${({ theme }) => theme.colors.surface};
  padding: 40px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 10px 40px -10px rgba(0,0,0,0.1);
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;
