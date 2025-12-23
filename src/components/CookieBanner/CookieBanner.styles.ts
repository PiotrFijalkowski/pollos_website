import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const BannerContainer = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  padding: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const BannerContent = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 1.5rem 2rem 1.5rem 2rem;
  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(236, 72, 153, 0.2);
  display: flex;
  align-items: center;
  gap: 2rem;
  z-index: 10;
  
  [data-theme='dark'] & {
    background: #141414;
    border: 1px solid rgba(236, 72, 153, 0.3);
    box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.5);
  }
  
  @media (max-width: 968px) {
    flex-direction: column;
    gap: 1.5rem;
    padding:1.5rem;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  left: calc(50% - 600px + 20px); /* Align with BannerContent left edge */
  top: -150px;
  width: 250px;
  height: 250px;
  z-index: 1;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2));
  }
  
  [data-theme='dark'] & img {
    filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.4));
  }
  
  @media (max-width: 1240px) {
    left: calc(1.5rem + 20px);
  }
  
  @media (max-width: 968px) {
    left: 50%;
    transform: translateX(-50%);
    bottom: calc(100% - 60px);
      top: -100px;
  width: 150px;
  height: 150px;
  }
`;

export const TextContent = styled.div`
  flex: 1;
  
  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0 0 0.5rem 0;
    background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
  
  p {
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0;
    color: var(--text-secondary);
    
    [data-theme='dark'] & {
      color: rgba(255, 255, 255, 0.8);
    }
    
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

export const PrivacyLink = styled(Link)`
  color: #ec4899;
  text-decoration: none;
  font-weight: 600;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
  
  [data-theme='dark'] & {
    color: #f472b6;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-shrink: 0;
  
  @media (max-width: 968px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Button = styled(motion.button) <{ $variant?: 'primary' | 'secondary' }>`
  padding: 0.875rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  ${props => props.$variant === 'primary' ? `
    background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(236, 72, 153, 0.3);
    
    &:hover {
      box-shadow: 0 6px 20px rgba(236, 72, 153, 0.4);
      transform: translateY(-2px);
    }
  ` : `
    background: transparent;
    color: var(--text-secondary);
    border: 2px solid rgba(236, 72, 153, 0.3);
    
    &:hover {
      background: rgba(236, 72, 153, 0.1);
      border-color: #ec4899;
    }
    
    [data-theme='dark'] & {
      color: rgba(255, 255, 255, 0.8);
      border-color: rgba(236, 72, 153, 0.4);
      
      &:hover {
        background: rgba(236, 72, 153, 0.15);
        border-color: #f472b6;
      }
    }
  `}
  
  @media (max-width: 968px) {
    width: 100%;
    padding: 1rem;
  }
`;

