'use client';

import { SubpageContainer, SubpageHero, SubpageTitle, SubpageDescription } from '@/components/Shared/Subpage.styles';
import { BLOG_POSTS } from '@/data/blogPosts';
import { PostCard } from '@/components/Blog/PostCard';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 32px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

import MapSection from '@/components/MapSection/MapSection';

export default function KnowledgePage() {
  return (
    <SubpageContainer>
      <SubpageHero>
        <SubpageTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Wiedza i Inspiracje
        </SubpageTitle>
        <SubpageDescription
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Odkryj skuteczne strategie marketingu gastronomicznego.
          Praktyczne poradniki, które pomogą Ci rozwinąć Twój biznes.
        </SubpageDescription>
      </SubpageHero>

      <PostsGrid>
        {BLOG_POSTS.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <PostCard
              title={post.title}
              description={post.shortDescription}
              slug={post.slug}
              image={post.image}
              category={post.category}
            />
          </motion.div>
        ))}
      </PostsGrid>

      <MapSection />
    </SubpageContainer>
  );
}
