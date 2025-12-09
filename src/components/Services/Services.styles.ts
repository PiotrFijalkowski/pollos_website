'use client';

import styled from 'styled-components';

export const ServicesSection = styled.section`
  padding: 100px 24px;
  background-color: #141414; /* Dark background */
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Grid Background Effect */
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 60px;
  text-align: center;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  max-width: 1440px; /* Consistent with Why Us */
  width: 100%;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const IconWrapper = styled.div<{ $color: string }>`
  width: 60px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  transition: all 0.3s ease;
  color: white;

  svg {
    width: 32px;
    height: 32px;
  }
`;

export const ServiceCard = styled.div<{ $color: string }>`
  background-color: #1a1a1a;
  border: 1px solid #333;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ $color }) => $color};
    box-shadow: 0 10px 30px -10px ${({ $color }) => $color}40; /* Colored shadow */
  }

  &:hover ${IconWrapper} {
    background-color: ${({ $color }) => $color}20;
    color: ${({ $color }) => $color};
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 16px;
`;

export const CardDescription = styled.p`
  font-size: 0.95rem;
  color: #a0a0a0;
  line-height: 1.6;
  margin: 0;
`;
