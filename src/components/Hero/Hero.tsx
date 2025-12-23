'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
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
  BottomBarContainer,
  BottomBarContent,
  CapabilitiesColumn,
  CapabilitiesHeader,
  CapabilitiesIcon,
  CapabilitiesTitle,
  CapabilitiesText,
  FeaturesRow,
  FeatureItem,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
} from './Hero.styles';

const Hero = () => {
  return (
    <HeroContainer>
      <ContentWrapper>
        <LeftColumn>
          <Label
            as={motion.span}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            DIGITAL MARKETING
          </Label>
          <Headline
            as={motion.h1}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Digital Growth Agency
          </Headline>
          <Subheadline
            as={motion.p}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tworzymy cyfrowe doświadczenia, które pomagają markom rosnąć.
            Strategia, kreatywność i technologia w jednym miejscu.
          </Subheadline>
          <CTAButton
            href="/kontakt"
            as={motion.a}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Darmowa Konsultacja
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </CTAButton>
        </LeftColumn>

        <RightColumn
          as={motion.div}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <CollageWrapper>
            <MainImageWrapper>
              {/* Using why.svg as placeholder since generation failed */}
              <Image
                src="/assets/hero.png"
                alt="Marketing Expert Placeholder"
                fill
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </MainImageWrapper>

            {/* Floating Social Icons / Elements */}
            <FloatingElement
              $top="20%"
              $left="0%"
              as={motion.div}
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Placeholder for Instagram/Social Icon */}
              <div style={{ width: 60, height: 60, background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
            </FloatingElement>

            <FloatingElement
              $bottom="40%"
              $right="-5%"
              as={motion.div}
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              {/* 3D Cube or similar shape */}
              <div style={{ width: 50, height: 50, background: '#333', transform: 'rotate(45deg)', boxShadow: '0 10px 20px rgba(0,0,0,0.5)' }}></div>
            </FloatingElement>

          </CollageWrapper>
        </RightColumn>
      </ContentWrapper>

      <BottomBarContainer>
        <BottomBarContent>
          <CapabilitiesColumn>
            <CapabilitiesHeader>
              <CapabilitiesIcon />
              <CapabilitiesTitle>CAPABILITIES</CapabilitiesTitle>
            </CapabilitiesHeader>
            <CapabilitiesText>
              Pomagamy markom rosnąć online<span>—</span>
            </CapabilitiesText>
          </CapabilitiesColumn>

          <FeaturesRow>
            <FeatureItem>
              <FeatureIcon>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </FeatureIcon>
              <FeatureTitle>Strategia</FeatureTitle>
              <FeatureDescription>Kierunek</FeatureDescription>
            </FeatureItem>

            <FeatureItem>
              <FeatureIcon className="orange">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </FeatureIcon>
              <FeatureTitle>CONTENT</FeatureTitle>
              <FeatureDescription>Zaangażowanie</FeatureDescription>
            </FeatureItem>

            <FeatureItem>
              <FeatureIcon className="green">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </FeatureIcon>
              <FeatureTitle>WYNIKI</FeatureTitle>
              <FeatureDescription>Efektywność</FeatureDescription>
            </FeatureItem>
          </FeaturesRow>
        </BottomBarContent>
      </BottomBarContainer>
    </HeroContainer >
  );
};

export default Hero;
