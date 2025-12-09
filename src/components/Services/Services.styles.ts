'use client';

import styled from 'styled-components';

export const ServicesSection = styled.section`
  padding: 100px 24px;
  background-color: #112240; /* Slightly lighter than Hero */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 60px;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: #64ffda;
    border-radius: 2px;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  width: 100%;
  max-width: 1200px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ServiceCard = styled.div`
  background-color: #0a192f;
  padding: 32px;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: default;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  height: 100%;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
  }
`;

export const IconWrapper = styled.div`
  color: #64ffda;
  width: 48px;
  height: 48px;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin: 0;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: #8892b0;
  line-height: 1.6;
  margin: 0;
`;
