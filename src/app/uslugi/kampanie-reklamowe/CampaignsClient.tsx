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

export default function CampaignsClient() {
  const sections = [
    {
      number: "01",
      title: "Meta Ads (FB / IG)",
      description: "Docieramy do Twojej grupy docelowej tam, gdzie spędza najwięcej czasu – na Facebooku i Instagramie.",
      items: [
        "Tworzenie kampanii dopasowanych do Twojego biznesu i celów marketingowych",
        "Skuteczne targetowanie lokalne i demograficzne",
        "Profesjonalne kreacje reklamowe: zdjęcia, filmy, rolki"
      ],
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Google Ads",
      description: "Pozwól, aby klienci trafiali do Ciebie, kiedy najbardziej Cię potrzebują – w wyszukiwarce Google.",
      items: [
        "Kampanie tekstowe, produktowe i display dopasowane do Twojej branży",
        "Optymalizacja pod lokalne wyszukiwania i słowa kluczowe",
        "Monitorowanie konwersji i ciągła optymalizacja wyników"
      ],
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Kampanie lokalne",
      description: "Skupiamy się na klientach w Twojej okolicy, aby zwiększyć ruch w lokalu i wzmocnić świadomość marki.",
      items: [
        "Targetowanie reklam w promieniu Twojego lokalu",
        "Reklamy w Google Maps i mediach społecznościowych",
        "Promocja wydarzeń, nowości i ofert specjalnych"
      ],
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Remarketing",
      description: "Przypominamy o Twoim lokalu tym, którzy już wykazali zainteresowanie – skutecznie zwiększając konwersję.",
      items: [
        "Reklamy dopasowane do wcześniejszej aktywności użytkowników",
        "Personalizowane komunikaty, które przyciągają klientów z powrotem",
        "Wzrost efektywności kampanii i ROI"
      ],
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
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
          Kampanie reklamowe
        </SubpageTitle>
        <SubpageDescription
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Przyciągnij klientów szybciej niż kiedykolwiek. Tworzymy skuteczne kampanie online, które generują realne efekty.
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
        <CTATitle>Chcesz, aby Twój lokal był pełen klientów?</CTATitle>
        <CTADescription>
          Skontaktuj się z nami i zacznij działać skutecznie już dziś dzięki precyzyjnym kampaniom reklamowym.
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
