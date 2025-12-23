'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CardContainer = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  position: relative; // For Link overlay

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

    img {
      transform: scale(1.05);
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.colors.secondary}; // Placeholder color
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const ContentContainer = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Category = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 12px;
  font-weight: 600;
`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.4;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 24px;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ReadMore = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  
  svg {
    margin-left: 8px;
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
  }

  ${CardContainer}:hover & svg {
    transform: translateX(4px);
  }
`;

interface PostCardProps {
  title: string;
  description: string;
  slug: string;
  image: string;
  category: string;
}

export const PostCard = ({ title, description, slug, image, category }: PostCardProps) => {
  return (
    <Link href={`/wiedza/${slug}`} style={{ textDecoration: 'none' }}>
      <CardContainer
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <ImageContainer>
          {/* Fallback to a placeholder if image fails or is empty, though we have defined images */}
          <StyledImage src={image} alt={title} loading="lazy" />
        </ImageContainer>
        <ContentContainer>
          <Category>{category}</Category>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <ReadMore>
            Czytaj dalej
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </ReadMore>
        </ContentContainer>
      </CardContainer>
    </Link>
  );
};
