'use client';

import React from 'react';
import {
  Section,
  Container,
  SectionTitle,
  StepsContainer,
  StepCard,
  StepNumber,
  StepContent,
  StepTitle,
  StepDescription,
} from './Process.styles';

const Process = () => {
  const steps = [
    {
      number: 1,
      title: 'Rozmowa',
      description: 'Poznajemy Twoje potrzeby, cele biznesowe i grupę docelową.',
    },
    {
      number: 2,
      title: 'Audyt',
      description: 'Analizujemy Twoją obecną sytuację i działania konkurencji.',
    },
    {
      number: 3,
      title: 'Strategia',
      description: 'Opracowujemy szczegółowy plan działania i dobieramy narzędzia.',
    },
    {
      number: 4,
      title: 'Materiały',
      description: 'Tworzymy content, grafiki i wdrażamy rozwiązania techniczne.',
    },
    {
      number: 5,
      title: 'Wdrożenie',
      description: 'Uruchamiamy kampanię, monitorujemy wyniki i optymalizujemy.',
    },
  ];

  return (
    <Section id="process">
      <Container>
        <SectionTitle>Jak działamy?</SectionTitle>
        <StepsContainer>
          {steps.map((step) => (
            <StepCard key={step.number}>
              <StepNumber>{step.number}</StepNumber>
              <StepContent>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </StepContent>
            </StepCard>
          ))}
        </StepsContainer>
      </Container>
    </Section>
  );
};

export default Process;
