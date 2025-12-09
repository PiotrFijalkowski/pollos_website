'use client';

import styled from 'styled-components';

export const Section = styled.section`
  padding: 100px 24px;
  background-color: #141414; /* Dark background */
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;

  /* Grid Background Effect */
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;
  position: relative;
  z-index: 1;
`;

export const HeaderGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  margin-bottom: 20px;
`;

export const Subtitle = styled.span`
  color: #888;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  margin: 0;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 80px;
  }
`;

export const BenefitsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const BenefitItem = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;
`;

export const IconWrapper = styled.div`
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  /* No background, just the icon color matching the reference style if needed, 
     or keep the previous style but adapted to dark theme */
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 32px;
    height: 32px;
    /* We'll pass color via props or use specific colors in the component */
  }
`;

export const BenefitContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const BenefitTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin: 0;
`;

export const BenefitDescription = styled.p`
  font-size: 1rem;
  color: #a0a0a0;
  line-height: 1.6;
  margin: 0;
`;

export const ImageColumn = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  
  @media (min-width: 1024px) {
    height: 500px;
  }
`;
