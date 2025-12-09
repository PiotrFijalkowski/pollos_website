'use client';

import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Section = styled.section`
  background-color: #141414;
  padding: 100px 24px;
  position: relative;
  overflow: hidden;

  /* Grid Background Pattern */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    opacity: 0.5;
    pointer-events: none;
  }
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
  animation: ${fadeIn} 0.6s ease-out forwards;
`;

export const Label = styled.span`
  color: #888;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: block;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const AccordionItem = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 16px;
  animation: ${fadeIn} 0.6s ease-out forwards;
  
  &:last-child {
    border-bottom: none;
  }
`;

export const QuestionButton = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  background: none;
  border: none;
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  text-align: left;
  color: ${({ $isOpen }) => ($isOpen ? '#FFD700' : 'white')}; /* Yellow when open */
  transition: color 0.3s ease;

  &:hover {
    color: #FFD700;
  }
`;

export const QuestionText = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const IconWrapper = styled.div<{ $isOpen: boolean }>`
  width: 24px;
  height: 24px;
  position: relative;
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(45deg)' : 'rotate(0)')};

  &::before, &::after {
    content: '';
    position: absolute;
    background-color: currentColor;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &::before {
    width: 100%;
    height: 2px;
  }

  &::after {
    width: 2px;
    height: 100%;
  }
`;

export const AnswerWrapper = styled.div<{ $isOpen: boolean }>`
  max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: max-height 0.4s ease-in-out, opacity 0.4s ease-in-out;
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
`;

export const AnswerText = styled.p`
  color: #a0a0a0;
  font-size: 1rem;
  line-height: 1.6;
  padding-bottom: 24px;
  margin: 0;
`;
