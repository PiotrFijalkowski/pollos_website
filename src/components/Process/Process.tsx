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
} from './Process.styles';

const Process = () => {
  // Coordinates based on viewBox 0 0 1200 600
  // Path: M0,600 Q150,600 300,450 T600,300 T900,150 T1200,0
  // Points: (300, 450), (600, 300), (900, 150)

  const steps = [
    {
      number: '1',
      title: 'Marketing Strategy',
      description: 'We analysis your business & mark where to improve.',
      color: '#FFD700', // Yellow
      // Position for HTML Card (percentages of 1200x600)
      top: '75%', // 450/600
      left: '25%', // 300/1200
      align: 'left',
      cx: 300,
      cy: 450,
    },
    {
      number: '2',
      title: 'Social Media Marketing',
      description: 'We explore probable solutions to grow your social media.',
      color: '#FF4500', // Red
      top: '50%', // 300/600
      left: '50%', // 600/1200
      align: 'left',
      cx: 600,
      cy: 300,
    },
    {
      number: '3',
      title: 'Business Development',
      description: 'Our strategy, where we take your products to the customers.',
      color: '#00FFFF', // Cyan
      top: '25%', // 150/600
      left: '75%', // 900/1200
      align: 'left',
      cx: 900,
      cy: 150,
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
              Start: Bottom Left (0, 600)
              Q150,600 300,450 -> Curve to first point
              T600,300 -> Smooth curve to second point
              T900,150 -> Smooth curve to third point
              T1200,0 -> Smooth curve to end
            */}
            <path
              d="M0,600 Q150,600 300,450 T600,300 T900,150 T1200,0"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="2"
              fill="none"
            />

            {/* Dots rendered inside SVG for perfect alignment */}
            {steps.map((step, index) => (
              <g key={`svg-dot-${index}`}>
                {/* Outer Ring */}
                <circle
                  cx={step.cx}
                  cy={step.cy}
                  r="12"
                  fill="#141414"
                  stroke={step.color}
                  strokeWidth="4"
                />
                {/* Inner Dot */}
                <circle
                  cx={step.cx}
                  cy={step.cy}
                  r="4"
                  fill="white"
                />
              </g>
            ))}

            {/* End Dot (Optional, based on user feedback "kropek jest 4" - maybe they didn't want the 4th one? 
                User said "kropek jest 4 i tylko jedna jest na lini". 
                I will remove the 4th dot to be safe and stick to the 3 steps. 
                If they want an end marker, I can add it, but 3 steps = 3 dots usually looks cleaner.
            */}
          </WavyLineSVG>

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
