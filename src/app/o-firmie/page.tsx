'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  AboutHero,
  HeroContent,
  HeroTitle,
  HeroText,
  HeroIconsBg,
  ProcessSection,
  ProcessHeader,
  ProcessSteps,
  ProcessItem,
  FacilitiesSection,
  FacilitiesGrid,
  FacilityCard,
  FacilityImage,
  FacilityContent,
  AboutCTA,
  AboutCTAContainer
} from './about.styles';
import {
  FeatureSection,
  FeatureContainer,
  FeatureGrid,
  ContentColumn,
  VisualColumn,
  SectionTitle,
  SectionDescription,
  VisualPlaceholder
} from '@/components/Shared/FeatureSection.styles';
import { CTAButton } from '@/app/uslugi/pakiety/pricing.styles';

export default function AboutPage() {
  return (
    <main>
      {/* 1. Kim jesteśmy (Hero) */}
      <AboutHero>
        <HeroIconsBg>
          {/* Abstract background icons */}
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h18v8zM6 15h2v2H6v-2zm0-4h2v2H6v-2zm0-4h2v2H6V7z" />
          </svg>
          {/* Add more decorative SVGs here if needed */}
        </HeroIconsBg>

        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Kim jesteśmy
          </HeroTitle>
          <HeroText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Pollos to agencja marketingowa dla lokali gastronomicznych. Tworzymy treści, kampanie i strategie,
            które wyróżniają restauracje, kawiarnie i bary w sieci, przyciągają klientów i budują zaangażowaną społeczność.
          </HeroText>
        </HeroContent>
      </AboutHero>

      {/* 2. Nasze podejście (Feature Section) */}
      <FeatureSection>
        <FeatureContainer>
          <FeatureGrid>
            <ContentColumn
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle>Nasze podejście</SectionTitle>
              <SectionDescription>
                Stawiamy na indywidualne podejście do każdego lokalu. Analizujemy markę, grupę docelową i lokalny rynek,
                aby tworzyć działania marketingowe, które są kreatywne, spójne i skuteczne.
              </SectionDescription>
              <div style={{ marginTop: '20px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
                  <span style={{ color: '#ec4899' }}>✓</span> Planowanie
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
                  <span style={{ color: '#ec4899' }}>✓</span> Kreatywność
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
                  <span style={{ color: '#ec4899' }}>✓</span> Skuteczność
                </span>
              </div>
            </ContentColumn>
            <VisualColumn
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <VisualPlaceholder>
                {/* Visual placeholder for Analysis -> Strategy -> Results flow */}
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </VisualPlaceholder>
            </VisualColumn>
          </FeatureGrid>
        </FeatureContainer>
      </FeatureSection>

      {/* 3. Jak pracujemy */}
      <ProcessSection>
        <ProcessHeader>
          <SectionTitle>Jak pracujemy</SectionTitle>
          <SectionDescription style={{ marginTop: '16px' }}>
            W Pollos dbamy o przejrzystość i wygodę współpracy.
          </SectionDescription>
        </ProcessHeader>

        <ProcessSteps>
          {[
            {
              title: "Jasny harmonogram",
              desc: "Jasny harmonogram działań i komunikacja na każdym etapie.",
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            },
            {
              title: "Regularne raporty",
              desc: "Regularne raporty z efektów działań marketingowych.",
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            },
            {
              title: "Elastyczność",
              desc: "Elastyczne dopasowanie usług do potrzeb lokalu.",
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            }
          ].map((item, idx) => (
            <ProcessItem
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <div className="icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {item.icon}
                </svg>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </ProcessItem>
          ))}
        </ProcessSteps>
      </ProcessSection>

      {/* 4. Dlaczego lokale (Reversed Feature) */}
      <FeatureSection $alternate>
        <FeatureContainer>
          <FeatureGrid $reversed>
            <ContentColumn
              $reversed
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle>Dlaczego lokale</SectionTitle>
              <SectionDescription>
                Specjalizujemy się w branży gastronomicznej, bo ją rozumiemy i kochamy. Wiemy, jak przyciągnąć klientów,
                pokazać lokal w najlepszym świetle i budować długotrwałe relacje z gośćmi w social mediach i online.
              </SectionDescription>
            </ContentColumn>
            <VisualColumn
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <VisualPlaceholder>
                {/* Placeholder for food/venue photo */}
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </VisualPlaceholder>
            </VisualColumn>
          </FeatureGrid>
        </FeatureContainer>
      </FeatureSection>

      {/* 5. Nasze zaplecze */}
      <FacilitiesSection>
        <ProcessHeader>
          <SectionTitle>Nasze zaplecze</SectionTitle>
          <SectionDescription style={{ marginTop: '16px' }}>
            Posiadamy pełne zaplecze kreatywne i techniczne, aby kompleksowo obsługiwać Twój lokal.
          </SectionDescription>
        </ProcessHeader>

        <FacilitiesGrid>
          {[
            {
              title: "Foto & Video",
              desc: "Profesjonalna fotografia i wideo do social media i reklam.",
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />,
              link: "/uslugi/zdjecia-i-filmy"
            },
            {
              title: "Produkcja Reels",
              desc: "Produkcja materiałów pod Reels, TikTok i rolki reklamowe.",
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />,
              link: "/uslugi/zdjecia-i-filmy"
            },
            {
              title: "Kampanie Ads",
              desc: "Prowadzenie kampanii reklamowych Meta Ads i Google Ads.",
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />,
              link: "/uslugi/kampanie-reklamowe"
            },
            {
              title: "Strony WWW",
              desc: "Tworzenie stron internetowych i landing pages.",
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />,
              link: "/uslugi/strony-internetowe"
            }
          ].map((item, idx) => (
            <Link href={item.link} key={idx} style={{ textDecoration: 'none' }}>
              <FacilityCard
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <FacilityImage>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {item.icon}
                  </svg>
                </FacilityImage>
                <FacilityContent>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </FacilityContent>
              </FacilityCard>
            </Link>
          ))}
        </FacilitiesGrid>
      </FacilitiesSection>

      {/* 6. CTA */}
      <AboutCTA>
        <AboutCTAContainer>
          <SectionTitle>Chcesz wyróżnić swój lokal w sieci?</SectionTitle>
          <SectionDescription>
            Chcesz, aby Twój lokal wyróżniał się w sieci i przyciągał więcej klientów?
            Skontaktuj się z Pollos i zacznij budować widoczność oraz zaangażowanie online.
          </SectionDescription>
          <CTAButton
            href="/kontakt"
            style={{ width: 'auto', paddingLeft: '40px', paddingRight: '40px', fontSize: '1.2rem' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Skontaktuj się z nami
          </CTAButton>
        </AboutCTAContainer>
      </AboutCTA>

    </main>
  );
}
