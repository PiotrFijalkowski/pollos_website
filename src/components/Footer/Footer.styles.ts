'use client';

import styled from 'styled-components';
import Link from 'next/link';

export const FooterContainer = styled.footer`
  background-color: #0a0a0a;
  padding: 60px 24px 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  color: white;
`;

export const ContentWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const LogoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 300px;
`;

export const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: 800;
  color: white;
`;

export const Description = styled.p`
  color: #a0a0a0;
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
`;

export const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ColumnTitle = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  color: white;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const LinkItem = styled(Link)`
  color: #a0a0a0;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;

  &:hover {
    color: #FFD700;
  }
`;

export const BottomSection = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

export const Copyright = styled.p`
  color: #666;
  font-size: 0.85rem;
  margin: 0;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
`;

export const SocialIcon = styled.a`
  color: #a0a0a0;
  transition: color 0.2s ease;

  &:hover {
    color: #FFD700;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
`;
