'use client';

import styled from 'styled-components';
import Link from 'next/link';

export const FooterContainer = styled.footer`
  background-color: #050505; /* Darker than before */
  padding: 80px 24px 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  color: white;
`;

export const ContentWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const TopSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1.5fr 1fr 1fr 1fr; /* Brand wider, others equal */
    gap: 60px;
  }
`;

export const LogoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 350px;
`;

export const LogoText = styled.span`
  font-size: 2rem;
  font-weight: 800;
  color: white;
  letter-spacing: -0.02em;
`;

export const Description = styled.p`
  color: #a0a0a0;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`;

export const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ColumnTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  margin: 0;
  margin-bottom: 8px;
`;

export const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const LinkItem = styled(Link)`
  color: #a0a0a0;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.2s ease;
  position: relative;
  width: fit-content;

  &:hover {
    color: white;
    transform: translateX(5px);
  }
`;

export const ContactItem = styled.a`
  color: #a0a0a0;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 4px;

  &:hover {
    color: white;
  }
`;

export const ContactLabel = styled.span`
  font-size: 0.85rem;
  color: #666;
  font-weight: 600;
`;

export const ContactValue = styled.span`
  color: #a0a0a0;
  transition: color 0.2s ease;

  ${ContactItem}:hover & {
    color: white;
  }
`;

export const BottomSection = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
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
  font-size: 0.9rem;
  margin: 0;
`;
