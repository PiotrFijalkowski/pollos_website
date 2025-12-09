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
      title: 'Indywidualne podejście',
      description: 'Nie jesteśmy korpo, nie robimy masówki.',
      iconColor: '#00FF94', // Green accent
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="#00FF94">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: 'Mocne foto i wideo',
      description: 'Nasze materiały wyglądają tak dobrze, że konkurencja pyta, czym to kręcimy.',
      iconColor: '#A855F7', // Purple accent
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="#A855F7">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Rozumiemy algorytmy',
      description: 'Wiemy, dlaczego jeden post leci viralem, a drugi tonie.',
      iconColor: '#3B82F6', // Blue accent
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="#3B82F6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
    },
    {
      title: 'Zero bullshitu',
      description: 'Mówimy jak jest, nie obiecujemy cudów, dostarczamy wyniki.',
      iconColor: '#FF4500', // Orange accent
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="#FF4500">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
    },
    {
      title: 'Kreatywność + strategia',
      description: 'Ładne to jedno, skuteczne to drugie. My robimy oba.',
      iconColor: '#FFD700', // Gold accent
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="#FFD700">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ];

  return (
    <Section id="why-us">
      <Container>
        <HeaderGroup>
          <Subtitle>WHY CHOOSE US</Subtitle>
          <Title>Dlaczego Pollos?</Title>
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
