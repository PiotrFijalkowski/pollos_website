'use client';

import React from 'react';
import Image from 'next/image';
import {
  Section,
  Container,
  HeaderGroup,
  Subtitle,
  Title,
  ContentWrapper,
  BenefitsList,
  BenefitItem,
  IconWrapper,
  BenefitContent,
  BenefitTitle,
  BenefitDescription,
  ImageColumn,
} from './WhyUs.styles';

const WhyUs = () => {
  const benefits = [
    {
      title: 'Increase Sales',
      description: 'Our marketing experts design digital campaigns that captivate and convert.',
      iconColor: '#00FF94', // Green accent
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="#00FF94">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: 'Result Analysis',
      description: 'Platform-specific, highly shareable, innovative, strategy-informed content.',
      iconColor: '#A855F7', // Purple accent
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="#A855F7">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
    },
    {
      title: 'Product Development',
      description: "If you put money behind a stone, it's still a stone. We make diamonds.",
      iconColor: '#3B82F6', // Blue accent
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="#3B82F6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
  ];

  return (
    <Section id="why-us">
      <Container>
        <HeaderGroup>
          <Subtitle>WHY CHOOSE US</Subtitle>
          <Title>Why Pollos !</Title>
        </HeaderGroup>

        <ContentWrapper>
          <BenefitsList>
            {benefits.map((benefit, index) => (
              <BenefitItem key={index}>
                <IconWrapper>
                  {benefit.icon}
                </IconWrapper>
                <BenefitContent>
                  <BenefitTitle>{benefit.title}</BenefitTitle>
                  <BenefitDescription>{benefit.description}</BenefitDescription>
                </BenefitContent>
              </BenefitItem>
            ))}
          </BenefitsList>

          <ImageColumn>
            <Image
              src="/assets/why.svg"
              alt="Why Choose Us"
              fill
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </ImageColumn>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default WhyUs;
