'use client';

import React from 'react';
import Image from 'next/image';
import {
  Section,
  Container,
  ContentColumn,
  HeaderGroup,
  Subtitle,
  Title,
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
      title: 'Doświadczenie',
      description: 'Ponad 10 lat na rynku marketingu cyfrowego. Zrealizowaliśmy setki projektów dla klientów z różnych branż.',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Indywidualne podejście',
      description: 'Każdy biznes jest inny. Nie stosujemy szablonów – tworzymy strategie szyte na miarę Twoich potrzeb.',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: 'Mierzalne wyniki',
      description: 'Opieramy się na danych. Dostarczamy raporty, które jasno pokazują zwrot z inwestycji (ROI).',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
    },
  ];

  return (
    <Section id="why-us">
      <Container>
        <ContentColumn>
          <HeaderGroup>
            <Subtitle>Dlaczego my?</Subtitle>
            <Title>Partner, któremu możesz zaufać</Title>
          </HeaderGroup>

          <BenefitsList>
            {benefits.map((benefit, index) => (
              <BenefitItem key={index}>
                <IconWrapper>{benefit.icon}</IconWrapper>
                <BenefitContent>
                  <BenefitTitle>{benefit.title}</BenefitTitle>
                  <BenefitDescription>{benefit.description}</BenefitDescription>
                </BenefitContent>
              </BenefitItem>
            ))}
          </BenefitsList>
        </ContentColumn>

        <ImageColumn>
          <Image
            src="/assets/why.png"
            alt="Dlaczego my"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </ImageColumn>
      </Container>
    </Section>
  );
};

export default WhyUs;
