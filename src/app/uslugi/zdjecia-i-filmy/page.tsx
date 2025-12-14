'use client';

import React from 'react';
import { motion } from 'framer-motion';
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

export default function PhotoVideoPage() {
  const sections = [
    {
      number: "01",
      title: "Zdjęcia lokalu i jedzenia",
      description: "Pokazujemy Twój lokal i menu w najlepszym świetle, aby przyciągać klientów już od pierwszego spojrzenia.",
      items: [
        "Profesjonalna fotografia wnętrz i aranżacji stolików",
        "Atrakcyjne zdjęcia potraw i napojów, które zachęcają do odwiedzin",
        "Dostosowanie stylu zdjęć do charakteru Twojej marki"
      ],
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Video do Reels / TikTok",
      description: "Tworzymy dynamiczne filmy zoptymalizowane pod najpopularniejsze platformy społecznościowe.",
      items: [
        "Krótkie i angażujące formy wideo, które przyciągają uwagę",
        "Produkcja materiałów pod trendowe formaty i efekty",
        "Skuteczne opowiadanie historii Twojego lokalu w 15–60 sekund"
      ],
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Rolki reklamowe",
      description: "Tworzymy profesjonalne rolki, które wspierają Twoje kampanie reklamowe.",
      items: [
        "Reklamowe filmy w formacie Reels i TikTok, gotowe do promocji",
        "Kreacje dopasowane do strategii marketingowej i grupy docelowej",
        "Łatwe do wykorzystania w kampaniach Meta Ads i Google Ads"
      ],
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Sesje cykliczne",
      description: "Dbamy o regularne uzupełnianie Twoich kanałów o świeże treści.",
      items: [
        "Planowanie cyklicznych sesji zdjęciowych i wideo",
        "Stała aktualizacja contentu, aby social media były aktywne i atrakcyjne",
        "Budowanie spójnego wizerunku marki w sieci"
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
          Profesjonalne zdjęcia i filmy
        </SubpageTitle>
        <SubpageDescription
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Przyciągnij wzrok i klientów. Tworzymy content, który wyróżnia Twój biznes i zwiększa zaangażowanie w sieci.
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
        <CTATitle>Chcesz, aby Twój lokal przyciągał wzrok?</CTATitle>
        <CTADescription>
          Skontaktuj się z nami i zacznij tworzyć profesjonalne zdjęcia i filmy, które naprawdę działają!
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
