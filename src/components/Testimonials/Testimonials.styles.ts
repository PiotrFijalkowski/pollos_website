'use client';

import styled from 'styled-components';

export const Section = styled.section`
  padding: 100px 24px;
  background-color: #0a0a0a; /* Slightly darker/lighter than adjacent sections */
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  position: relative;
  z-index: 1;
`;

export const Header = styled.div`
  text-align: center;
  max-width: 800px;
`;

export const Label = styled.span`
  color: #FFD700;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: block;
  margin-bottom: 16px;
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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.div`
  background-color: #141414;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 215, 0, 0.3);
  }
`;

export const Stars = styled.div`
  display: flex;
  gap: 4px;
  color: #FFD700;
  
  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
`;

export const Quote = styled.p`
  font-size: 1.1rem;
  color: #e0e0e0;
  line-height: 1.6;
  font-style: italic;
  margin: 0;
  flex-grow: 1;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: auto;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

export const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #333;
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const AuthorName = styled.span`
  color: white;
  font-weight: 700;
  font-size: 1rem;
`;

export const AuthorRole = styled.span`
  color: #888;
  font-size: 0.85rem;
`;
