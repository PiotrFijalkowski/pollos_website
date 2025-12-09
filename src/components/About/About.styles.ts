'use client';

import styled from 'styled-components';

export const AboutSection = styled.section`
  padding: 100px 24px;
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;
  overflow: hidden;
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 1;
`;

// Hero Specific Styles
export const HeroContainer = styled.section`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.surface};
  position: relative;
  overflow: hidden;
  padding: 120px 24px 60px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      linear-gradient(${({ theme }) => theme.colors.grid} 1px, transparent 1px),
      linear-gradient(90deg, ${({ theme }) => theme.colors.grid} 1px, transparent 1px);
    background-size: 50px 50px;
    opacity: 0.5;
    pointer-events: none;
  }
`;

export const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  z-index: 1;
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 24px;
  line-height: 1.1;

  @media (min-width: 768px) {
    font-size: 5rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
`;

// Story Section Styles
export const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const StoryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const StoryText = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
  margin: 0;
`;

export const StoryImageWrapper = styled.div`
  position: relative;
  height: 400px;
  border-radius: 24px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

// Values Section Styles
export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-top: 60px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ValueCard = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 40px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const ValueIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.grid};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 24px;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const ValueTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;
`;

export const ValueDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin: 0;
`;

// Team Section Styles
export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-top: 60px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const TeamMember = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MemberImage = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const MemberInfo = styled.div`
  text-align: center;
`;

export const MemberName = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 4px 0;
`;

export const MemberRole = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
