'use client';

import styled from 'styled-components';

export const Section = styled.section`
  padding: 100px 24px;
  background-color: #0a192f; /* Dark background matching Hero/Card bg */
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 100px;
  }
`;

export const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const HeaderGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Subtitle = styled.span`
  color: #64ffda;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  line-height: 1.2;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const BenefitsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
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
  background-color: rgba(100, 255, 218, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64ffda;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const BenefitContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const BenefitTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  margin: 0;
`;

export const BenefitDescription = styled.p`
  font-size: 1rem;
  color: #8892b0;
  line-height: 1.6;
  margin: 0;
`;

export const ImageColumn = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  
  @media (min-width: 1024px) {
    height: 600px;
  }
`;
