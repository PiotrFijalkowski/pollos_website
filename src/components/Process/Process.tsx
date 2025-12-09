'use client';

import React from 'react';
import {
  Section,
  Container,
  HeaderGroup,
  Subtitle,
  SectionTitle,
  StepsWrapper,
  WavyLineSVG,
  StepCard,
  StepNumber,
  StepTitle,
  StepDescription,
  StepLink,
  Dot,
} from './Process.styles';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Rozmowa',
      description: 'Poznajemy Twoje potrzeby i cele. To fundament naszej współpracy.',
      color: '#FFD700', // Yellow
      align: 'top',
      dotPos: { top: '35%', left: '15%' },
    },
    {
      number: '02',
      title: 'Audyt i Strategia',
      description: 'Analizujemy rynek i tworzymy plan, który przyniesie wyniki.',
      color: '#FF4500', // Red
      align: 'bottom',
      dotPos: { top: '65%', left: '50%' },
    },
    {
      number: '03',
      title: 'Materiały i Wdrożenie',
      description: 'Tworzymy content i uruchamiamy kampanię. Działamy kompleksowo.',
      color: '#00FFFF', // Cyan
      align: 'top',
      dotPos: { top: '25%', left: '85%' },
    },
  ];

  return (
    <Section id="process">
      <Container>
        <HeaderGroup>
          <Subtitle>PROCES</Subtitle>
          <SectionTitle>Jak działamy?</SectionTitle>
        </HeaderGroup>

        <StepsWrapper>
          {/* SVG Wavy Line - Visible on Desktop */}
          <WavyLineSVG viewBox="0 0 1200 400" fill="none" preserveAspectRatio="none">
            <path
              d="M0,150 C300,150 300,300 600,300 C900,300 900,100 1200,100"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="2"
              fill="none"
            />
          </WavyLineSVG>

          {/* Dots on the line */}
          {steps.map((step, index) => (
            <Dot
              key={`dot-${index}`}
              $color={step.color}
              $top={step.dotPos.top}
              $left={step.dotPos.left}
            />
          ))}
          {/* End Dot */}
          <Dot $color="#00FFFF" $top="25%" $left="100%" style={{ transform: 'translateX(-50%)' }} />


          {steps.map((step, index) => (
            <StepCard key={index} $align={step.align as 'top' | 'bottom'}>
              <StepNumber $color={step.color}>{step.number}</StepNumber>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
              <StepLink href="/contact" $color={step.color}>
                Dowiedz się więcej +
              </StepLink>
            </StepCard>
          ))}
        </StepsWrapper>
      </Container>
    </Section>
  );
};

export default Process;
