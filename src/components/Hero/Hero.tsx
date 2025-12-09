'use client';

import React from 'react';
import Image from 'next/image';
import {
  HeroContainer,
  ContentWrapper,
  LeftColumn,
  Label,
  Headline,
  Subheadline,
  CTAButton,
  RightColumn,
  CollageWrapper,
  MainImageWrapper,
  FloatingElement,
} from './Hero.styles';

const Hero = () => {
  return (
    <HeroContainer>
      <ContentWrapper>
        <LeftColumn>
          <Label>DIGITAL</Label>
          <Headline>
            Marketing<br />Agency
          </Headline>
          <Subheadline>
            Tworzymy cyfrowe doświadczenia, które pomagają markom rosnąć.
            Strategia, kreatywność i technologia w jednym miejscu.
          </Subheadline>
          <CTAButton href="/contact">
            Get a Demo
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </CTAButton>
        </LeftColumn>

        <RightColumn>
          <CollageWrapper>
            <MainImageWrapper>
              {/* Using why.svg as placeholder since generation failed */}
              <Image
                src="/assets/why.svg"
                alt="Marketing Expert Placeholder"
                fill
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </MainImageWrapper>

            {/* Floating Social Icons / Elements */}
            <FloatingElement $top="20%" $left="0%">
              {/* Placeholder for Facebook/Social Icon */}
              <div style={{ width: 60, height: 60, background: '#1877F2', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </div>
            </FloatingElement>

            <FloatingElement $bottom="20%" $left="10%">
              {/* Placeholder for Instagram/Social Icon */}
              <div style={{ width: 60, height: 60, background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
            </FloatingElement>

            <FloatingElement $bottom="40%" $right="-5%">
              {/* 3D Cube or similar shape */}
              <div style={{ width: 50, height: 50, background: '#333', transform: 'rotate(45deg)', boxShadow: '0 10px 20px rgba(0,0,0,0.5)' }}></div>
            </FloatingElement>

          </CollageWrapper>
        </RightColumn>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default Hero;
