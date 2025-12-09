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
      number: '1',
      title: 'Marketing Strategy',
      description: 'We analysis your business & mark where to improve.',
      color: '#FFD700', // Yellow
      top: '60%',
      left: '15%',
      align: 'left',
      dotPos: { top: '55%', left: '25%' }, // Adjusted for visual curve alignment
    },
    {
      number: '2',
      title: 'Social Media Marketing',
      description: 'We explore probable solutions to grow your social media.',
      color: '#FF4500', // Red
      top: '40%',
      left: '50%',
      align: 'left',
      dotPos: { top: '40%', left: '50%' },
    },
    {
      number: '3',
      title: 'Business Development',
      description: 'Our strategy, where we take your products to the customers.',
      color: '#00FFFF', // Cyan
      top: '15%',
      left: '85%',
      align: 'left',
      dotPos: { top: '15%', left: '75%' },
    },
  ];

  return (
    <Section id="process">
      <Container>
        <HeaderGroup>
          <Subtitle>SERVICES</Subtitle>
          <SectionTitle>Expand Social<br />Reach</SectionTitle>
        </HeaderGroup>

        <StepsWrapper>
          {/* SVG Wavy Line - Rising from Bottom-Left to Top-Right */}
          <WavyLineSVG viewBox="0 0 1200 600" fill="none" preserveAspectRatio="none">
            {/* 
              Path Logic:
              Start: Bottom Left (0, 500)
              Curve up towards middle (600, 240) - passing through Step 2 dot
              Curve up towards top right (1200, 90) - passing through Step 3 dot area
            */}
            <path
              d="M-100,600 C200,600 300,330 600,240 S1000,90 1300,50"
              stroke="rgba(255, 255, 255, 0.2)"
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
          {/* End Dot (Top Right) */}
          <Dot $color="#00FFFF" $top="8%" $left="95%" />


          {steps.map((step, index) => (
            <StepCard
              key={index}
              $top={step.top}
              $left={step.left}
              $align={step.align as 'left' | 'center' | 'right'}
            >
              <StepNumber>{step.number}</StepNumber>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
              <StepLink href="/contact" $color={step.color}>
                Learn more
              </StepLink>
            </StepCard>
          ))}
        </StepsWrapper>
      </Container>
    </Section>
  );
};

export default Process;
