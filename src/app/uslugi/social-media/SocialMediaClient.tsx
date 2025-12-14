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

export default function SocialMediaClient() {
  const sections = [
    {
      number: "01",
      title: "Prowadzenie profili",
      description: "Dbamy o to, aby Twoje profile w mediach społecznościowych były spójne, atrakcyjne i angażujące.",
      items: [
        "Profesjonalne prowadzenie kont na Instagramie, Facebooku i TikToku",
        "Kreowanie wizerunku Twojego lokalu w sieci",
        "Regularne publikacje dopasowane do charakteru i stylu Twojej marki"
      ],
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Strategia contentowa",
      description: "Tworzymy spersonalizowaną strategię, dzięki której Twoje social media nie będą działały „na oślep”.",
      items: [
        "Analiza grupy docelowej i lokalnego rynku",
        "Plan publikacji dopasowany do trendów i sezonowości",
        "Dobór formatów: zdjęcia, filmy, rolki, stories"
      ],
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Publikacje + moderacja",
      description: "Nie tylko publikujemy treści, ale też dbamy o interakcję z Twoimi klientami.",
      items: [
        "Regularne posty, rolki i stories dopasowane do Twojej branży",
        "Moderacja komentarzy i wiadomości, szybkie odpowiadanie na pytania klientów",
        "Budowanie pozytywnego wizerunku i zaangażowanej społeczności"
      ],
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Analiza wyników",
      description: "Sprawdzamy, co działa, a co wymaga poprawy – dzięki temu Twoje kampanie są coraz skuteczniejsze.",
      items: [
        "Raporty z wynikami działań social media",
        "Analiza zasięgów, zaangażowania i konwersji",
        "Rekomendacje optymalizacji strategii i publikacji"
      ],
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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
          Social Media
        </SubpageTitle>
        <SubpageDescription
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Zwiększ widoczność i przyciągnij nowych klientów. Tworzymy treści, które budują zaangażowaną społeczność wokół Twojego biznesu.
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
        <CTATitle>Chcesz, aby Twój lokal był zauważony w sieci?</CTATitle>
        <CTADescription>
          Skontaktuj się z nami i zacznij przyciągać nowych klientów dzięki profesjonalnym social mediom.
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
