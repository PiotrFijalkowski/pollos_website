'use client';

import React from 'react';
import {
  SubpageContainer,
  SubpageHero,
  SubpageTitle,
  SubpageDescription,
} from '@/components/Shared/Subpage.styles';
import {
  FeatureSection,
  FeatureContainer,
  FeatureGrid,
  ContentColumn,
  VisualColumn,
  SectionNumber,
  SectionTitle,
  SectionDescription,
  FeatureList,
  FeatureItem,
  VisualPlaceholder
} from '@/components/Shared/FeatureSection.styles';
import { CTASection, CTATitle, CTADescription, CTAButton } from '../page.styles';

export default function WebsitesClient() {
  const sections = [
    {
      number: "01",
      title: "Strony wizytówki",
      description: "Proste, eleganckie i przejrzyste strony, które pokazują Twój lokal i ofertę.",
      items: [
        "Atrakcyjna prezentacja menu i wnętrza",
        "Informacje kontaktowe, godziny otwarcia i lokalizacja",
        "Profesjonalny design dopasowany do charakteru Twojej marki"
      ],
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Landing pages",
      description: "Tworzymy strony dopasowane do konkretnych celów marketingowych.",
      items: [
        "Strony promujące wydarzenia, nowości lub promocje",
        "Projekt zoptymalizowany pod konwersję i zachęcający do działania",
        "Integracja z social media i kampaniami reklamowymi"
      ],
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Strony pod kampanie",
      description: "Skuteczne strony wspierające kampanie reklamowe online.",
      items: [
        "Dedykowane pod kampanie Meta Ads i Google Ads",
        "Szybkie ładowanie, intuicyjna nawigacja i jasny call-to-action",
        "Analiza zachowań użytkowników i optymalizacja wyników"
      ],
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Optymalizacja pod mobile",
      description: "Ponad 70% użytkowników przegląda strony na smartfonach – dbamy o pełną responsywność.",
      items: [
        "Strony w pełni dostosowane do urządzeń mobilnych",
        "Szybkie ładowanie i czytelny układ treści",
        "Zwiększenie konwersji dzięki intuicyjnej obsłudze na telefonach"
      ],
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <SubpageContainer>
      <SubpageHero>
        <SubpageTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Strony internetowe
        </SubpageTitle>
        <SubpageDescription
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Wyróżnij się w sieci i przyciągnij klientów. Projektujemy funkcjonalne i atrakcyjne strony, które sprzedają.
        </SubpageDescription>
      </SubpageHero>

      {sections.map((section, idx) => (
        <FeatureSection key={idx} $alternate={idx % 2 !== 0}>
          <FeatureContainer>
            <FeatureGrid $reversed={idx % 2 !== 0}>
              <ContentColumn
                $reversed={idx % 2 !== 0}
                initial={{ opacity: 0, x: idx % 2 !== 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <SectionNumber>{section.number}</SectionNumber>
                <SectionTitle>{section.title}</SectionTitle>
                <SectionDescription>{section.description}</SectionDescription>
                <FeatureList>
                  {section.items.map((item, i) => (
                    <FeatureItem key={i}>{item}</FeatureItem>
                  ))}
                </FeatureList>
              </ContentColumn>

              <VisualColumn
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <VisualPlaceholder>
                  {section.icon}
                </VisualPlaceholder>
              </VisualColumn>
            </FeatureGrid>
          </FeatureContainer>
        </FeatureSection>
      ))}

      <CTASection>
        <CTATitle>Chcesz, aby Twój lokal wyróżniał się w sieci?</CTATitle>
        <CTADescription>
          Skontaktuj się z nami i stwórz stronę, która przyciąga klientów i działa skutecznie!
        </CTADescription>
        <CTAButton
          href="/kontakt"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Skontaktuj się z nami
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </CTAButton>
      </CTASection>

    </SubpageContainer>
  );
}
