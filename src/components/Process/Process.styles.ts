'use client';

import styled from 'styled-components';

export const Section = styled.section`
  padding: 100px 24px;
  background-color: #112240; /* Lighter dark background */
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  text-align: center;
  margin: 0;
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

export const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  position: relative;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
    margin-top: 40px;

    /* Connecting line for desktop */
    &::before {
      content: '';
      position: absolute;
      top: 24px; /* Align with circle center */
      left: 0;
      width: 100%;
      height: 2px;
      background-color: rgba(100, 255, 218, 0.2);
      z-index: 0;
    }
  }
`;

export const StepCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  z-index: 1;

  @media (min-width: 1024px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex: 1;
  }
`;

export const StepNumber = styled.div`
  width: 48px;
  height: 48px;
  background-color: #0a192f;
  border: 2px solid #64ffda;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64ffda;
  font-weight: 700;
  font-size: 1.25rem;
  flex-shrink: 0;
  transition: all 0.3s ease;

  ${StepCard}:hover & {
    background-color: #64ffda;
    color: #0a192f;
    transform: scale(1.1);
  }
`;

export const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 10px;

  @media (min-width: 1024px) {
    padding-top: 20px;
    align-items: center;
  }
`;

export const StepTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  margin: 0;
`;

export const StepDescription = styled.p`
  font-size: 0.9rem;
  color: #8892b0;
  line-height: 1.5;
  margin: 0;
`;
