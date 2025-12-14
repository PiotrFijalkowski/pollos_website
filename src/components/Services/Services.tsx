'use client';

import React from 'react';
import Link from 'next/link';
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
      title: 'Social Media',
      description: 'Prowadzenie profili, strategia contentowa oraz analiza i raporty. Budujemy zaangażowaną społeczność wokół Twojej marki.',
      color: '#ec4899', // Pink
      href: '/uslugi/social-media',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Kampanie Reklamowe',
      description: 'Meta Ads, Google Ads i kampanie lokalne. Precyzyjne i mierzalne działania, które generują sprzedaż.',
      color: '#FF4500', // Red/Orange
      href: '/uslugi/kampanie-reklamowe',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
    },
    {
      title: 'Zdjęcia i Filmy',
      description: 'Profesjonalne sesje zdjęciowe, wideo do Reels i rolki reklamowe. Wizualna strona Twojego biznesu.',
      color: '#A855F7', // Purple
      href: '/uslugi/zdjecia-i-filmy',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Strony Internetowe',
      description: 'Strony wizytówki, Landing page i optymalizacja mobile. Nowoczesne i szybkie strony WWW.',
      color: '#00FFFF', // Cyan
      href: '/uslugi/strony-internetowe',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'Pakiety Marketingowe',
      description: 'Gotowe rozwiązania dla Twojego biznesu. Wybierz pakiet dopasowany do Twoich potrzeb.',
      color: '#FFD700', // Gold
      href: '/uslugi/pakiety',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
  ];

  return (
    <ServicesSection id="services">
      <SectionTitle>Nasze Usługi</SectionTitle>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            $color={service.color}
            as={Link}
            href={service.href}
            style={{ textDecoration: 'none' }}
          >
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
