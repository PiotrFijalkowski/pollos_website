'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FeatureSection = styled.section<{ $alternate?: boolean }>`
  padding: 100px 24px;
  background-color: ${({ theme, $alternate }) =>
    $alternate ? theme.colors.surface : theme.colors.background};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;
  overflow: hidden;
`;

export const FeatureContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
`;

export const FeatureGrid = styled.div<{ $reversed?: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    direction: ${({ $reversed }) => $reversed ? 'rtl' : 'ltr'};
  }
`;

export const ContentColumn = styled(motion.div) <{ $reversed?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  direction: ltr; /* Reset direction for text content */
  
  @media (min-width: 1024px) {
    ${({ $reversed }) => $reversed && 'padding-left: 40px;'}
    ${({ $reversed }) => !$reversed && 'padding-right: 40px;'}
  }
`;

export const VisualColumn = styled(motion.div)`
  position: relative;
  height: 400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  direction: ltr; /* Reset direction */
  
  /* Abstract background blob/shape can be added here or via props */
  &::before {
    content: '';
    position: absolute;
    width: 80%;
    height: 80%;
    background: ${({ theme }) => theme.colors.grid};
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    z-index: 0;
    opacity: 0.5;
  }
`;

export const SectionNumber = styled.span`
  font-size: 5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.accent};
  opacity: 0.2;
  line-height: 1;
  margin-bottom: -20px;
  display: block;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const SectionDescription = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
  line-height: 1.5;

  &::before {
    content: '✓';
    color: ${({ theme }) => theme.colors.accent};
    font-weight: bold;
    flex-shrink: 0;
  }
`;

export const VisualPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: relative;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  
  svg {
    width: 64px;
    height: 64px;
    color: ${({ theme }) => theme.colors.accent};
  }
`;
