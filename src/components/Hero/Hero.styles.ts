'use client';

import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

const fadeIn = keyframes`
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
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0a192f; /* Deep dark blue */
  background-image: radial-gradient(circle at 50% 50%, #112240 0%, #0a192f 100%);
  position: relative;
  overflow: hidden;
  padding: 0 24px;
`;

export const HeroContent = styled.div`
  max-width: 1000px;
  width: 100%;
  text-align: center;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const Headline = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  color: white;
  margin: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;

  @media (min-width: 768px) {
    font-size: 4rem;
  }

  @media (min-width: 1024px) {
    font-size: 5rem;
  }

  span {
    background: linear-gradient(135deg, #64ffda 0%, #48bfe3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: block;
    margin-top: 10px;
  }
`;

export const Subheadline = styled.p`
  font-size: 1.125rem;
  color: #8892b0;
  max-width: 600px;
  line-height: 1.6;
  margin: 0;
  animation: ${fadeIn} 0.8s ease-out 0.2s forwards;
  opacity: 0;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
  animation: ${fadeIn} 0.8s ease-out 0.4s forwards;
  opacity: 0;
  width: 100%;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
    width: auto;
  }
`;

export const PrimaryButton = styled(Link)`
  background-color: #64ffda;
  color: #0a192f;
  padding: 16px 32px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.2s ease;
  text-align: center;

  &:hover {
    background-color: #48bfe3;
    transform: translateY(-2px);
  }
`;

export const SecondaryButton = styled(Link)`
  background-color: transparent;
  color: #64ffda;
  padding: 16px 32px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  border: 1px solid #64ffda;
  transition: all 0.2s ease;
  text-align: center;

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
    transform: translateY(-2px);
  }
`;

export const BackgroundShape = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(100, 255, 218, 0.1) 0%, rgba(10, 25, 47, 0) 70%);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 1;
`;
