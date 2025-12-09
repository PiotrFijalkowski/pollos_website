'use client';

import React from 'react';
import {
  ServicesSection,
  SectionTitle,
  ServicesGrid,
  ServiceCard,
  IconWrapper,
  CardTitle,
  CardDescription,
} from './Services.styles';

const Services = () => {
  const services = [
    {
      title: 'Strategia',
      description: 'Budujemy kompleksowe plany działania, które przekształcają wizje w mierzalne wyniki biznesowe.',
      color: '#FFD700', // Yellow (Process Step 1)
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Design',
      description: 'Tworzymy unikalne identyfikacje wizualne i interfejsy, które zapadają w pamięć i budują zaufanie.',
      color: '#A855F7', // Purple (Why Us)
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: 'Development',
      description: 'Dostarczamy wydajne i skalowalne rozwiązania technologiczne, od stron www po zaawansowane aplikacje.',
      color: '#00FFFF', // Cyan (Process Step 3)
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'Marketing',
      description: 'Realizujemy skuteczne kampanie, które docierają do Twoich klientów i zwiększają konwersję.',
      color: '#FF4500', // Red (Process Step 2)
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
    },
  ];

  return (
    <ServicesSection id="services">
      <SectionTitle>Nasze Usługi</SectionTitle>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index} $color={service.color}>
            <IconWrapper $color={service.color}>{service.icon}</IconWrapper>
            <CardTitle>{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesSection>
  );
};

export default Services;
