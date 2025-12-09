'use client';

import React from 'react';
import { HeroContainer, HeroContent, HeroTitle, HeroSubtitle } from './About.styles';

const AboutHero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>We Are Pollos</HeroTitle>
        <HeroSubtitle>
          A digital agency focused on delivering results through innovation,
          strategy, and creative excellence. We build brands that matter.
        </HeroSubtitle>
      </HeroContent>
    </HeroContainer>
  );
};

export default AboutHero;
