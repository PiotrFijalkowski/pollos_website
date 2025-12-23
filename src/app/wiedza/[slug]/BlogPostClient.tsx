'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BlogPost } from '@/data/blogPosts';
import { PostCard } from '@/components/Blog/PostCard';
import {
  SubpageContainer,
  SubpageHero,
  SubpageTitle
} from '@/components/Shared/Subpage.styles';

const PostContent = styled.article`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 24px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
  line-height: 1.8;

  h2 {
    font-size: 2rem;
    margin: 40px 0 20px;
    color: ${({ theme }) => theme.colors.text};
  }

  h3 {
    font-size: 1.5rem;
    margin: 30px 0 16px;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  ul, ol {
    margin-bottom: 24px;
    padding-left: 24px;
  }

  li {
    margin-bottom: 12px;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 16px;
    margin: 32px 0;
  }
`;

const PostHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.text};
`;

const PostMeta = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
  max-width: 1200px;
  margin: 40px auto;
`;

const SeeAlsoSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px 80px;
`;

const SeeAlsoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 32px;
  margin-top: 40px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.text};
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  svg {
    margin-right: 8px;
    width: 20px;
    height: 20px;
  }
`;

import { useEffect } from 'react';

interface BlogPostClientProps {
  post: BlogPost;
  randomPosts: BlogPost[];
}

export default function BlogPostClient({ post, randomPosts }: BlogPostClientProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post.slug]);

  return (
    <SubpageContainer>
      <SubpageHero style={{ paddingBottom: 0, borderBottom: 'none' }}>
        <div style={{ maxWidth: 800, width: '100%', textAlign: 'left' }}>
          <BackLink href="/wiedza">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Wróć do bazy wiedzy
          </BackLink>
        </div>

        <PostHeader>
          <SubpageTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {post.title}
          </SubpageTitle>
          <PostMeta>
            <span>{post.category}</span>
            <span>•</span>
            <span>{post.readTime} czytania</span>
          </PostMeta>
        </PostHeader>
      </SubpageHero>

      <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />

      <Divider />

      <SeeAlsoSection>
        <SectionTitle>Zobacz również</SectionTitle>
        <SeeAlsoGrid>
          {randomPosts.map((p) => (
            <PostCard
              key={p.id}
              title={p.title}
              description={p.shortDescription}
              slug={p.slug}
              image={p.image}
              category={p.category}
            />
          ))}
        </SeeAlsoGrid>
      </SeeAlsoSection>
    </SubpageContainer>
  );
}
